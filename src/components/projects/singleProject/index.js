import React from 'react';
import {Case, Video, Description, Title, Tools} from './style';
import {AiOutlineGithub} from 'react-icons/ai'
import {FiCode} from 'react-icons/fi'
import {Pbutton} from '../style'

function SingleProject ({title, video, description, tools, code}){

    return(
          
        <Case>
            <Title>{title}</Title>
            <Video src={video} type='video/mp4' controls></Video>
            <Description>{description}</Description>
            <Tools>{tools}</Tools>
            <a href={code}><Pbutton><FiCode/>Code<AiOutlineGithub/></Pbutton></a>
        </Case>
        
      
    )
}

export default SingleProject;