import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function confirmarClaveValidator(): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const claveControl = formGroup.get('password');
    const repiteClaveControl = formGroup.get('repitePassword');

    if (!claveControl || !repiteClaveControl) {
      return null;
    }

    if (claveControl.value !== repiteClaveControl.value) {
      repiteClaveControl.setErrors({
        ...(repiteClaveControl.errors ?? {}),
        noCoincide: 'La clave no coincide',
      });
      return { noCoincide: true };
    }

    if (repiteClaveControl.hasError('noCoincide')) {
      const { noCoincide, ...otrosErrores } = repiteClaveControl.errors ?? {};
      repiteClaveControl.setErrors(Object.keys(otrosErrores).length ? otrosErrores : null);
    }

    return null;
  };
}
