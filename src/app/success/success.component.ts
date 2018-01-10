import { Component, OnInit }      from '@angular/core';
import { Router }                 from '@angular/router';

import { Success }               from '../data/formData.model';
import { FormDataServiceService } from '../data/form-data-service.service';


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  image   = '../assets/image/ericsson_logo.png';

  constructor() { }

  ngOnInit() {
  }

}
