import { Address } from "./address";


export class FakeBril {
  constructor(public titel: string,
    public description: string,
    public lostAtDate: string,
    public address: Address,
    public color?: string,
    public brand?: string,
    public imageFilenames?: string[],
  ) { }
}
