
import styled from 'styled-components';

export const Case = styled.div`
width: 30em;
height: 45em;
background-color: rgba(219, 251, 176, 0.8);
background-opacity: 0.5;
margin: 2em;
padding: 2em;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
border-radius: 16px;
backdrop-filter: blur(5px);
border: 2px solid rgba(255, 255, 255, 0.5);
&& {
    @media (max-width: 950px){
        height: 35em;
        width: 20em;
        
    }
}

`

export const Video = styled.video`
height: 20em;
width: 28em;
margin-top:0;
position: relative;

&& {
    @media (max-width: 950px){
        height: 15em;
        width: 22em;
        
    }
}

`

export const Description = styled.h6`
text-align: justify;
padding: 1em;
margin: 0 1em;
font-size: large;
&& {
    @media (max-width: 950px){
       margin: 0;
        
    }
}

`
export const Title = styled.h1`
font-family: 'Raleway', sans-serif;

`
export const Tools = styled.p`
margin: 0 1em;
text-align: justify;
font-size: small;
`
