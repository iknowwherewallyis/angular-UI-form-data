export class FormData {
  username: string = '';
  password : string = '';

  vm_name  : string = '';
  vm_image : string = '';

  clear() {
    this.username = '';
    this.password  = '';

    this.vm_name   = '';
    this.vm_image  = '';
  }
}

export class Personal {
  username: string = '';
  password : string = '';
}

export class Success {
  vm_name : string = '';
  vm_image: string = '';
}
