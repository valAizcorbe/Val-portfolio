import styled from 'styled-components'

export const theme = {
    white: '#ffffff',
    purple: '#e2a0ff',
    limeGreen: '#e8ffb7',
    darkPurple: '#7c6bea'
}

export const Bar = styled.div`
height: 100%;
width: 5em;
background-color: ${props => props.theme.white};
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
position: fixed;
overflow: hidden;
border: 2px solid;
border-color: ${props => props.theme.limeGreen};

& a {
    color: ${props => props.theme.purple};
    
}

&& {
    @media (max-width: 950px){
    width: 100%;
    height: 5em;
    flex-direction: row;
     z-index: 3;
    }
}

`

export const Icon = styled.button`
font-size: 25px;
&:hover {
    font-size: 35px;
}
font-style: large;
border: none;
background-color: transparent;
margin:0;
`