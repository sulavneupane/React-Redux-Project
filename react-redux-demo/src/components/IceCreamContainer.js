import React from 'react';
import {connect} from 'react-redux';
import {buyIceCream} from "../redux";

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of Ice Creams - {props.numberOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy Ice Cream</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        numberOfIceCreams: state.iceCream.numberOfIceCreams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamContainer);