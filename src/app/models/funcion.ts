export class Funcion{
    constructor(
        public id: number,
        public idPlataforma: number,
        public idDisponibilidad: number,
        /*No se puede poner funcion como tal, por el nombre 
        de la clase, causa conflicto en el html */
        public fun: string,
        public parametros: string
    ){}
}