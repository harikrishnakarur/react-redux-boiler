import React from 'react';
import './styles.css'

export default class Card extends React.Component {
    handleMouseOver = (value) => {
        if(!this.props.keyboardMode && this.props.data.hover !== value)
            this.props.handleMouseOver(this.props.index,value)
    }
    render(){
        const { id, name, address } = this.props.data
        const { index, hoverIndex } = this.props
        return (
        <div className="card"
        style={hoverIndex === index ? {background: "#c0c0c0"} : {}}
        onMouseOver={() => this.handleMouseOver(true)}
        onMouseOut={() => this.handleMouseOver(false)}
        >
            <div>{id}</div>
            <div>{name}</div>
            <div>{address}</div>
        </div>
        )
    }
}