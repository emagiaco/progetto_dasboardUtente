import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavPrincipaleComponent } from './nav-principale/nav-principale.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { 
  ReactiveFormsModule, 
  FormsModule } from '@angular/forms';
import { 
  MatButtonModule, 
  MatCheckboxModule, 
  MatToolbarModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    NavPrincipaleComponent,
    LoginComponent,
    FormComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule, 
    LayoutModule, 
    MatToolbarModule, 
    MatSidenavModule, 
    MatIconModule, 
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTabsModule,
    FormsModule,
    MatTooltipModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
