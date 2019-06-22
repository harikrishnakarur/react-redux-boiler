import React from 'react';
import Card from '../Card/Card';
import './styles.css'

export default class Search extends React.Component {
    json = [
        {
          "id": "123-s2-546",
          "name": "John Jacobs",
          "items": ["bucket", "bottle"],
          "address": "1st Cross, 9th Main, abc Apartment",
          "pincode": "5xx012"
        },
        {
          "id": "123-s3-146",
          "name": "David Mire",
          "items": ["Bedroom Set"],
          "address": "2nd Cross, BTI Apartment",
          "pincode": "4xx012"
        },
        {
          "id": "223-a1-234",
          "name": "Soloman Marshall",
          "items": ["bottle"],
          "address": "Riverbed Apartment",
          "pincode": "4xx032"
        },
        {
          "id": "121-s2-111",
          "name": "Ricky Beno",
          "items": ["Mobile Set"],
          "address": "Sunshine City",
          "pincode": "5xx072"
        },
        {
          "id": "123-p2-246",
          "name": "Sikander Singh",
          "items": ["Air Conditioner"],
          "address": "Riverbed Apartment",
          "pincode": "4xx032"
        },
        {
          "id": "b23-s2-321",
          "name": "Ross Wheeler",
          "items": ["Mobile"],
          "address": "1st Cross, 9th Main, abc Apartement",
          "pincode": "5xx012"
        },
        {
          "id": "113-n2-563",
          "name": "Ben Bish",
          "items": ["Kitchen Set", "Chair"],
          "address": "Sunshine City",
          "pincode": "5xx072"
        },
        {
          "id": "323-s2-112",
          "name": "John Michael",
          "items": ["Refrigerator"],
          "address": "1st Cross, 9th Main, abc Apartement",
          "pincode": "5xx012"
        },
        {
          "id": "abc-34-122",
          "name": "Jason Jordan",
          "items": ["Mobile"],
          "address": "Riverbed Apartment",
          "pincode": "4xx032"
        }
      ]
      state = {
        input: "",
        json: this.json,
        hoverIndex: -1,
        keyboardMode: false
    }
    handleMouseOver = (index,value) => {
        const json = this.state.json;
        const hoverIndex = value ? index : -1
        json.map((obj,i) => {
            if(i === index){
                obj.hover = value
            }else{
                obj.hover = false
            }
            return obj
        })
        this.setState({json,hoverIndex})
    }
    filterIt(arr, searchKey) {
        return arr.filter(function(obj) {
          return Object.keys(obj).some(function(key) {
            if(typeof obj[key] === "string"){
              return obj[key].toLowerCase().includes(searchKey.toLowerCase());
            }else if(typeof obj[key] === "object"){
              return obj[key].reduce((a,b) => {
                return a || b.toLowerCase().indexOf(searchKey.toLowerCase()) > -1
              },false)
            }
            return
          })
        });
      }
    inputChange = (e) => {
        const json = this.filterIt(this.json,e.target.value)

        this.setState({input: e.target.value, json})
        
    }
    keyboardHandler = (e) => {
        let hoverIndex = this.state.hoverIndex
        if(e.keyCode === 38 && this.state.hoverIndex > 0){
            hoverIndex = this.state.hoverIndex - 1
        }else if(e.keyCode === 40 && (this.state.hoverIndex + 1) < this.state.json.length){
            hoverIndex = this.state.hoverIndex + 1
        }
        this.setState({hoverIndex, keyboardMode: true})
    }
    componentDidUpdate(){
        if(this.state.keyboardMode && this.state.hoverIndex > -1 && this.state.hoverIndex < this.state.json.length && this.refs[this.state.hoverIndex].scrollIntoView){
            this.refs[this.state.hoverIndex].scrollIntoView({block: 'end', behavior: 'smooth'});
        }
    }
    render(){
        const cards = this.state.json.map((obj,i) => {
            return (
                <div ref={i} key={obj.id}>
                    <Card
                    data={obj}
                    index={i}
                    hoverIndex={this.state.hoverIndex}
                    handleMouseOver={this.handleMouseOver}
                    keyboardMode={this.state.keyboardMode}/>
                </div>
            )
        })
        return (
        <div tabIndex="0" onKeyUp={this.keyboardHandler} style={this.state.keyboardMode ? {cursor: 'none'} : {cursor: 'default'}} onMouseMove={()=>this.setState({keyboardMode: false})}>
            <input
            onChange={this.inputChange}
            placeholder="Search users by ID, address, name"
            ></input>
            <div className="cardContainer" ref={"cardContainer"}>
                { cards.length ? cards : (<div>No Data Available</div>)}
            </div>
        </div>
        )
    }
}