import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './material-module';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './components/content/content.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ConfirmComponent,
    SidebarComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    ConfirmComponent
  ]
})
export class SharedsModule { }
