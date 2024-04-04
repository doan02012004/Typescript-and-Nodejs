
export interface ICart {
    userId: string | number,
    quantity:number,
    products:[
        productID:string| number
    ]
}