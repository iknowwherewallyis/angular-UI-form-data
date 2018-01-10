import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { FormsModule }            from '@angular/forms';
import { NgbModule }              from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }           from './app.component';
import { FormsModuleComponent }   from './forms-module/forms-module.component';

import { FormDataServiceService } from './data/form-data-service.service';
import { PersonalComponent }      from './personal/personal.component';
import { SuccessComponent }       from './success/success.component';
import { AppRoutingModule }       from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    FormsModuleComponent,
    PersonalComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [{ provide: FormDataServiceService, useClass: FormDataServiceService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
