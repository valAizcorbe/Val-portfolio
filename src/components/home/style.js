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
flex-direction: column;
color: ${props => props.theme.darkBlueG};
background-color: ${props => props.theme.opal};
width: 100vw;
height: 100vh;
`
export const Intro = styled.p`
display: flex;
align-items: center;
justify-content: center;
padding: 10%;
text-align: center;
font-size: xx-large;
font-family: 'Raleway', sans-serif;
`


export const Phrase = styled.h3`
font-size: xxx-large;
font-family: 'Abel', sans-serif;
// font-style: italic;
;

`
// export const Name = styled.h2`
// font-size: xxx-large;
// 'font-family: 'Abel', sans-serif;
// // font-style: italic;
// `
