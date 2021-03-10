import React from 'react';
import {Case} from './style';


function SingleProject ({title, video, description}){

    return(
          
        <Case>
            <h1>{title}</h1>
            <div>{video}</div>
            <p>{description}</p>
        </Case>
        
      
    )
}

export default SingleProject;