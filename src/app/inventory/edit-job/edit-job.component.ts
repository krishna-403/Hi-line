import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TableDataService } from 'src/app/services/table-data.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss']
})
export class EditJobComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private edit: TableDataService) { }

  ngOnInit() {
    // Note: Below 'queryParams' can be replaced with 'params' depending on your requirements
    this.activatedRoute.queryParams.subscribe(params => {
      const userId = params['id'];
      console.log(userId);
    });
  }

  edit_job = new FormGroup(
    {
      job_description: new FormControl('', [Validators.required])
    }
  )

  get job_description() {
    return this.edit_job.get('job_description');
  }

}
