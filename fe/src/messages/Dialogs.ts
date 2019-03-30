import {SweetAlertOptions} from 'sweetalert2';

const LOGIN_SUCCESS: SweetAlertOptions = {
  title: 'Exito',
  text: 'Ha iniciado sesión correctamente',
  type: 'success',
  confirmButtonText: '¡Genial!',
};

const LOGIN_ERROR: SweetAlertOptions = {
  title: 'Error',
  text: 'No se ha podido iniciar sesion. \\n Error: ',
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
  text: 'El usuario o contraseña entregado no son válidos.\\n Error: ',
  type: 'error',
  confirmButtonText: 'Entiendo',
};

const AD_INSERT_SUCCESS: SweetAlertOptions = {
  title: 'Aviso insertado',
  text: 'Tu aviso se ha insertado correctamente',
  type: 'success',
  confirmButtonText: 'Entendido, volver al Listado',
};

const AD_INSERT_ERROR: SweetAlertOptions = {
  title: 'Error',
  text: 'Tu aviso no ha podido ser insertado, por favor intenta nuevamente\\n Error: ',
  type: 'error',
  confirmButtonText: 'Entiendo',
};

const PROFILE_SUCCESS: SweetAlertOptions = {
  title: 'Usuario actualizado',
  text: 'El usuario se ha actualizado correctamente',
  type: 'success',
  confirmButtonText: 'Aceptar',
};

const PROFILE_ERROR: SweetAlertOptions = {
  title: 'Error',
  text: 'No se ha podido actualizar el usuario \\n Error: ',
  type: 'error',
  confirmButtonText: 'Entiendo',
};

export {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  AD_INSERT_SUCCESS,
  AD_INSERT_ERROR,
  PROFILE_SUCCESS,
  PROFILE_ERROR,
};
