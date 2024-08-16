import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

   url='http:localhost/OHANAQUIKLMJN/src/app/php/ciudad'

  constructor(private hhttp:HttpClient) { }

  consultar() {
    return this.hhttp.get(`${this.url}consulta.php`)    
  }
  
  insertar(articulo:any) {
    return this.hhttp.post(`${this.url}insertar.php`, JSON.stringify(articulo));    
  }

  eliminar(id:number) {
    return this.hhttp.get(`${this.url}eliminar.php?id=${id}`); 
  }
 
  edit(datos:any) {
      return this.hhttp.post(`${this.url}editar.php`, JSON.stringify(datos));    
  }

}
