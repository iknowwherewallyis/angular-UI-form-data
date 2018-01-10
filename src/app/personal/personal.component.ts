import { Component, OnInit }      from '@angular/core';
import { Router }                 from '@angular/router';

import { Personal }               from '../data/formData.model';
import { FormDataServiceService } from '../data/form-data-service.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})

export class PersonalComponent implements OnInit {
    title = 'Please tell us about yourself.';
    personal: Personal;
    form: any;
    image = '../assets/image/ericsson_logo.png';
    username = "admin";
    password = "admin";

    constructor(private router: Router,private formDataService: FormDataServiceService) {
    }

    ngOnInit() {
        this.personal = this.formDataService.getPersonal();
        console.log('Personal feature loaded!');
    }

    validateUserInput() {
        if (this.username == this.personal.username && this.password == this.personal.password){
        return true;
        }  return false;
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
        if(this.validateUserInput() == true){
        this.formDataService.setPersonal(this.personal);
        return true;
        }
    }

    goToNext(form: any) {
        if (this.save(form)) {
        this.router.navigate(['/success']);
        }
    }

}
