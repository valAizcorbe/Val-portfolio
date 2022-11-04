import React from 'react';
import {Intro, Box, Phrase, theme, Name} from './style'
import Logo from '../../imgs/logo.PNG'

function Home() {
    return(
        <Box theme={theme}>
            {/* <Name src={Logo}/> */}
            <Phrase>Welcome!</Phrase>
        <Intro> 
        
            I am a bilingual full stack web developer based in American Fork, Utah. I'm passionate about my career and can't wait to learn more about the latest technologies available, best coding practices and keep growing as a developer. 
            
            Thank you for checking my portfolio, make sure to check my projects and stay tunned because something cool is in the works.
        </Intro>        
        </Box>
    )
}

export default Home;