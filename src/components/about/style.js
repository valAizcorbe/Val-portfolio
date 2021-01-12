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
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: ${props => props.theme.laurel};
color: ${props => props.theme.darkBlueG};

   

`
export const ButtonResume = styled.button`
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

    &:hover  {
    background-color: #788AA3;
    color: #E8DDB5; }
    &:focus { outline: none; }

`

export const TextAbout = styled.p`
font-family: 'Xanh Mono', monospace;
font-size: x-large;
font-weight: bolder;
margin: 4em;
text-align: center;

`

export const List = styled.ul`
column-count: 4;
font-size: X-large;
font-weight: bolder;
font-family: 'Poiret One', cursive;

&& {
    @media (max-width: 800px){
        column-count: 2;
        font-size: large;
        font-weight: bold;
        
    }
}
`

export const Item = styled.li`
list-style-type: none;
margin: 2px;
`