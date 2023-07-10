import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { TableDataService } from 'src/app/services/table-data.service';
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
    this.inventory_log()
  }

  check = false;

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

  //table data
  

  inventory_log() {
    this.inventory.inventory_table().subscribe((res) => {
      console.log(res);
      this.inventory_data = res;
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

  changeText(row: any) {
    row.open = "Re-open"
    row.textColor = "#F2994A";
  }


  revertText(row: any) {
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
        if(resp.value==''){
          
        }
      })
    } 
  }

  hideDropdown() {  
    this.autoSuggestionResult = undefined
  }



  // search dropdown




  // searchText: any;
  // options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  // filteredOptions: string[] = [];
  // showDropdown: boolean = false;

  // filterOptions() {
  //   this.filteredOptions = this.options.filter(option => option.toLowerCase().includes(this.searchText.toLowerCase()));
  //   this.showDropdown = true;
  // }

  // hideDropdown() {
  //   setTimeout(() => {
  //     this.showDropdown = false;
  //   }, 200);
  // }

  // selectOption(option: string) {
  //   this.searchText = option;
  //   this.showDropdown = false;
  // }

  // searchInput: any = '';
  // searchResults: any[] = [];
  // dropdownOptions: any[] = [];

  // onSearchInputChange() {
  //   // Filter the tableData based on the search input
  //   // this.searchResults = this.inventory_data.filter(item => item.id.includes(this.searchInput));

  //   // Populate the dropdownOptions array with the matching IDs
  //   this.dropdownOptions = this.searchResults.map(item => item.id);
  // }

  // selectDropdownOption(option: string) {
  //   // Perform any necessary action when a dropdown option is selected
  //   // For example, you can update the UI or perform a specific task.
  //   console.log('Selected option:', option);
  // }
}



