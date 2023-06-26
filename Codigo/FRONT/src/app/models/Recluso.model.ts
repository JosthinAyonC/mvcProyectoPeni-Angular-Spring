import { Celda } from "./Celda.model";

export interface Recluso {
    id?: number,
    cedula?: string,
    edad?: number,
    cargo?: string,
    sentencia?: number,
    status?: string,
    celda?: Celda,
}