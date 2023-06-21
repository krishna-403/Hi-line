import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-inventory-nav',
  templateUrl: './inventory-nav.component.html',
  styleUrls: ['./inventory-nav.component.scss']
})
export class InventoryNavComponent implements OnInit {

  currentItem: any
  inventoryMenu = ['INVENTORY LOG', 'ADD INVENTORY', 'RETURN INVENTORY']

  ngOnInit(): void {
    this.currentItem = this.inventoryMenu[0];
  }

  selectedItem(index: any) {
    this.currentItem = index;
  }

}

