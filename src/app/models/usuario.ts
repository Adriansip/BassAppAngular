export class Usuario {
    constructor(
        public nombre: string,
        public apellidoPaterno: string,
        public apellidoMaterno: string,
        public nickName: string,
        public correo: string,
        //puede ser int
        public idRol: number,
        public contrasenia: string,
        public acceso: string,
        public hasta: string
    ) { }
}