import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CeldaService } from 'src/app/Service/celda.service';
import { TokenService } from 'src/app/Service/token.service';
import { Celda } from 'src/app/models/Celda.model';

@Component({
  selector: 'app-celdas',
  templateUrl: './celdas.component.html',
  styleUrls: ['./celdas.component.css']
})
export class CeldasComponent {
  celdaSeleccionado!: Celda;
  page!: number ;
  isAdmin: boolean = false;
  isMod: boolean = false;

  constructor(
    private celdasService: CeldaService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  //funcion lista para ser exportada
  celdas: Celda[] = [];
  ngOnInit() {
    if (this.tokenService.isAdmin() || this.tokenService.isMod()) {
      this.isAdmin = this.tokenService.isAdmin(); 
      this.isMod = this.tokenService.isMod(); 
      this.celdasService.listar().subscribe({
        next: (data: Celda[]) => {
          this.celdas = data.filter((celda: Celda) => celda.status);
        },
        error: (error) => {
          console.log(`Ocurrió un error al traer los celdas ${error.status}`);
          this.tokenService.logout();
          window.location.replace('/login');
        },
        complete: () => {},
      });}
      else{
        this.router.navigate(['/unauthorize']);
      }
  }
  agregarGuardia(celda: Celda){
    localStorage.setItem('idCelda', celda.id!.toString());
    this.router.navigate(['celda/agregarGuardia']);
  }
}
