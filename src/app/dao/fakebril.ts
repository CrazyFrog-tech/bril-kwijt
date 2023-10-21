import { Address } from "./address";


export class FakeBril {
  constructor(public titel: string,
    public description: string,
    public lostAtDate: Date,
    public address: Address,
    public color?: string,
    public imageFilenames?: string[],
  ) { }
}
