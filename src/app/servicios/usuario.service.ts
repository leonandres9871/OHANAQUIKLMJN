import { HttpClient } from '@angular/common/http';
import { Injectable, numberAttribute } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url='http://localhost/ohanaquickljmn/src/app/php/usuario/';

  constructor(private http:HttpClient) { }

  consultar() {
    return this.http.get(`${this.url}consulta.php`);    
  }
  
  insertar(articulo:any) {
    return this.http.post(`${this.url}insertar.php`, JSON.stringify(articulo));    
  }

  eliminar(id:number) {
    return this.http.get(`${this.url}eliminar.php?id=${id}`); 
  }
 
  edit(datos:any) {
      return this.http.post(`${this.url}editar.php?id`, JSON.stringify(datos));    
  }


}
