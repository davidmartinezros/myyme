export class Unity {

    public confirmUnity: boolean;

    constructor(
    public id: string,
    public concept: string,
    public image: any,
    public description?: string,
    public tags?: string[],
    public unities?: Unity[]
  ) {
    this.confirmUnity = false;
  }

}
