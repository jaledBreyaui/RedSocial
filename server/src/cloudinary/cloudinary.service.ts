import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  UploadApiErrorResponse,
  UploadApiResponse,
  v2 as cloudinary,
} from 'cloudinary';

export interface CloudinaryUploadResult {
  url: string;
  publicId: string;
}

@Injectable()
export class CloudinaryService {
  constructor(private readonly configService: ConfigService) {
    cloudinary.config({
      cloud_name:
        this.configService.getOrThrow<string>('CLOUDINARY_CLOUD_NAME'),
      api_key: this.configService.getOrThrow<string>('CLOUDINARY_API_KEY'),
      api_secret:
        this.configService.getOrThrow<string>('CLOUDINARY_API_SECRET'),
      secure: true,
    });
  }

  uploadImage(
    file: Express.Multer.File,
    folder: 'avatars' | 'posts',
  ): Promise<CloudinaryUploadResult> {
    return new Promise((resolve, reject) => {
      const upload = cloudinary.uploader.upload_stream(
        {
          folder: `netsocial/${folder}`,
          resource_type: 'image',
          unique_filename: true,
          overwrite: false,
          transformation:
            folder === 'avatars'
              ? [
                  {
                    width: 500,
                    height: 500,
                    crop: 'fill',
                    gravity: 'auto',
                    quality: 'auto',
                    fetch_format: 'auto',
                  },
                ]
              : [{ quality: 'auto', fetch_format: 'auto' }],
        },
        (
          error: UploadApiErrorResponse | undefined,
          result: UploadApiResponse | undefined,
        ) => {
          if (error || !result) {
            reject(
              new InternalServerErrorException(
                'No se pudo subir la imagen a Cloudinary',
              ),
            );
            return;
          }

          resolve({
            url: result.secure_url,
            publicId: result.public_id,
          });
        },
      );

      upload.end(file.buffer);
    });
  }

  async deleteImage(publicId?: string): Promise<void> {
    if (!publicId) {
      return;
    }

    await cloudinary.uploader.destroy(publicId, {
      resource_type: 'image',
      invalidate: true,
    });
  }
}
