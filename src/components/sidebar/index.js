import React from 'react';
import {Link} from 'react-router-dom';
import {BiHomeHeart} from 'react-icons/bi'
import {MdPerson} from 'react-icons/md'
import {VscGist} from 'react-icons/vsc'
import {HiAtSymbol} from 'react-icons/hi'
import {Bar, Icon, theme} from './style';

function SideBar() {
    return(
        <Bar theme={theme}>
            
            <Icon><Link to='/'><BiHomeHeart/></Link></Icon>
            <Icon><Link to='/about'><MdPerson/></Link></Icon>
            <Icon><Link to='/projects'><VscGist/></Link>
</Icon>
            <Icon><Link to='/contact'><HiAtSymbol/></Link>
</Icon>




        </Bar>
    )
}

export default SideBar;