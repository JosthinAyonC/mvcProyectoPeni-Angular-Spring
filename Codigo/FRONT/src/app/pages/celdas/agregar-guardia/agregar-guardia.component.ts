import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CeldaService } from 'src/app/Service/celda.service';
import { TokenService } from 'src/app/Service/token.service';
import { UsuarioServiceService } from 'src/app/Service/usuario-service.service';
import { Celda } from 'src/app/models/Celda.model';
import { Role } from 'src/app/models/Role.model';
import { Usuario } from 'src/app/models/Usuario.model';

@Component({
  selector: 'app-agregar-guardia',
  templateUrl: './agregar-guardia.component.html',
  styleUrls: ['./agregar-guardia.component.css']
})
export class AgregarGuardiaComponent {
  celda!: Celda;//Usuario recuperado para editar
  form!: FormGroup;
  guardias: Usuario[] = [];
  @Input() idCeldaAEditar!: Celda;
  id = localStorage.getItem('idCelda');

  constructor(
    private celdaService: CeldaService,
    private usuarioService: UsuarioServiceService,
    private formBuilder: FormBuilder,
    private router: Router,
    private tokenService: TokenService
  ) { }

  readonlyMode: boolean = true;

  ngOnInit() {    
    if (this.tokenService.isAdmin()) {
      this.form = this.formBuilder.group({
        name: ['', Validators.required],
        pabellon: ['', Validators.required],
        guardia: ['', Validators.required],
      });
      this.usuarioService.obtenerPorRoles("ROLE_GUARDIA").subscribe({
        next: (data: Usuario[]) => {
          this.guardias = data.filter((usuario: Usuario) => usuario.status);
        },
        error: (error) => { console.log(`Ocurrió un error al traer los roles ${error.status}`); },
        complete: () => { }
      });
      //Obtener el usuario y setear los valores iniciales
      this.celdaService.obtenerCelda(+this.id!).subscribe({
        next: (data) => {
          this.celda = data;
        },
        error: (error) => { console.log(`Ocurrió un error al traer la celda ${error.status}`); },
        complete: () => {    
          this.form.patchValue({
            name: this.celda.name,
            pabellon: this.celda.pabellon?.id,
          });
        }
      });
    }else{
      this.router.navigate(['/unauthorize']);
    }
  }

  volver() {
    localStorage.removeItem('idCelda');//a mejorar
    this.router.navigate(['celda']);
  }
  toJson(value: any) {
    return JSON.stringify(value);
  }
  guardar() {
    if(this.form.value.guardia == ''){
      this.router.navigate(['celda']);
    }
    else if (this.form.value.name != '' && this.form.value.pabellon ) {
      const celda: Celda = {
        pabellon: this.celda.pabellon,
        name: this.form.value.name,
        usuarioGuardia: JSON.parse(this.form.value.guardia),
      };
      console.log(celda);
      this.celdaService
        .updateCelda(this.celda.id!, celda)
        .subscribe({
          next:(data) => {
            this.celda = data;
            alert('Se actualizo con exito');
            this.router.navigate(['celda']);
          },
          error: (error) => { console.log(`Ocurrió un error al actualizar el celda ${error.status}`); },
          complete: () => {
            localStorage.removeItem('idCelda');
           }
        });
    } else {
      alert('Debe completar todos los campos');
    }
  }
}
