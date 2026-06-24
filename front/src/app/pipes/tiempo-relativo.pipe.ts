import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tiempoRelativo',
  standalone: true,
})
export class TiempoRelativoPipe implements PipeTransform {
  transform(value: string | Date | undefined | null): string {
    if (!value) return '';

    const date = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(date.getTime())) return '';

    const elapsedMinutes = Math.max(
      0,
      Math.floor((Date.now() - date.getTime()) / 60000),
    );

    if (elapsedMinutes < 1) return 'ahora';
    if (elapsedMinutes < 60) return `${elapsedMinutes} min`;

    const elapsedHours = Math.floor(elapsedMinutes / 60);
    if (elapsedHours < 24) return `${elapsedHours} h`;

    const elapsedDays = Math.floor(elapsedHours / 24);
    if (elapsedDays < 30) return `${elapsedDays} d`;

    const elapsedMonths = Math.floor(elapsedDays / 30);
    if (elapsedMonths < 12) return `${elapsedMonths} mes`;

    return `${Math.floor(elapsedMonths / 12)} a`;
  }
}
