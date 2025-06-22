// Variable global para el backend
window.BACKEND_URL = 'https://imeicheck-41j1.onrender.com';

// Ejemplo de uso:
fetch(window.BACKEND_URL + '/api/users/me', {
  headers: { Authorization: 'Bearer ' + token }
})
  .then(res => res.json())
  .then(data => console.log(data));