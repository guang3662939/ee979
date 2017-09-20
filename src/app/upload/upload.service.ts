import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UploadService {
  constructor(private http: Http) {}

  token(access_token): Observable<any> {
    return this.http.post('http://game.jzhlsc.com/api/AliyunOsses/token'+"?access_token="+access_token,'').map(
      (res: Response) => res.json()
    );
  }
}
