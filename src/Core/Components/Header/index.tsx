import React,{FC} from 'react'
import {HeaderProps} from './interface'
import './HeaderStyle.css'
const Header:FC<HeaderProps>=()=>{
    return(
<div className='Container' >
 <a href=''  className='titleContainer'>
 <span  className='title'></span>

 </a>

</div>
    )
}

export {Header}