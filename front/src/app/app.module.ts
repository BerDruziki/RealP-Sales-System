import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { SobreComponent } from './sobre/sobre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpClientModule } from '@angular/common/http';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { ListarComponent } from './cadastros/produtos/listar.component';
import { IncluirComponent } from './cadastros/produtos/incluir.component';
import { EditarComponent } from './cadastros/produtos/editar.component';
import { ExcluirComponent } from './cadastros/produtos/excluir.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    MatSliderModule,
    HttpClientModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,    
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule 
    //FlexLayoutModule
   ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    AdminComponent,
    SobreComponent,
    CadastrosComponent,
    ListarComponent,
    IncluirComponent,
    EditarComponent,
    ExcluirComponent
   
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
