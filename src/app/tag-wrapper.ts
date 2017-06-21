import { Tag } from './tag';

export class TagWrapper {

    constructor(
        public idUser: string,
        public idRobot: string,
        public idUnity: string,
        public tag: Tag) {

        }

}
