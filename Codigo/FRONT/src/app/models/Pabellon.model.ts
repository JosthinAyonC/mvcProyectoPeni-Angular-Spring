import { Usuario } from "./Usuario.model";

export interface Pabellon {
    id?: number,
    status?: string,
    cant_celdas?: number,
    vigilante?: Usuario,
}