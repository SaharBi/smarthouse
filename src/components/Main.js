import React from 'react';
import { Link } from 'react-router-dom';
import Room from '../components/Room';


function Main(props) {

  function roomDet(name,type){
    props.roomDetails(name,type);
  }
    return (
        <div className='container'>
        <div className='row'>
          <div className='col-4'>
          </div>
          <div id='box' className='col-4'>
            <h1>Smart House</h1>
            {props.list.map((element,i)=>{
          return  <Link to={{ pathname: `/rooms`}} key={i}> <Room productsList={element.productsList} name={element.name} color={element.color} 
          type={element.type} roomDet={roomDet} /> </Link>
        })}
            <Link to='/addroom'>
            <button className='btn'>+</button>
            </Link>
          </div>
        </div>
        </div>
    );
}

export default Main;