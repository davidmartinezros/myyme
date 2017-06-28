export class User {

    constructor(
        public id: string,
        public nick: string,
        public password: string,
        public firstname?: string,
        public lastName?: string,
        public email?: string,
        public telephone?: string
    ) {

    }
}
