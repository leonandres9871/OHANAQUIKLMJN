import { HttpClient } from '@angular/common/http';
import { Injectable, numberAttribute } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url='https://localhost/ohanaquicklmjn/php/usuarios/';

  constructor(private http:HttpClient) { }

  consultar() {
    return this.http.get(`${this.url}consultas.php`);    
  }
  
  insertar(articulo:any) {
    return this.http.post(`${this.url}insertar.php`, JSON.stringify(articulo));    
  }

  eliminar(id:number) {
    return this.http.get(`${this.url}eliminar.php?id=${id}`); 
  }
 
  edit(datos:any, id:number) {
      return this.http.post(`${this.url}editar.php?id=${id}`, JSON.stringify(datos));    
  }


}
