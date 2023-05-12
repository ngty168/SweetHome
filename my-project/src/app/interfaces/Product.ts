import { IGroup } from "./Group";

export class Product{
    constructor(
    public _id:any=null,
    public title:string="",
    public category:string="",
    public group: IGroup,
    public brand:string="",
    public price:number=0,
    public image :string="",
    public description :string=""){}
    }