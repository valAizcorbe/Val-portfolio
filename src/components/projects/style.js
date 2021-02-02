import styled from 'styled-components';

export const theme = {
    darkBlueG: "#666A86",
    dutchWhite: "#E8DDB5",
    shadowBlue: '#788AA3',
    opal: '#92B6B1',
    laurel: '#B2C9AB'
}

export const Pbox = styled.div`
background-color: ${props => props.theme.darkBlueG};
color: ${props => props.theme.laurel};
width: 100vw;
height:100vh;

& a{
    text-decoration: none;
    
}
`

export const Head = styled.div`
display: flex;
// flex-direction: column;
justify-content: space-around;
align-items: center`

export const Title = styled.h1`
font-family: 'Raleway', sans-serif;
margin: 1.5em;

`

export const Pbutton = styled.button`
border: 3px solid;
border-color: #788AA3;
background-color: transparent;
color: #788AA3;
border-radius: 30px;
width: 12em;
height: 3em;
margin: 1.5em;
font-family: 'Abel', sans-serif;
font-weight: bolder;
font-size: x-large;
display:flex;
justify-content: space-around;
align-items:center;



    &:hover {
    background-color: #788AA3;
    color: #E8DDB5; }

    &:focus { outline: none; }
`