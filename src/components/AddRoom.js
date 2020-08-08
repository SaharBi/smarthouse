import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'


function AddRoom(props) {

    const [name, setName] = useState('');
    const [type, setType] = useState('חדר שינה');
    const [color, setColor] = useState('red');

    const room = {
        name: name,
        type: type,
        color: color,
        productsList: [],
        greensArr: []
    }


    function handleChange(e){
        let value = e.target.value; // שיחליף את הסטייט
        setName(value);
        if(value.length > 5)
        alert('שם החדר חייב להכיל עד 5 תווים בלבד');
        
    }

    function handleS1Change(e){
        let value = e.target.value;
        setType(value);
    }

    function handleS2Change(e){
        let value = e.target.value;
        setColor(value);
    }

    function handleSubmit() {
        if(name.length<1){
            alert('error');
        } else {
            props.newRoom(room)
        }
      }

    return (
        <div className='container'>
        <div className='row'>
          <div className='col-4'>
          </div>
          <div id='box' className='col-4'>
            <h1>Smart House</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group dir='rtl'>
                <Form.Label>בחר חדר חדש</Form.Label>
                    <Form.Control type="text" placeholder="שם החדר" onChange={handleChange}/>
                </Form.Group>
                <Form.Label>בחר סוג חדר </Form.Label>
                <Form.Group dir='rtl'>
                    <Form.Control as="select" id='select1' onChange={handleS1Change}>
                        <option value="חדר שינה">חדר שינה</option>
                        <option value="אמבטיה/שירותים">אמבטיה/שירותים</option>
                        <option value="מטבח">מטבח</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group dir='rtl'>
                    <Form.Label>בחר צבע חדר</Form.Label>
                    <Form.Control as="select" onChange={handleS2Change}>
                        <option value="red">אדום</option>
                        <option value="blue">כחול</option>
                        <option value="green">ירוק</option>
                    </Form.Control>
                </Form.Group>
                <Link to={{ pathname: '/'}}>
                <div onClick={handleSubmit}>
                צור
                </div>
                </Link>
            </Form>
          </div>
        </div>
      </div>
    );
}

export default AddRoom;