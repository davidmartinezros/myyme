export class Tag {

    public confirmTag: boolean;

    constructor(
        public id: string,
        public tag: string
        ) {
        this.confirmTag = false;
    }
}
