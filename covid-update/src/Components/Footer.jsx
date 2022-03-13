import React from 'react';
import Container from 'react-bootstrap/Container';
import 'font-awesome/css/font-awesome.min.css';

export default class Header extends React.Component{
render(){
return(
<Container>
<hr />
<div className='footer'>
<br />
<div className='footer-info'>
<i className="fa fa-info icon-footer"></i>
<p>Covid updates template | Made using ReactJS and Bootstrap | BiancaLeal1251 | 2022 </p>
</div>
</div>
</Container>
)}
}