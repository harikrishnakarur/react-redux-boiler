import React, { Component } from 'react';
import { connect } from 'react-redux';
import { click } from './Actions';

class Click extends Component {
    constructor(){
        super();
        this.state = {
            clickState: false
        }
    }
    callAction(){
        this.props.click(!this.props.clickState)
    }
    render() {
        console.log(this.props.clickState)
        return (
            <div>
                <button onClick={this.callAction.bind(this)}>Click</button>
            </div>
        );
    }
}
export function mapDispatchToProps(dispatch){
    return {
        click: (evt)=> dispatch(click(evt))
    }
}

function mapStateToProps(state){
    return{
        clickState: state.ClickReducer.click
    }
}

const withConnect = connect(mapStateToProps,mapDispatchToProps);

export default (withConnect)(Click)
