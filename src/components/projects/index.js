import React from 'react';
import {Pbox, Pbutton, theme,Title, Head, Grid} from './style';
import {AiOutlineGithub} from 'react-icons/ai'
import {FiCode} from 'react-icons/fi'
import SingleProject from './singleProject';
import avalanche from '../../imgs/avalanche.mp4'

function Projects() {

    const projects = [
        {
         
            title: "Recipe",
            video: ``,
            description:'This is my first project. I build a NODB recipe app. You can add, edit, delete and update as many recipes as you want. I really enjoyed building it because I learned more while developing it.',
            tools: 'REACT | JAVASCRIPT | CSS | HTML | NODE | EXPRESS',
            code: 'https://github.com/valAizcorbe/NODB'
    
        },
        {
        
            title: "Avalanche",
            video: `${avalanche}`,
            description:`Avalanche is an app that helps you calculate when you'll be debt free and start having savings. `,
            tools: 'REACT REDUX | REACT-ROUTER | JAVASCRIPT | CSS | HTML | SQL | NODE | EXPRESS | EXPRESS-SESSION | BCRYPT | MASSIVE | CHARTJS',
            code: 'https://github.com/valAizcorbe/avalanche.github.io'
            
        }, {
          
            title: "Artistry",
            video: 'https://www.youtube.com/18ac89b1-3196-4c61-90e6-705dec996f3e',
            description:`Group Project:
            Artistry is a social media website for Artists. They can sign in our website, and start posting about their art, videos and writing! They can 'save' the art that other account posted, make comments and just enjoy Artistry. `,
            tools: 'REACT | REACT REDUX | REACT PLAYER | REACT-ROUTER | JAVASCRIPT | CSS | HTML | SQL | NODE | EXPRESS | EXPRESS-SESSION | BCRYPT | MASSIVE',
            code:'https://github.com/VRTS-group/VRTS'
            
        }, {
           
            title: "Google-Chat",
            video: 'https://www.youtube.com/18ac89b1-3196-4c61-90e6-705dec996f3e',
            description:`lala`,
            tools: '',
            code:'https://github.com/valAizcorbe/React-Chat'
            
        }, {
            title: "Recipe - API",
            video: 'https://www.youtube.com/18ac89b1-3196-4c61-90e6-705dec996f3e',
            description:`lala`,
            tools: '',
            code:'https://github.com/valAizcorbe/NewRecipeApp'
            
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
        video={item.video}
        tools={item.tools}
        code={item.code}
        />

    ))}
</Grid>

        </Pbox>
    )
}

export default Projects;