import styled from 'styled-components'

export const theme = {
    dbg: "#666A86",
    dw: "#E8DDB5"
}

export const Bar = styled.div`
height: 100vh;
width: 10%;
background-color: ${props => props.theme.dbg};
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
align-self: flex-end;
overflow: hidden;
& a {
    color: ${props => props.theme.dw};
    
}

`

export const Icon = styled.button`
font-size: 25px;
&:hover {
    font-size: 30px;
}
font-style: large;
border: none;
background-color: transparent;
margin:0;
`