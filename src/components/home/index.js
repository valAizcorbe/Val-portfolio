import React from 'react';
import {Intro, Box, Phrase, theme, Name} from './style'
import Logo from '../../imgs/logo.PNG'

function Home() {
    return(
        <Box theme={theme}>
            <Name src={Logo}/>
            
           
<Intro> <Phrase>Welcome!</Phrase>I'm a bilingual full stack web developer based in American Fork, Utah. I'm passionate about my career and can't wait to learn more about the latest technologies available, best coding practices and keep growing as a developer.
    </Intro>        
</Box>
    )
}

export default Home;