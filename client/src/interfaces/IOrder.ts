export interface IOrder{
   _id?: string|number,
   userId: string|number ,
   items: [
       {
           name: string,
           image: string,
            price: number,
           quantity: number,
           _id: string,
           createdAt: string|Date,
           updatedAt:string|Date
       }
   ],
   customerInfo: {
       name: string,
       phone: string,
       email:string,
       payment: string,
       city: string,
       _id: string
   },
   totalPrice: number,
   status: string,
   createdAt: string|Date,
   updatedAt: string|Date
}