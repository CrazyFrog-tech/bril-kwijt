import { SafeUrl } from "@angular/platform-browser";
import {Address} from "./address";

export class BrilListItem {
  constructor(
  public id: string,
  public titel: string,
  public lostAtDate: string,
  public address: Address,
  public brand: string,
  public imageContent: SafeUrl|null){}
}
