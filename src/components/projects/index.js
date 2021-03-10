import React from 'react';
import {Pbox, Pbutton, theme,Title, Head, Grid} from './style';
import {AiOutlineGithub} from 'react-icons/ai'
import {FiCode} from 'react-icons/fi'
import SingleProject from './singleProject';

function Projects() {

    const projects = [
        {
         
            title: "Recipes",
            video: 'blob:https://www.youtube.com/18ac89b1-3196-4c61-90e6-705dec996f3e',
            description:'lala',
    
        },
        {
        
            title: "Avalanche",
            video: 'blob:https://www.youtube.com/18ac89b1-3196-4c61-90e6-705dec996f3e',
            description:`Avalanche is an app that helps you calculate when you'll be debt free and start having savings. I created this website in 2 weeks when I had almost 2 months of experience using
            REACT REDUX, REACT-ROUTER, JAVASCRIPT, CSS, HTML, SQL, NODE, EXPRESS, EXPRESS-SESSION, BCRYPT, MASSIVE
            and
            CHARTJS`,
            
        }, {
          
            title: "Artistry",
            video: 'blob:https://www.youtube.com/18ac89b1-3196-4c61-90e6-705dec996f3e',
            description:`Group Project:
            Artistry is a social media website for Artists. They can sign in our website, and start posting about their art, videos and writing! They can 'save' the art that other account posted, make comments and just enjoy Artistry. We created this website using
            REACT, REACT REDUX, REACT PLAYER, REACT-ROUTER, JAVASCRIPT, CSS, HTML, SQL, NODE, EXPRESS, EXPRESS-SESSION, BCRYPT
            and
            MASSIVE.`,
            
        }, {
           
            title: "Google-Chat",
            video: 'blob:https://www.youtube.com/18ac89b1-3196-4c61-90e6-705dec996f3e',
            description:`lala`,
            
        }, {
            title: "Recipe - API",
            video: 'blob:https://www.youtube.com/18ac89b1-3196-4c61-90e6-705dec996f3e',
            description:`lala`,
            
        }
    ]

    return(
        <Pbox theme={theme}>
            <Head><Title>My projects </Title>
            <a href='https://github.com/valAizcorbe'><Pbutton><FiCode/> All my work <AiOutlineGithub/></Pbutton></a> </Head>
<Grid>
    {projects.map(item => (
        <SingleProject key={item.index}
        title={item.title}
        description={item.description}
        video={item.video}/>

    ))}
</Grid>

        </Pbox>
    )
}

export default Projects;