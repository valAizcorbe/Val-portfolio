import React from 'react';
import {AboutBox, ButtonResume, theme, TextAbout, List, Item} from './style'

function About() {
    return(
        <AboutBox theme={theme}>
            <a href='https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:6ee32437-5ff1-45d1-b143-904b69a56956'>
<ButtonResume>RESUME</ButtonResume></a>

<TextAbout>I am a full stack developer from Peru with a background of administration and finances. I changed my career not too long ago and I finally love what I do!
While studying development, I realized that I love solving problems with code and work on projects that help people. Now I’m looking for more opportunities as a developer, where I can apply my knowledge, learn new skills and help create powerful programs and websites.</TextAbout>

<List>
    <Item>HTML</Item>
    <Item>CSS</Item>
    <Item>SASS</Item>
    <Item>JAVASCRIPT</Item>
    <Item>REACT</Item>
    <Item>REACT-NATIVE</Item>
    <Item>REDUX</Item>
    <Item>HOOKS</Item>
    <Item>EXPRESS</Item>
    <Item>SESSIONS</Item>
    <Item>NODE JS</Item>
    <Item>BCRYPT</Item>
    <Item>MASSIVE</Item>
    <Item>PostgreSQL</Item>
    <Item>HEROKU</Item>
    <Item>POSTMAN</Item>
    <Item>REST</Item>
    <Item>FIREBASE</Item>
    <Item>CHART JS</Item>
    <Item>STYLED-COMPONENTS</Item>
    <Item>APIs</Item>
    <Item>VS CODE</Item>
    <Item></Item>



</List>
        </AboutBox>
    )
}

export default About;