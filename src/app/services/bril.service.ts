import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BrilService {
  private id$ = new BehaviorSubject<string>('');
  selectedId$ = this.id$.asObservable();
  constructor() {

  }

  setId(id: string) {
    this.id$.next(id);
  }
}
