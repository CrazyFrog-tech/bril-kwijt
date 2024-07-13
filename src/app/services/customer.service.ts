import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({providedIn:'root'})
export class CustomerService {
  private otherCustomer$ = new BehaviorSubject<string>('');
  readonly otherCustomerName$ = this.otherCustomer$.asObservable();
  constructor() {

  }

  setCustomerName(customerName: string) {
    this.otherCustomer$.next(customerName);
  }
}
