export class User {

    constructor(
        public id: string,
        public nick: string,
        public password: string,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public telephone?: string,
        public state?: string,
        public message?: string
    ) {

    }
}
