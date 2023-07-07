import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TableDataService } from 'src/app/services/table-data.service';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.scss']
})
export class AddInventoryComponent {

  constructor(private add_inventory: TableDataService) { }


  addInventory = new FormGroup({
    job_id: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]),
    job_description: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required]),
    part_number: new FormControl('', [Validators.required]),
    part_description: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
  })


  get job_id() {
    return this.addInventory.get('job_id');
  }

  get job_description() {
    return this.addInventory.get('job_description');
  }

  get area() {
    return this.addInventory.get('area');
  }


  get part_number() {
    return this.addInventory.get('part_number');
  }


  get part_description() {
    return this.addInventory.get('part_description');
  }


  get quantity() {
    return this.addInventory.get('quantity');
  }


  handleAddInventoryForm(data: any) {
    // console.log(this.addInventory.value)
    console.log(data)
    this.add_inventory.add_inventory_table(data).subscribe((res) => {
      console.log(res);
    })
  }
}
