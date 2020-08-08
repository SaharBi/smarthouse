import React, {useState} from 'react';
import '../App.css';
import { Form } from 'react-bootstrap';
import Product from '../components/Product';
import { Link } from 'react-router-dom';


function Rooms(props) {
    const [isShow, setIsShow] = useState(false);
    const [product,setProduct] = useState('מזגן');

    var products = [];
    var greensArr = [];

    if(props.name){
        for(let i=0;i<props.list.length;i++){
            if(props.list[i].name === props.name){
                products = props.list[i].productsList;
                greensArr = props.list[i].greensArr;
            }
        }
    }
    
    function handleChange(e){
        let value = e.target.value;
        setProduct(value);
    }
    function addToRoom(){
        if(products.length >= 5) {
            alert('Error');
            setIsShow(false);
            setProduct('מזגן');
        } else if(product === "מערכת סטיראו"){
            if(products.length !== 0){
                const afterFilter = products.filter(function(i){
                    return i === 'מערכת סטיראו';
                })
                if(afterFilter.length !== 0){
                    alert('Error');
                    setIsShow(false);
                    setProduct('מזגן');
                } else {
                        products.push(product);
                        setIsShow(false);
                        setProduct('מזגן');
                    }
                
            } else {
                products.push(product);
                    setIsShow(false);
                    setProduct('מזגן');
            }
        } else if(product === "דוד"){
            if(props.type === "אמבטיה/שירותים"){
                products.push(product);
                    setIsShow(false);
                    setProduct('מזגן');
            } else {
                alert('Error');
                setIsShow(false);
                setProduct('מזגן');
            }
        } else {

            products.push(product);
                    setIsShow(false);
                    setProduct('מזגן');
        }


    }

    var select = '';
    if(isShow===true){
        select = <div><Form>
        <Form.Group dir='rtl'>
            <Form.Control as="select" id='select3' onChange={handleChange}>
                <option value="מזגן">מזגן</option>
                <option value="דוד">דוד</option>
                <option value="מערכת סטיראו">מערכת סטיראו</option>
                <option value="מנורה">מנורה</option>
            </Form.Control>
        </Form.Group>
        </Form>
        <button id='btn2' onClick={addToRoom}>הוסף</button>
        </div>
    } else {
        select = ''
    }
    

    function handleBack(){
        props.productsList(props.name,products, greensArr)
    }

    return (
        <div className='container'>
        <div className='row'>
          <div className='col-4'>
          <Link to='/'>
            <button onClick={handleBack} className='btn'>חזור</button>
            </Link>
          </div>
          <div id='box' className='col-4'>
            <h1>Smart House</h1>
            <p dir='rtl'>שם חדר: {props.name}</p>
            <p dir='rtl'>סוג חדר: {props.type}</p>
            {products.map((element,i)=>{
          return  <div key ={i} onClick={()=>{
            let c = 0;
            for(let j=0;j<greensArr.length;j++){
                if(greensArr[j]===i){
                    c++;
                    greensArr[j] = '';
                }
            } if(c === 0){
                greensArr.push(i);
            }
          }}><Product i={i} name={element} greensArr={greensArr} /></div>
        })}

            <button className='btn' onClick={()=>setIsShow(!isShow)}>הוסף מוצר</button>
            {select}
          </div>
        </div>
        </div>
    );
}

export default Rooms;