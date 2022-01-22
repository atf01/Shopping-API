
export default interface CurrentOrder
{
    user_id:number,
    order_id:number,
    products:{id:number,quantity:number}[],
    status:string
}