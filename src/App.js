import React, { useState } from 'react';
import {HashRouter as Router , Route , Switch} from 'react-router-dom';
import AddRoom from './components/AddRoom';
import Main from './components/Main';
import Rooms from './components/Rooms';
import './App.css';



function App() {
  const [list,setList] = useState([]);
  const [name, setName] = useState('');
  const [type, setType] = useState('');


 function newRoom(room){
    setList([...list,room]);
  }
  function roomDetails(name,type){
    setName(name);
    setType(type);
  }

  function productsList(pname,plist, greeensArr){
    for(let i=0;i<list.length;i++){
      if(list[i].name === pname){
        list[i].productsList = plist;
        list[i].greensArr = greeensArr;
      }
    }
  }

  return (
    <div>
      <Router>
         <Switch>
            <Route exact path="/" render={() => (<Main list={list} roomDetails={roomDetails} />)}/>
            <Route path="/addroom" render={() => (<AddRoom newRoom={newRoom} />)}/>
            <Route path="/rooms" render={() => (<Rooms productsList={productsList} name={name} type={type} list={list} />)}/>
            </Switch> 
            </Router>

    </div>
  );
}

export default App;
