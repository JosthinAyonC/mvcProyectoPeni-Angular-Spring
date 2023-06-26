import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CeldaService } from 'src/app/Service/celda.service';
import { ReclusoService } from 'src/app/Service/recluso.service';
import { Celda } from 'src/app/models/Celda.model';
import { Recluso } from 'src/app/models/Recluso.model';

@Component({
  selector: 'app-nuevo-recluso',
  templateUrl: './nuevo-recluso.component.html',
  styleUrls: ['./nuevo-recluso.component.css']
})
export class NuevoReclusoComponent {
  @Output() reclusoGuardado = new EventEmitter<Recluso>();

  form!: FormGroup;
  celdas: Celda[] = [];

  constructor(
    private reclusoService: ReclusoService,
    private formBuilder: FormBuilder,
    private celdaService: CeldaService,
  ) {}
  
  toJson(value: any) {
    return JSON.stringify(value);
  }
  ngOnInit() {
    this.celdaService.listar().subscribe({
      next: (data: Celda[]) => {
        this.celdas = data;
      },
      error:()=>{console.log('Ocurrió un error en el servidor');},
      complete:() => {}
    });
    this.form = this.formBuilder.group({
      cedula: ['', Validators.required],
      edad: ['', Validators.required],
      cargo: ['', Validators.required],
      sentencia: ['', Validators.required],
      status: ['', Validators.required],
      celda: ['', Validators.required],
    });
  }
  guardar() {
    if (this.form.valid) {
      console.log(this.form.value);
      const recluso: Recluso = {
        cedula: this.form.value.cedula,
        edad: this.form.value.edad,
        cargo: this.form.value.cargo,
        sentencia: this.form.value.sentencia,
        status: this.form.value.status,
        celda: JSON.parse(this.form.value.celda) ,
      };
      this.reclusoService.crearNuevoRecluso(recluso).subscribe({
        next:() => {
          this.reclusoGuardado.emit(recluso);
          alert('Recluso creado');
        },
        error:()=>{
          alert('Ocurrió un error en el servidor');
        },
        complete:() => {
          this.form.reset();
        }
      });
    } else {
      alert('Debe completar todos los campos');
    }
  }
  emitirEventoUsuarioGuardado(recluso: Recluso) {
    this.reclusoGuardado.emit(recluso);
  }
}
