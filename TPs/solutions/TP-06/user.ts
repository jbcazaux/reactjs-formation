export default class User {
    readonly id:number;
    readonly login: string;

    constructor(id: number, login: string) {
        this.id = id;
        this.login = login;
    }
}