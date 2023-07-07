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

  description: any
  editDescriptionData: any
  constructor(private activatedRoute: ActivatedRoute, private edit: TableDataService,
    private route: Router
  ) { }

  ngOnInit() {
    // Note: Below 'queryParams' can be replaced with 'params' depending on your requirements
    this.activatedRoute.queryParams.subscribe(params => {
      const userId = params['id'];
      console.log(userId);
      this.edit.getDescription(userId).subscribe((data) => {
        console.log("data-", data);
        this.editDescriptionData = data;
        console.log("new-", this.editDescriptionData)
        // this.editDescriptionData = data;
        // this.description = this.editDescriptionData.job_description;
        // console.log(this.description);

      })
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

  handleEditDescriptionForm(data: any) {
    console.log("my data ", data);    
    console.log("updated", this.editDescriptionData)

    this.editDescriptionData.job_description = data.job_description

    this.edit.updateDescription(this.editDescriptionData).subscribe((res) => {
      console.log("new data", res);

    });

    this.route.navigate(['inventory'])
  }

}
