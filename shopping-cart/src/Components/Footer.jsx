import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

export default class Footer extends React.Component{
render(){
return(
<div className='footer'>
<div className='footer-newsletter'>
<Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Join our newsletter! Fill in your e-mail here."
          className="me-2"
          aria-label="Search"
        />
        <Button variant="dark">OK</Button>
      </Form>
</div>
<div className='footer-links'>
<ul className='footer-links-column'>
<li><span className='footer-links-column--text'>Departments</span></li>
<li><span className='footer-links-column--text'>Services</span></li>
<li><span className='footer-links-column--text'>Partners</span></li>
</ul>
<ul className='footer-links-column'>
<li><span className='footer-links-column--text'>Support</span></li>
<li><span className='footer-links-column--text'>FAQ</span></li>
<li><span className='footer-links-column--text'>Institutional</span></li>
</ul>
<ul className='footer-links-column'>
<li><span className='footer-links-column--text'>About Us</span></li>
<li><span className='footer-links-column--text'>Careers</span></li>
<li><span className='footer-links-column--text'>News</span></li>
</ul>
<ul className='footer-links-column'>
<li className='icon-twitter'></li>
<li className='icon-instagram'></li>
<li className='icon-facebook'></li>
</ul>
</div>
</div>
)}
}