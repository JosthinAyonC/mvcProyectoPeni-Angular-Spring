import { Pabellon } from "./Pabellon.model";
import { Usuario } from "./Usuario.model";

export interface Celda {
    id?: number,
    capacidad?: number,
    pabellon?: Pabellon,
    name: string,
    usuarioGuardia?: Usuario,
    status?: string
}