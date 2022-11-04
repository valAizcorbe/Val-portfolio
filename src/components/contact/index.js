import React from 'react';
import {Title, ContactBox, Button, TextSection,theme} from './style'

function Contact() {
    return(
         <ContactBox theme={theme}>
             <TextSection><Title>Let's be friends</Title>
<a href='https://www.linkedin.com/in/valeriaaizcorbe/'><Button>Linked In</Button></a>
<a href="mailto:valeria.aizcorbe@gmail.com?">
<Button>Send me an email</Button></a>
<a href='https://docs.google.com/document/d/1K6_RkInsDWOkJxckfHT31dZPmIsM7Re8-gHO_ie5R7k/edit?usp=sharing'>
<Button>Resume</Button></a>
</TextSection>

{/* <img/> */}
        </ContactBox>
    )
}

export default Contact;