import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class usuariosComponent  implements OnInit{

  verf = false;
  usuario:any;
  iduser:any;
  user= {
    nombre:"",
    usuario:"",
    clave:"",
    tipo:""


  };
  

  //para validar

  validnombre = true;
  validusuario = true;
  validclave = true;
  validtipo = true;
  beditar = false;


  constructor(private suser: UsuarioService){ }
  
   ngOnInit(): void{
    this.consulta();
    this.limpiar();
    
   }
    mostrar(dato:any) {
      switch(dato){
        case 0:
         this.verf = false;
         this.beditar = false;
         this.iduser = "";
         this.limpiar();
         break;
         case 1:
          this.verf = true;
         break; 
      }
    }


    limpiar() {
      this.user.nombre = "";
      this.user.usuario = "";
      this.user.clave = "";
      this.user.tipo = "";

    }

     validar(){
        if (this.user.nombre ==""){
          this.validnombre = false;
       }else{
        this.validnombre = true;
       }

       if (this.user.nombre ==""){
        this.validnombre = false;
     }else{
      this.validnombre = true;
     }

     if (this.user.usuario ==""){
      this.validusuario = false;
     }else{
     this.validusuario = true;
    }

     if (this.user.clave ==""){
    this.validclave = false;
    }else{
    this.validclave = true;
    }

    if (this.user.tipo ==""){
      this.validtipo = false;
   }else{
    this.validtipo = true;
   }


     }

    consulta() {
     this.suser.consultar().subscribe((result:any) => {
     this.usuario = result;
     //console.log(this.usuario);

     })
    
    }

    ingresar() { 

      this.validar();

      if(this.validnombre==true && this.validusuario==true && this.validclave==true && this.validtipo==true){
        this.suser.insertar(this.user).subscribe((datos:any) => {
          if (datos['resultado']=='ok') {
          this.consulta();

      }

  });

  this.mostrar(0);
  this.limpiar();
    
  }


}

pregunta(id:any, nombre:any){
  console.log("entro con el id " + id);
  Swal.fire({
    title: '¿esta seguro de eliminar el usuario '+ nombre + '?',
    text: "El proceso no podra ser revertido!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "si, Eliminar!"
  }).then((result) => {
    if (result.isConfirmed) {
      this.borrarusuario(id);

      Swal.fire({
        title: "Eliminado!",
        text: "El usuario a sido eliminado.",
        icon: "success"
      });
    }
  });



}

borrarusuario(id:any){
  this.suser.eliminar(id).subscribe((datos:any) => {
   if(datos['resultado']=='ok' ){
   this.consulta();
   }

  });

}

cargardatos(datos:any, id:number){
 //console.log(datos);
 this.user.nombre = datos.nombre;
 this.user.usuario = datos.usuario;
 this.user.clave = datos.clave;
 this.user.tipo = datos.tipo;
 this.iduser = id;
 this.mostrar(1);
 this.beditar=true;
 

}

editar(){
  this.validar();

  if(this.validnombre==true && this.validusuario==true && this.validclave==true && this.validtipo==true){
    this.suser.edit(this.user, this.iduser).subscribe((datos:any) => {
      if (datos['resultado']=='ok') {
      this.consulta();

  }

});

this.mostrar(0);
}

}

}