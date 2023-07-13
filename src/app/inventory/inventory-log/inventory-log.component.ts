import { Component, Input, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { TableDataService } from 'src/app/services/table-data.service';
import { v4 as uuidv4 } from 'uuid';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-inventory-log',
  templateUrl: './inventory-log.component.html',
  styleUrls: ['./inventory-log.component.scss']
})
export class InventoryLogComponent implements OnInit {
  constructor(public general: LoginServiceService, private inventory: TableDataService) { }

  ngOnInit(): void {
    this.inventory_log();


  }



  check = false;
  // uniqueId = uuidv4();


  inventory_data: any;
  openDeleteModal: boolean = false;
  deleteId: any;
  isOpen: boolean = false;
  autoSuggestionResult: any




  //function to change all input checkbox in one click

  change_input_check(event: any) {
    if (event.target.checked == true) {
      this.check = true;
    }
    else {
      this.check = false;
    }
  }

  initialValue: any = 0;
  finalValue: any = 6;
  //table data
  new_data: Array<any>
  total_rows: any;

  displayData: any;
  inventory_log() {
    this.inventory.inventory_table().subscribe((res) => {
      console.log(res);
      this.inventory_data = res;
      this.displayData = this.inventory_data;
      // console.log('length', this.inventory_data.length)
      this.total_rows = this.displayData.length;
      if (this.total_rows > 5) {
        this.new_data = this.displayData.slice(this.initialValue, this.finalValue);
        console.log('abc', this.new_data,)

        // console.log('abc', this.total_rows)
      } else {
        this.currentPage = false;
        this.disableNextButton = false;
      }

    })
  }


  //delete data from table

  deleteData(id: any) {
    this.inventory.delete(id).subscribe((res) => {
      console.log(res)
      this.inventory_log();

    })
  }


  send_id(id: any) {
    this.deleteId = id;
    console.log(id)
    this.openDeleteModal = true;

  }



  closeModal(event: boolean) {
    console.log(event)
    this.openDeleteModal = event;
  }

  toggle(row: any) {
    row.isOpen = !row.isOpen;
  }

  invoiced = {
    id: uuidv4(),
    name: 'Open'
  };

  changeText(row: any) {
    // this.invoiced.name = "Re-open";
    // row.invoiced.name = "Re-open";
    // console.log(row)
    row.open = 'Re-open'
    row.textColor = "#F2994A";
  }


  revertText(row: any) {
    // this.invoiced.name = "Open"
    row.open = "Open"
    row.textColor = "#219653"
  }
  // result: any
  searchText: any
  close: boolean = false

  seachAutoSuggestions(query: any) {
    if (query) {
      const result = query.target as HTMLInputElement;
      // console.log('abc', result)
      console.log('mbc', result.value)
      this.inventory.autoSearch(result.value).subscribe((resp: any) => {
        console.log(resp);
        if (resp.length > 4) {
          resp.length = 4;
        }
        this.autoSuggestionResult = resp;
        this.inventory_data = resp;
        if (resp.value == '') {

        }
      })
    }
  }

  hideDropdown() {
    this.autoSuggestionResult = undefined
  }




  // Pagination

  rows_per_page: any;
  disableNextButton: boolean = false;
  currentPage: any = 1
  // inventory_data: any;

  // inventory_log() {
  //   this.inventory.inventory_table().subscribe((res: any) => {
  //     console.log(res);
  //     this.inventory_data = res;
  //     // console.log('length', this.inventory_data.length)
  //     this.total_rows = this.inventory_data.length;
  //     this.itemsPerPage = 6;

  //   })
  // }


  // Pagination properties
  // currentPage: number = 1;
  itemsPerPage: any = 6;
  totalItems: any = 11;
  items: any[] = [];


  nextPage(): void {
    const totalPages = Math.ceil(this.total_rows.length / this.itemsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }


  get totalPages(): number {
    return Math.ceil(this.total_rows / this.itemsPerPage);
  }


  changePage(page: number) {
    this.currentPage = page;
    console.log(this.currentPage)
    this.inventory_log()
  }

  next_page_data: any

  getDisplayedRows(): any {
    console.log(this.new_data)
    this.initialValue = this.finalValue;
    this.finalValue = this.initialValue + 6;
    console.log(this.finalValue)
    if (this.finalValue <= this.displayData.length) {
      this.new_data = this.displayData.slice(this.initialValue, this.finalValue)
    } else {
      this.disableNextButton = true;
      this.new_data = this.displayData.slice(this.initialValue, this.displayData.length)
    }
    // this.new_data = this.displayData.slice(this.initialValue, this.finalValue)

  }

  previousData() {
    console.log(this.initialValue);
    console.log(this.finalValue);
    // console.log('abc', this.new_data)
    // this.initialValue = this.initialValue - 6;
    // this.finalValue = this.initialValue;
    // this.new_data = this.displayData.slice(this.initialValue, this.finalValue)
    // console.log('abc', this.new_data)
  }

  //pagination


}


