import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment } from '../comments/entities/comment.entity';
import { Post } from '../posts/entities/post.entity';

@Injectable()
export class StatsService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<Post>,
    @InjectModel(Comment.name) private readonly commentModel: Model<Comment>,
  ) {}

  async getPostsByUser(from?: string, to?: string) {
    const createdAt = this.buildDateRange(from, to);

    return this.postModel.aggregate([
      { $match: { createdAt } },
      {
        $group: {
          _id: '$author',
          count: { $sum: 1 },
        },
      },
      {
        $lookup: {
          from: 'users',
          let: { authorId: { $toString: '$_id' } },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: [{ $toString: '$_id' }, '$$authorId'],
                },
              },
            },
          ],
          as: 'author',
        },
      },
      { $unwind: { path: '$author', preserveNullAndEmptyArrays: true } },
      {
        $project: {
          _id: 0,
          userId: { $toString: '$_id' },
          userName: {
            $trim: {
              input: {
                $concat: [
                  { $ifNull: ['$author.name', 'Usuario'] },
                  ' ',
                  { $ifNull: ['$author.lastName', 'desconocido'] },
                ],
              },
            },
          },
          email: '$author.email',
          count: 1,
        },
      },
      { $sort: { count: -1, userName: 1 } },
    ]);
  }

  async getCommentsByDay(from?: string, to?: string) {
    const createdAt = this.buildDateRange(from, to);

    return this.commentModel.aggregate([
      { $match: { createdAt } },
      {
        $group: {
          _id: {
            $dateToString: {
              format: '%Y-%m-%d',
              date: '$createdAt',
              timezone: 'America/Argentina/Buenos_Aires',
            },
          },
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          date: '$_id',
          count: 1,
        },
      },
      { $sort: { date: 1 } },
    ]);
  }

  async getCommentsByPost(from?: string, to?: string) {
    const createdAt = this.buildDateRange(from, to);

    return this.commentModel.aggregate([
      { $match: { createdAt } },
      {
        $group: {
          _id: '$post',
          count: { $sum: 1 },
        },
      },
      {
        $lookup: {
          from: 'posts',
          let: { postId: { $toString: '$_id' } },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: [{ $toString: '$_id' }, '$$postId'],
                },
              },
            },
          ],
          as: 'post',
        },
      },
      { $unwind: { path: '$post', preserveNullAndEmptyArrays: true } },
      {
        $project: {
          _id: 0,
          postId: { $toString: '$_id' },
          postTitle: {
            $let: {
              vars: {
                content: { $ifNull: ['$post.content', ''] },
              },
              in: {
                $cond: [
                  { $eq: [{ $strLenCP: '$$content' }, 0] },
                  'Publicacion sin texto',
                  {
                    $cond: [
                      { $gt: [{ $strLenCP: '$$content' }, 45] },
                      {
                        $concat: [{ $substrCP: ['$$content', 0, 45] }, '...'],
                      },
                      '$$content',
                    ],
                  },
                ],
              },
            },
          },
          count: 1,
        },
      },
      { $sort: { count: -1, postTitle: 1 } },
    ]);
  }

  private buildDateRange(from?: string, to?: string) {
    const fromDate = from ? new Date(from) : new Date('1970-01-01');
    const toDate = to ? new Date(to) : new Date();

    if (Number.isNaN(fromDate.getTime()) || Number.isNaN(toDate.getTime())) {
      throw new BadRequestException('Rango de fechas invalido');
    }

    fromDate.setHours(0, 0, 0, 0);
    toDate.setHours(23, 59, 59, 999);

    if (fromDate > toDate) {
      throw new BadRequestException(
        'La fecha desde no puede ser posterior a la fecha hasta',
      );
    }

    return { $gte: fromDate, $lte: toDate };
  }
}
