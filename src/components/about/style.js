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
text-align: justify;
&& {
    @media (max-width: 950px){
   
        margin: 1em;
    }
}
`

export const List = styled.ul`
column-count: 4;
font-size: x-large;
font-weight: bold;
font-family: 'Abel', sans-serif;
line-height: 1.5;
margin: 1em;
padding: 2em 1em;
text-align: justify;

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
text-align: justify;
margin: 1em 2em;

`

export const Item = styled.li`
list-style-type: none;
margin: 5px;
`

export const Imagen = styled.img`
height:30%;
width: 30%;
border-radius: 50%;
margin: 1em 2em;

&& {
    @media (max-width: 950px){
    width: 50%;
    height: 50%;
    
     
    }
}


`

export const FirstPart = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 5em 5em 0 5em;


&& {
    @media (max-width: 950px){
  flex-wrap: wrap-reverse;
     padding: 1em 1em 0 1em;
    }
}
`