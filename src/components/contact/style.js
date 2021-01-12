import styled from 'styled-components';

export const theme = {
    darkBlueG: "#666A86",
    dutchWhite: "#E8DDB5",
    shadowBlue: '#788AA3',
    opal: '#92B6B1',
    laurel: '#B2C9AB'
}

export const ContactBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: ${props => props.theme.dutchWhite};
color: ${props => props.theme.shadowBlue};
width: 100%;
// overflow: none; 
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
font-family: 'Xanh Mono', monospace;
`

export const Button = styled.button`
border: 3px solid;
border-color: #788AA3;
background-color: transparent;
color: #788AA3;
border-radius: 5px;
width: 12em;
height: 3em;
margin: 1em;
font-family: 'Poiret One', cursive;
font-weight: bolder;
font-size: x-large;

    &:hover {
    background-color: #788AA3;
    color: #E8DDB5; }

    &:focus { outline: none; }

`