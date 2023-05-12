export class User {
    constructor(
        public _id: any=null,
        public name: string="",
        public email: string="",
        public password: string="",
        public birthday: string="",
        public phone: string="",
        public address: string="",
        public avatar: string="",
        public salt: string="",
    ){}
}
export class updateUser{
    constructor(
        public _id: any=null,
        public name: string="",
        public birthday: string="",
        public phone: string="",
        public address: string="",
    ){}
}
export class Login{
    constructor(
    public email:string="",
    public password:string="",)
    {}
}
