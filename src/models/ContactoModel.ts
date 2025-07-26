type Contacto = {
  nombre: string;
  correo: string;
  mensaje: string;
};

const mensajes: Contacto[] = [];

export function saveContactoData(data: Contacto) {
  mensajes.push(data);
  console.log("📩 Mensaje guardado:", data);
}

export function getMensajes() {
  return mensajes;
}