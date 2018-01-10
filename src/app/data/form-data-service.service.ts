import { Injectable }                  from '@angular/core';
import { FormData, Personal, Success } from './formData.model'

@Injectable()
export class FormDataServiceService {

  constructor() { }

private formData: FormData = new FormData();
    private isPersonalFormValid: boolean = false;

    getPersonal(): Personal {
        // Return the Personal data
        var personal: Personal = {
            username: this.formData.username,
            password: this.formData.password,
         };
        return personal;
    }

    getSuccess(): Success {
      // Return the Success data
      var success: Success = {
        vm_name: this.formData.vm_name,
        vm_image: this.formData.vm_image,
      };
      return success;
    }

    setPersonal(data: Personal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.username   = data.username;
        this.formData.password   = data.password;
     }

     // setSuccess(data: Success) {
     //   // Update the Success data only when the Success Form has been validated successfully
     //   this.isSuccessFormValid = true;
     //   this.formData.vm_name   = data.vm_name;
     //   this.formData.vm_image  = data.vm_image;
     // }


    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = false;
        // this.isSuccessFormValid  = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid;
    }

    // isPersonalFormValid() {
    //   return this.isPersonalFormValid;
    // }

    // isSuccessFormValid(){
    //   return this.isSuccessFormValid;
    // }
}
