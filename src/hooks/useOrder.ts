import { useState } from "react"
import type { OrderItem, MenuItem } from "../types"


export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item: MenuItem) => {
        // console.log("add item", item)

        const itemInOrder = order.find(orderItem => orderItem.id === item.id)

        if(itemInOrder){
            const newOrder = order.map(orderItem => {
                if(orderItem.id === item.id){
                    return {...orderItem, quantity: orderItem.quantity + 1}
                }else{
                    return orderItem
                }
            })
            setOrder(newOrder)
        }else{
            const newItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return{
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}