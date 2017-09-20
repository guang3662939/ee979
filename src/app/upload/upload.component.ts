import { Component, OnInit } from '@angular/core';
import { FileUploader, FileUploaderOptions } from 'ng2-file-upload/ng2-file-upload';
import { UploadService } from './upload.service';

const URL = 'http://ee979-tmp.oss-cn-hangzhou.aliyuncs.com/';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [UploadService]
})
export class UploadComponent implements OnInit {

  uploader: FileUploader = new FileUploader({
    method: "POST",
    url: URL,
    isHTML5: true,
  }); 


  hasBaseDropZoneOver = false;
  hasAnotherDropZoneOver = false;
  
  constructor(
    private uploadService: UploadService
  ){}

  ngOnInit() {
    let accessToken = 'vlSOObPXXehuTEXFyNCUkglAdb3HFMPRMfjFVazki8sF64ep1C0hA092XLy5xnTF';

    this.uploadService.token(accessToken).subscribe(
      data => {
        
        this.uploader.onBuildItemForm = (item, form) => {
          for (let i in data.data) {
            form.append(i,data.data[i]);
          }
          form.append('key', data.data['id']+'/\${filename}');
        };
      },
      err => console.log(err)
    );    
  
    
  
    this.uploader.onBeforeUploadItem = (fileItem: any) => {
  
    };
  
  
  
  
    this.uploader.onAfterAddingFile = (item) => {
  
    }
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
}
