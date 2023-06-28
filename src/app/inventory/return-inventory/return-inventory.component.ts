import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-return-inventory',
  templateUrl: './return-inventory.component.html',
  styleUrls: ['./return-inventory.component.scss']
})
export class ReturnInventoryComponent {

  constructor() { }

  returnInventory = new FormGroup({
    job_number: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]),
    job_description: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]),
    area: new FormControl('', [Validators.required]),
    part_number: new FormControl('', [Validators.required]),
    part_description: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),

  })

  get job_number() {
    return this.returnInventory.get('job_number');
  }

  get job_description() {
    return this.returnInventory.get('job_description');
  }

}
