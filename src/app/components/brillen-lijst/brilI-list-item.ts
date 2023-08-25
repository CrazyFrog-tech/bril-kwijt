import { SafeUrl } from "@angular/platform-browser";

export class BrilListItem {
  constructor(
  public id: string,
  public name: string,
  public imageContent: SafeUrl|null){}
}
