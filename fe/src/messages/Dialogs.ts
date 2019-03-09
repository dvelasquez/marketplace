import {SweetAlertOptions} from 'sweetalert2';

const LOGIN_SUCCESS: SweetAlertOptions = {
  title: 'Exito',
  text: 'Ha iniciado sesión correctamente',
  type: 'success',
  confirmButtonText: '¡Genial!',
};

const LOGIN_ERROR: SweetAlertOptions = {
  title: 'Error',
  text: '',
  type: 'error',
  confirmButtonText: 'Entiendo',
};

const REGISTER_SUCCESS: SweetAlertOptions = {
  title: 'Exito',
  text: 'Cuenta creada exitosamente, por favor inicie sesión con las nuevas credenciales',
  type: 'success',
  confirmButtonText: '¡Genial!',
};

const REGISTER_ERROR: SweetAlertOptions = {
  title: 'Error',
  text: 'El usuario o contraseña entregado no son válidos.',
  type: 'error',
  confirmButtonText: 'Entiendo',
};

export {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
};
