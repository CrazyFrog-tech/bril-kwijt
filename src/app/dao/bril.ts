import { Address } from "./address";
import {Customer} from "./customer";


export class Bril {
  constructor(public titel: string,
    public description: string,
    public lostAtDate: string,
    public address: Address,
    public color?: string,
    public brand?: string,
    public customer?: Customer,
    public imageFilenames?: string[],
  ) { }
}
