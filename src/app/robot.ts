import { Unity } from './unity';

export class Robot {

  public confirmRobot: boolean;

    constructor(
    public id: string,  
    public name: string,
    public age: number,
    public profession: string,
    public description?: string,
    public unities?: Unity[]
  ) {
    this.confirmRobot = false;
  }

}

