import styled from 'styled-components';

export const theme = {
    white: '#ffffff',
    purple: '#e2a0ff',
    limeGreen: '#e8ffb7',
    darkPurple: '#7c6bea'
}

export const Pbox = styled.div`
background-color: ${props => props.theme.white};
color: ${props => props.theme.darkPurple};
width: 100vw;
height: 100vh;
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
`

export const Pbutton = styled.button`
border: 3px solid;
border-color: #7c6bea;
background-color: transparent;
color: #7c6bea;
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
        background-color: #7c6bea;
        color: #e8ffb7; }
        
    &:focus { outline: none; }

    && {
        @media (max-width: 950px){
            margin: 1em;
            font-size: large;
        }
        @media (max-width: 400px){
            margin: 1em ;
        }
    }
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