import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';


@NgModule({
  declarations: [  
    AcercaComponent, HomeComponent, MainComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
