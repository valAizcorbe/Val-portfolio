import React from 'react';
import {Title, ContactBox, Button, TextSection,theme} from './style'

function Contact() {
    return(
         <ContactBox theme={theme}>
             <TextSection><Title>Let's be friends</Title>
<a href='https://www.linkedin.com/in/valeriaaizcorbe/'><Button>Linked In</Button></a>
<a href="mailto:valeria.aizcorbe@gmail.com?">
<Button>Send me an email</Button></a>
<a href='https://twitter.com/ValAizcorbe'><Button>Twitter</Button></a>
<a href='https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:6ee32437-5ff1-45d1-b143-904b69a56956'>
<Button>Resume</Button></a>
</TextSection>

{/* <img/> */}
        </ContactBox>
    )
}

export default Contact;