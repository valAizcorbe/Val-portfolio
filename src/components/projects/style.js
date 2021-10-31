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
height: 100%;
margin-right: 5em;
display: flex;
flex-direction: column;
align-items: center;
overflow-x: hidden;
&& {
    @media (max-width: 950px){
        margin-top: 5em;
        
    }
}

& a{
    text-decoration: none;
    
}
`

export const Head = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-around;
align-items: center

`

export const Title = styled.h1`
font-family: 'Raleway', sans-serif;
margin: 1.5em;
// font-size: large;
`

export const Pbutton = styled.button`
border: 3px solid;
border-color: #B2C9AB;
background-color: transparent;
color: #B2C9AB;
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
    background-color: #B2C9AB;
    color: #788AA3; }

    &:focus { outline: none; }
`

export const Grid = styled.div`
display:flex;
flex-flow: row wrap;
justify-content: center;
align-items: space-evenly;
column-count: 3;
`

export const Extra = styled.p`
font-style: italic;
`