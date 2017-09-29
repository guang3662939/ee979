import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PersonalService {
  routerChange = new BehaviorSubject(true);
}