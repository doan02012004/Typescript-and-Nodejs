export interface IProduct{
    price: number;
    name: string,
    image:string,
    gallery?: string[],
    discount:number,
    countInStock:number,
    description:string,
    featured:boolean,
    category?:string,
    tags:string
}