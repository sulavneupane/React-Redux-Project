import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {buyCake} from "../redux";

function HooksCakeContainer(props) {
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Cakes - {numberOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    );
}

export default HooksCakeContainer;