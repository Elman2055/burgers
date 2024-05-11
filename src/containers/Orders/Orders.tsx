import React, {useState, useEffect, useCallback} from "react";
import axiosBurger from "@/config/axiosBurger";
import { parseGetOrders } from "@/helpers/parseGetOrders";
import { TOrder } from "@/interfaces/order";
import { OrderItem } from "@/components/Order/OrderItem/OrderItem";
import { Spinner } from "@/components/UI/Spinner/Spinner";

export const Orders = () => {
    const [orders, setOrders] = useState<TOrder[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getOrders = useCallback(async () => {
        setIsLoading(true);
        const {data} = await axiosBurger.get("orders.json");
        setOrders(parseGetOrders(data).reverse());
        setIsLoading(false);
    }, []);

    useEffect(() => {
        getOrders();
    }, []);

    return (
        <>
            <Spinner show={isLoading}/>
            {
                orders.map(order => (
                    <OrderItem
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}
                    />
                ))
            }
        </>
    );
};