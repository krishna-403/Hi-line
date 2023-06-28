import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.scss']
})
export class AddInventoryComponent {

  constructor() { }


  addInventory = new FormGroup({
    job_number: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]),
    job_description: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]),
    area: new FormControl('', [Validators.required]),
    part_number: new FormControl('', [Validators.required]),
    part_description: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
  })


  get job_number() {
    return this.addInventory.get('job_number');
  }

  get job_description() {
    return this.addInventory.get('job_description');
  }


}
