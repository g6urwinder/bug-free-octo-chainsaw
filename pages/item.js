import React from "react";


export default function Item(state) {
    return (
            <div>
            <p> Index: {state.index} </p>
            <p> Product Name: {state.name} </p>
            <p> Producer Description: {state.description} </p>
            <p> Product Amount {state.amount} </p>
        </div>
    );
}
