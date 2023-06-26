import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CeldaService } from 'src/app/Service/celda.service';
import { ReclusoService } from 'src/app/Service/recluso.service';
import { TokenService } from 'src/app/Service/token.service';
import { UsuarioServiceService } from 'src/app/Service/usuario-service.service';
import { Recluso } from 'src/app/models/Recluso.model';

@Component({
  selector: 'app-recluso',
  templateUrl: './recluso.component.html',
  styleUrls: ['./recluso.component.css']
})
export class ReclusoComponent {

  reclusoSeleccionado!: Recluso;
  reclusoIdSeleccionado!: number;
  isAdmin: boolean = false;
  page!: number ;
  reclusos: Recluso[] = [];

  constructor(
    private usuarioService: UsuarioServiceService,
    private celdaService: CeldaService,
    private reclusoService: ReclusoService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  obtenerUsuario(recluso: Recluso) {
    this.reclusoSeleccionado = recluso;
  }

  obtenerUsuarioId(recluso: Recluso) {
    localStorage.setItem('idUsuario', recluso.id!.toString());
    this.router.navigate(['recluso/editar']);
  }

  ngOnInit() {
    if (this.tokenService.isAdmin() || this.tokenService.isMod()) {
      this.isAdmin = this.tokenService.isAdmin(); //Cambia el valor de admin para usarlo en el html
      this.reclusoService.listar().subscribe({
        next: (data: Recluso[]) => {
          this.reclusos = data.filter((recluso: Recluso) => recluso.status);
        },
        error: (error) => {
          console.log(`Ocurrió un error al traer los reclusos ${error.status}`);
          this.tokenService.logout();
          window.location.replace('/login');
        },
        complete: () => {},
      });
    }else{
      this.router.navigate(['/unauthorize']);
    }
  }
  delete(id: number) {
    this.reclusoService.eliminar(id).subscribe({
      next: (data: Recluso[]) => {
        this.reclusos = data.filter((recluso: Recluso) => recluso.status);
      },
      error: (error) => {
        console.log(`Ocurrió un error al eliminar el recluso ${error.status}`);
      },
      complete: () => {},
    });
  }
  onUsuarioGuardado(recluso: Recluso) {
    this.reclusos.push(recluso);
  }
}
