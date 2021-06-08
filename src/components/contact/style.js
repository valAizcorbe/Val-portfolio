import styled from 'styled-components';

export const theme = {
    darkBlueG: "#666A86",
    dutchWhite: "#E8DDB5",
    shadowBlue: '#788AA3',
    opal: '#92B6B1',
    laurel: '#B2C9AB'
}

export const ContactBox = styled.body`
display: flex;
justify-content: center;
align-items: center;
background-color: ${props => props.theme.opal};
color: ${props => props.theme.darkBlueG};
width: 100%;
height: 100vh;
margin-right: 5em;

& {
    @media (max-width: 950px){
        margin-top: 5em;
        
    }
}

& a{
    text-decoration: none;
    
}
`

export const TextSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;


`

export const Title = styled.h1`
font-family: 'Raleway', sans-serif;
`

export const Button = styled.button`
border: 3px solid;
border-color: #788AA3;
background-color: transparent;
color: #788AA3;
border-radius: 30px;
width: 12em;
height: 3em;
margin: 1em;
font-family: 'Abel', sans-serif;
font-weight: bolder;
font-size: x-large;

    &:hover {
    background-color: #788AA3;
    color: #92B6B1; }

    &:focus { outline: none; }

`