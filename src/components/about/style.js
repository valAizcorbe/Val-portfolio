import styled from 'styled-components';

export const theme = {
    darkBlueG: "#666A86",
    dutchWhite: "#E8DDB5",
    shadowBlue: '#788AA3',
    opal: '#92B6B1',
    laurel: '#B2C9AB'
}



export const AboutBox = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: ${props => props.theme.laurel};
color: ${props => props.theme.darkBlueG};
margin-right: 5em;
&& {
    @media (max-width: 950px){
        margin-top: 5em;
        
    }
}

`

export const ButtonResume = styled.button`
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
            color: #E8DDB5; }
        
    
    &:focus { outline: none; }

`

export const TextAbout = styled.p`
font-family: 'Raleway', sans-serif;
font-size: x-large;
margin: 1em 3em;
text-align: center;

`

export const List = styled.ul`
column-count: 4;
font-size: x-large;
font-weight: bold;
font-family: 'Abel', sans-serif;
line-height: 1.5;
margin: 1em;

&& {
    @media (max-width: 950px){
        column-count: 2;
        
    }
}
`

export const Description = styled.h1`
font-family: 'Raleway', sans-serif;
font-size: x-large;
font-weight: lighter;
text-align: center;
margin: 1em 2em;
`

export const Item = styled.li`
list-style-type: none;
margin: 2px;
`

