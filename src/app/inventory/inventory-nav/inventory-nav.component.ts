import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-nav',
  templateUrl: './inventory-nav.component.html',
  styleUrls: ['./inventory-nav.component.scss']
})
export class InventoryNavComponent {
  currentItem: any
  inventoryMenu = ['INVENTORY LOG', 'ADD INVENTORY', 'RETURN INVENTORY']


  selectedItem(index: any) {
    this.currentItem = index;
  }

}

