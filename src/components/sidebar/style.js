import styled from 'styled-components'

export const theme = {
    darkBlueG: "#666A86",
    dutchWhite: "#E8DDB5",
    shadowBlue: '#788AA3',
    opal: '#92B6B1',
    laurel: '#B2C9AB'
}

export const Bar = styled.div`
height: 100vh;
width: 10em;
background-color: ${props => props.theme.shadowBlue};
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
align-self: flex-end;
overflow: hidden;
& a {
    color: ${props => props.theme.dutchWhite};
    
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