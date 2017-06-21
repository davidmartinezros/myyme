export class User {

    constructor(
        public id: string,
        public nick: string,
        public password: string,
        public name?: string,
        public surname?: string,
        public email?: string,
        public telephone?: string
    ) {

    }
}
