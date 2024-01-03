import { useDispatch, useSelector } from "react-redux";
import { getSampleData } from "../store/actions/sampleAction";
import { useEffect } from "react";
import Item from "./item";
import Counter from "./counter";

export default function Home() {
    const {cart: cart} = useSelector((state) => state.cartReducer);

    console.log("Cart is ", cart);
    
    var items = [];

    for (var i = 0; i < cart.length; i++) {
        items.push(<Item
                   index={i+1}
                   name={cart[i].name}
                   description={cart[i].description}
                   amount={cart[i].amount}
                   ></Item>);
    }
    
    return (
            <>
            {items}
            <Counter />
            </>
    );
}
