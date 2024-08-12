import { Component } from '@angular/core';
import { Subscriber } from 'rxjs';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class usuariosComponent {

  verf = false;
  usuario: any;
  iduser: any;
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
   beditar = false;

   constructor(private suser:UsuarioService) {}

   ngOnInit(): void{
     this.consulta();
     this.limpiar()
   }
    mostrar(dato:any) {
      switch(dato){
        case 0:
         this.verf = false;
         this.beditar= false;
         this.iduser = "";
         this.limpiar();
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
      //console.log(this.usuario); 

     })

   }

   ingresar() {

    //console.log(this.cate);

     this.suser.insertar(this.user).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {

        this.consulta();

     }
    });
    this.mostrar(0);
  

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

  pregunta(id: any, nombre: any){
    console.log("entro con el id " + id);
    Swal.fire({
      title: "¿Esta seguro de eliminar el usuario '+ nombre +'?",
      text: "El proceso no podra ser revertido",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
         this.borarusuario(id);
        Swal.fire(
          "Eliminado",
          "El usuario a sido eliminado",
          "success"
        )
      }
    })
  }



  borarusuario(id:any){
   this.suser.eliminar(id).subscribe((datos:any) => {
    if (datos['resultado']=='OK') {  
      this.consulta();
   }

  });
   
}

cargardatos(datos:any, id:number){
 this.user.nombre = datos.nombre;
 this.user.usuario = datos.usuario
 this.user.clave = datos.clave;
 this.user.identificacion = datos.identificacion;
 this.user.celular = datos.celular;
 this.user.tipo = datos.tipo;
 this.iduser = id;
 this.mostrar(1);
 this.beditar=true;


}

editar(){
   //console.log(this.cate);

   this.suser.insertar(this.user).subscribe((datos:any) => {
    if (datos['resultado']=='OK') {

      this.consulta();

   }
  });
  this.mostrar(0);


  this.validar();

  if(this.validnombre==true && this.validusuario==true && this.valididentificacion==true && this.validclave==true && this.validtipo==true && this.validcelular==true){
  this.suser.edit(this.iduser).subscribe((datos:any) => {
   if (datos['resultado']=='OK') {

      this.consulta();
   }
  });
   this.mostrar(0);
  

  }
}


}
