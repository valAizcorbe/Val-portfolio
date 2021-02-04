import React from 'react';
import {Pbox, Pbutton, theme,Title, Head, Grid} from './style';
import {AiOutlineGithub} from 'react-icons/ai'
import {FiCode} from 'react-icons/fi'
import SingleProject from './singleProject';

function Projects() {
    return(
        <Pbox theme={theme}>
            <Head><Title>My projects </Title>
            <a href='https://github.com/valAizcorbe'><Pbutton><FiCode/> All my work <AiOutlineGithub/></Pbutton></a> </Head>
<Grid>
<SingleProject/>
<SingleProject/>
<SingleProject/>
<SingleProject/>

<SingleProject/></Grid>

        </Pbox>
    )
}

export default Projects;