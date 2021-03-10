import React from 'react';
import {Case, Video} from './style';


function SingleProject ({title, video, description}){

    return(
          
        <Case>
            <h1>{title}</h1>
            <Video src={video} type='video/mp4' controls></Video>
            <p>{description}</p>
        </Case>
        
      
    )
}

export default SingleProject;