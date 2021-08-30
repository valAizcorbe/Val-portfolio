import React from 'react';
import {Pbox, Pbutton, theme,Title, Head, Grid} from './style';
import {AiOutlineGithub} from 'react-icons/ai'
import {FiCode} from 'react-icons/fi'
import SingleProject from './singleProject';
import avalanche from '../../imgs/avalanche.mp4'
import Chat from '../../imgs/Chat.webm'
import Recipe2 from '../../imgs/Recipe2.webm'

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
            description:`Avalanche is an app that helps you calculate through the avalanche method when you'll be debt free and start having savings. `,
            tools: 'REACT REDUX | REACT-ROUTER | JAVASCRIPT | CSS | HTML | SQL | NODE | EXPRESS | EXPRESS-SESSION | BCRYPT | MASSIVE | CHARTJS',
            code: 'https://github.com/valAizcorbe/avalanche.github.io'
            
        }, {
          
            title: "Artistry",
            video: 'https://www.youtube.com/18ac89b1-3196-4c61-90e6-705dec996f3e',
            description:`
            Artistry is a social media website for Artists. They can create an account, sign in and start posting about their art. They can like, comment and 'save' the art from other accounts. `,
            tools: 'REACT | REACT REDUX | REACT PLAYER | REACT-ROUTER | JAVASCRIPT | CSS | HTML | SQL | NODE | EXPRESS | EXPRESS-SESSION | BCRYPT | MASSIVE',
            code:'https://github.com/VRTS-group/VRTS'
            
        }, {
           
            title: "Google-Chat",
            video: `${Chat}`,
            description:`This app requires a Google authentication. It will take you to the main chat where everybody with a google account can chat at the same time!`,
            tools: 'REACT-HOOKS | JAVASCRIPT | HTML | FIREBASE | STYLED-COMPONENTS',
            code:'https://github.com/valAizcorbe/React-Chat'
            
        }, {
            title: "Recipe - API",
            video: `${Recipe2}`,
            description:`App that searches for the calories amount and the ingredients of a recipe.`,
            tools: 'REACT-HOOKS | JAVASCRIPT | HTML | API | NODE | STYLED COMPONENTS',
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