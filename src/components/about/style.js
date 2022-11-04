import styled from 'styled-components';

export const theme = {
    white: '#ffffff',
    purple: '#e2a0ff',
    limeGreen: '#e8ffb7',
    darkPurple: '#7c6bea'
}



export const AboutBox = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: ${props => props.theme.white};
color: ${props => props.theme.darkPurple};
margin-right: 5em;
border: 2px solid;
border-color: ${props => props.theme.limeGreen};
&& {
    @media (max-width: 950px){
    margin-top: 2em;
    }
}

`

export const ButtonResume = styled.button`
border: 3px solid;
border-color: #7c6bea;
background-color: transparent;
color: #7c6bea;
border-radius: 30px;
width: 12em;
height: 3em;
margin-bottom: 2em;
font-family: 'Abel', sans-serif;
font-weight: bolder;
font-size: x-large;

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

export const TextAbout = styled.p`
font-family: 'Raleway', sans-serif;
font-size: x-large;
margin: 1.5em 3em;
text-align: justify;
&& {
    @media (max-width: 950px){
        margin: 1em;
    }
    @media (max-width: 400px){
        margin: 1em;
        font-size: large;
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
    @media (max-width: 700px){
        column-count: 2;
        font-size:large;
        padding: 0;
        
    }
}
`

export const Description = styled.h1`
font-family: 'Raleway', sans-serif;
font-size: x-large;
font-weight: lighter;
text-align: justify;
margin: 1em 4em;

&& {
    @media (max-width: 400px){
        font-size:large;
    }
}

`

export const Item = styled.li`
list-style-type: none;
margin: 5px;
`

export const Imagen = styled.img`
height:90%;
width:30%;
border-radius: 50%;
margin: 6em 2em 2em 2em;

&& {
    @media (max-width: 950px){
    width: 50%;
    height: 50%;
    }
}

`

export const FirstPart = styled.div`
display: flex;
// flex-direction: row;
justify-content: center;
align-items: center;
padding: 5em;
width: 80%;

&& {
    @media (max-width: 950px){
        flex-wrap: wrap-reverse;
        padding: 1em 1em 0 1em;
    }
    @media (max-width: 400px){
        padding: 0;
    }
}
`
