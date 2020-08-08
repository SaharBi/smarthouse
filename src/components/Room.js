import React from 'react';
import '../App.css';

function Room(props) {
    function handleRoom(){
        props.roomDet(props.name,props.type);
      }
    return (
        <div id='rooms' style={{background: props.color}} onClick={handleRoom}>
            {props.name}
        </div>
    );
}

export default Room;
