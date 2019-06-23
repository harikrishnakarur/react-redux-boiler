import React from 'react';
import './styles.css';
import parse from 'html-react-parser';

export default class Card extends React.Component {
    handleMouseOver = (value) => {
        if(!this.props.keyboardMode && this.props.data.hover !== value)
            this.props.handleMouseOver(this.props.index,value)
    }
    render(){
        const { id, name, address, foundIn=[] } = this.props.data
        const { index, hoverIndex, searchText } = this.props
        const foundInMapping = {
            items: "Items",
            pincode: "Pincode"
        }
        let nameToDisplay,idToDisplay,addressToDisplay
        const regex = new RegExp(searchText,'i');
        nameToDisplay = name.replace(regex, `<b>${name.match(regex)}</b>`)
        idToDisplay = id.replace(regex, `<b>${id.match(regex)}</b>`)
        addressToDisplay = address.replace(regex, `<b>${address.match(regex)}</b>`)
        return (
        <div className="card"
        style={hoverIndex === index ? {background: "#c0c0c0"} : {}}
        onMouseOver={() => this.handleMouseOver(true)}
        onMouseOut={() => this.handleMouseOver(false)}
        >
            <div className="cardName">{parse(nameToDisplay)}</div>
            <div className="cardIdAddress">{parse(idToDisplay)}</div>
            <div className="cardIdAddress">{parse(addressToDisplay)}</div>
            <div className="foundIn">{foundIn.indexOf("items") > -1 ? "Found in Items" : ""}</div>
            <div className="foundIn">{foundIn.indexOf("pincode") > -1 ? "Found in Pincode": ""}</div>
        </div>
        )
    }
}