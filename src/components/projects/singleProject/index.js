import React from 'react';
import {Case, Video, Description, Title} from './style';


function SingleProject ({title, video, description}){

    return(
          
        <Case>
            <Title>{title}</Title>
            <Video src={video} type='video/mp4' controls></Video>
            <Description>{description}</Description>
        </Case>
        
      
    )
}

export default SingleProject;