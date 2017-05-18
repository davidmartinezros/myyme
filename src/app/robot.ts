import { Unity } from './unity';

export class Robot {

    constructor(
    public id: string,  
    public name: string,
    public age: number,
    public profession: string,
    public description?: string,
    public unities?: Unity[]
  ) {  }

}

