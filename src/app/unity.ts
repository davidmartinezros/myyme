export class Unity {

    constructor(
    public id: string,
    public concept: string,
    public image: any,
    public description?: string,
    public tags?: string[],
    public unities?: Unity[]
  ) {  }

}