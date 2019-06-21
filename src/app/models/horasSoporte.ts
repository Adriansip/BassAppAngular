export class HorasSoporte {
    constructor(
        public fecha: string,
        public idTipo: number,
        public solicita: string,
        public descripcion: string,
        public fechaEntrega: string,
        public atiende: string,
        public idEstatus: number,
        public horas: number
    ){}
}