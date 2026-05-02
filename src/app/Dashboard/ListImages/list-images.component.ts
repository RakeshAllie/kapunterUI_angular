import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DashboardService } from '../dashboard.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent implements OnInit {
  returnType: any;
  listImage_details: any[] = [];
  dashboardImagesPath: string | undefined;

constructor(public bsModalRef:BsModalRef, private dashboardService: DashboardService){
      this.dashboardImagesPath = environment.imagePath.dashboardImages;
    }

  ngOnInit(): void {
    this.list_images();
  }

  list_images(){
    this.dashboardService.list_Images().subscribe({
      next:(response) =>{
       this.returnType = response;
       console.log(this.returnType);
       debugger;
       this.listImage_details = this.returnType['returnList'] || [];
      },
      error:error => {
        console.log(error);
      }
    });
  }

  setDefault(imageId: any) {
    console.log('Set default image:', imageId);
    // Add your API call here if needed
    // this.dashboardService.setDefaultImage(imageId).subscribe(...);
  }

  deleteImage(imageId: any) {
    console.log('Delete image:', imageId);
    // Add your API call here if needed
    // this.dashboardService.deleteImage(imageId).subscribe(...);
  }

}
