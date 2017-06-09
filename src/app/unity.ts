import { Tag } from './tag';

export class Unity {

    public confirmUnity: boolean;

    constructor(
    public id: string,
    public concept: string,
    public image: any,
    public description?: string,
    public tags?: Tag[],
    public unities?: Unity[]
  ) {
    this.confirmUnity = false;
  }

}
