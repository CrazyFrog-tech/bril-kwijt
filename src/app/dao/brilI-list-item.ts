import { SafeUrl } from "@angular/platform-browser";

export class BrilListItem {
  constructor(
  public id: string,
  public titel: string,
  public imageContent: SafeUrl|null){}
}
