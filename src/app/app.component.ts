import { Component, Input  } from '@angular/core';
import { FormDataServiceService } from './data/form-data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  image = 'form-data/src/assets/assets/image/ericsson_logo.png';


@Input() formData;

    constructor(private formDataService: FormDataServiceService) {
    }

    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        console.log(this.title + ' loaded!');
    }
}
