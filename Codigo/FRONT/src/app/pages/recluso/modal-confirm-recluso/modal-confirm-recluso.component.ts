import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recluso } from 'src/app/models/Recluso.model';

@Component({
  selector: 'app-modal-confirm-recluso',
  templateUrl: './modal-confirm-recluso.component.html',
  styleUrls: ['./modal-confirm-recluso.component.css']
})
export class ModalConfirmReclusoComponent {
  @Input() idReclusoAEliminar!: Recluso;
  @Output() eliminarRecluso = new EventEmitter<number>();

  eliminarUsuarioConfirmado() {
    this.eliminarRecluso.emit(this.idReclusoAEliminar.id);
  }
}
