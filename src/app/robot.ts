import { Unity } from './unity';

export class Robot {

  public confirmRobot: boolean;

  public queDiuElRobot: string = "Carregant...";

    constructor(
    public id: string,  
    public name: string,
    public age: number,
    public profession: string,
    public description?: string,
    public unities?: Unity[]
  ) {
    this.confirmRobot = false;
    this.queDiuElRobot = "Carregat!";
  }

}

