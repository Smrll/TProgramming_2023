import { IApplication } from './IApplication';
import { CellPhone } from './cellphone';

export abstract class Smartphone extends CellPhone {
  apps: IApplication[];

  constructor(number: string, year: number, diagonal: number, public name?: string) {
    super(number, year, diagonal, name);
    this.apps = [];
  }
}
