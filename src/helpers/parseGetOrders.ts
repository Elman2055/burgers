import { IGetOrder, TOrder } from "@/interfaces/order";

export const parseGetOrders = (data: IGetOrder<{[key: string]: any}>): TOrder[] => {
    return Object.keys(data).map(id => {
        return {
            id,
            contactData: data[id].contactData,
            price: data[id].price,
            ingredients: data[id].ingredients
        }
    })
};