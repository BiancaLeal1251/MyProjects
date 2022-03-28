import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const ShoppingData = (props) => {

const [quantity, setQuantity] = useState(1);

var items = [
    {index: '1', name: 'Notebook', unitprice: 1999.99, amount: 1},
    {index: '2', name: 'Smartphone', unitprice: 1499.95, amount: 1},
    {index: '3', name: 'Gamer CPU', unitprice: 3000.00, amount: 1},
    {index: '4', name: 'Widescreen Monitor', unitprice: 500.00, amount: 1},
    {index: '5', name: 'Smartwatch', unitprice: 99.90, amount: 1},
    {index: '6', name: 'Bluetooth Headphones', unitprice: 60.00, amount: 1},
]

const result = items.reduce((total, currentValue) => total = total + currentValue.unitprice,0);

const handleClickButtonPlus = () => {
    setQuantity((quantity) => quantity + 1);
}

const handleClickButtonMinus = () => {
    if(quantity > 1){   
    setQuantity((prevValue) => prevValue - 1);
}
}


const listItems = items.map((item) =>
<tr>
    <td><a href='/'>{item.name}</a></td>
    <td><div><Button variant="dark" onClick={() => handleClickButtonMinus()}>-</Button><p className='qty-value'>{quantity}</p><Button variant="dark" onClick={() => handleClickButtonPlus()}>+</Button></div></td>
    <td>US${item.unitprice}</td>
    <td>US${item.unitprice}</td>
</tr>
);

    
return(
<div className='cart'>
    <div className='cart-table'>
    <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Item</th>
      <th>Quantity</th>
      <th>Unit Price</th>
      <th>Total Price</th>
    </tr>
  </thead>
  <tbody>
  {listItems}
  </tbody>
</Table>
<div className='subtotal'>
<h2>Subtotal:</h2>
<h3>US${result}</h3>
</div>
    </div>
</div>
);
};

export default ShoppingData;
