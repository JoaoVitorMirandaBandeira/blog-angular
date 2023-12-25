import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { TitleComponent } from 'src/app/components/title/title.component';
import { BigCardComponent } from 'src/app/components/big-card/big-card.component';
import { SmallCardComponent } from 'src/app/components/small-card/small-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    TitleComponent,
    BigCardComponent,
    SmallCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
