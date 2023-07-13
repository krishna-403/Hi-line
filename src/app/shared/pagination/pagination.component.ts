import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TableDataService } from 'src/app/services/table-data.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() total_rows: any
  @Input() item_per_page: any



  constructor(private inventory: TableDataService) { }

  ngOnInit(): void {
    this.inventory_log()

  }

  rows_per_page: any;


  inventory_data: any;

  inventory_log() {
    this.inventory.inventory_table().subscribe((res: any) => {
      console.log(res);
      this.inventory_data = res;
      // console.log('length', this.inventory_data.length)
      this.total_rows = this.inventory_data.length;
      this.itemsPerPage = 6;

    })
  }


  // Pagination properties
  currentPage: number = 1;
  itemsPerPage: any
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
    ++this.currentPage
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.next_page_data = this.inventory_data.slice(startIndex, endIndex);
    console.log('next page data', this.next_page_data)
  }
}


