import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class CacheManagerService {
  cache: Map<string, any> = new Map<string, any>();
  subject  = [] ;

  get (key) {
    (this.cache[key]) ? this.subject[key].next(this.cache[key]): this.subject[key] = new Subject();
    return this.subject[key];
  }

  set (key, value) {
    this.cache.set(key, value);
    if(!this.subject[key]) {
      this.subject[key] = new Subject();
    }
    this.subject[key].next(this.cache.get(key));
  }


}
