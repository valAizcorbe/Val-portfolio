import styled from 'styled-components'

export const theme = {
    darkBlueG: "#666A86",
    dutchWhite: "#E8DDB5",
    shadowBlue: '#788AA3',
    opal: '#92B6B1',
    laurel: '#B2C9AB'
}

export const Box = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: ${props => props.theme.shadowBlue};
background-color: ${props => props.theme.dutchWhite};
width: 100vw;
height: 100vh;
flex-direction: column;
margin-right: 5em;
overflow: hidden;

&& {
    @media (max-width: 950px){
    
    margin-top: 5em;
        
    }
}
`
export const Intro = styled.p`
display: flex;
align-items: center;
justify-content: center;
padding: 2em;
text-align: justify;
font-size: xx-large;
font-family: 'Raleway', sans-serif;
flex-direction: column;

&& {
    @media (max-width: 900px) {
        font-size: large;

    }
}
`


export const Phrase = styled.h3`
font-size: xxx-large;
font-family: 'Abel', sans-serif;

;

`
export const Name = styled.img`
width: 50%;
height: 30%;
margin: 4em 0.5em 0.5em 0.5em;

&& {
    @media (max-width: 900px) {
        width: 50%;
        height: 20%;

    }
}
`
