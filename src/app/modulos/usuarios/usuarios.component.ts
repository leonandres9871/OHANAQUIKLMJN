import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class usuariosComponent {

  verf = false;
  usuario: any;
  user = {
    nombre: "",
    usuario: "",
    tipo: "",
    identificacion: "",
    email: "",
    clave: "",
    celular: ""
  };

   validnombre = true;
   validusuario = true;
   validtipo = true;
   valididentificacion = true;
   validclave = true;
   validcelular = true;

   constructor(private suser:UsuarioService) {}

   ngOnInit(): void{
     this.consulta();
     this.limpiar()
   }
    mostrar(dato:any){
      switch(dato){
        case 0:
         this.verf = false;
         break;
         case 1:
          this.verf = true;
         break; 
      }
    }

    limpiar(){
      this.user.nombre = "";
      this.user.usuario = ""; 
      this.user.tipo = "";
      this.user.identificacion = "";
      this.user.clave = "";
      this.user.celular = "";
    }
   
   validar(){
    if(this.user.nombre == ""){
      this.validnombre = false
  }else{
       this.validnombre = true
  }

  if(this.user.usuario == ""){
    this.validusuario = false
}else{
     this.validusuario = true
}

if(this.user.tipo == ""){
  this.validtipo = false
}else{
   this.validtipo = true
}

if(this.user.identificacion == ""){
  this.valididentificacion = false
}else{
   this.valididentificacion = true
}

if(this.user.clave == ""){
  this.validclave = false
}else{
   this.validclave = true
}

if(this.user.celular == ""){
  this.validcelular = false
}else{
   this.validcelular = true
}

}
  
   

   consulta() {
     this.suser.consultar().subscribe((result:any) =>{
      this.usuario = result;
      //console.log(this.cate);

     })

   }

   ingresar() {

    this.validar();

    if(this.validnombre==true && this.validusuario==true && this.valididentificacion==true && this.validclave==true && this.validtipo==true && this.validcelular==true){
    this.suser.insertar(this.user).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {

        this.consulta();
     }
    });
     this.mostrar(0);
     this.limpiar();
  
    }

  }

} 

   


