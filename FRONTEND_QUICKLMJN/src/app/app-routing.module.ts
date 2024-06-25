import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricipalComponent } from './estructura/pricipal.component';



const routes: Routes = [
   
     ]; 

// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
