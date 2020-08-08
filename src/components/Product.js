import React, { Component } from 'react';

class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
            bgColor: false
        }
    }

    UNSAFE_componentWillMount() {
        for(let j=0;j<this.props.greensArr.length;j++){
            if(this.props.greensArr[j] === this.props.i){
                this.setState({bgColor: true})
            }
        }
    }

    handleRoom = () => {     
         if(this.state.bgColor === true){
             this.setState({bgColor: false})
         } else {
             this.setState({bgColor: true})
         }
         }

    render() {

        var onOff = <div>
        <div id='rooms' style={{background: 'red'}} onClick={this.handleRoom}>
        {this.props.name}
    </div>
    </div>;
    if(this.state.bgColor === true){
    onOff = <div id='rooms' style={{background: 'green'}} onClick={this.handleRoom}>
    {this.props.name}
    </div>
    } else {
    onOff = <div id='rooms' style={{background: 'red'}} onClick={this.handleRoom}>
        {this.props.name}
    </div>
    }

        return (
            <div>
                {onOff}
            </div>
        );
    }
}

export default Product;