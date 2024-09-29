import React,{FC} from 'react'
import {HeaderProps} from './interface'
import './HeaderStyle.css'
const Header:FC<HeaderProps>=()=>{
    return(
<div className='headerContainer' >
 {/* <a href=''  className='titleContainer'> */}
 <div className='websiteTitle'>
 <h1>Wix</h1>

 </div>

 {/* </a> */}
 <div className='deviceOptionContainer'>
 <div >
 <img className='imgConatiner' src='https://www.svgrepo.com/show/533130/monitor.svg' style={{fill:'black'}} alt='black'/>
 <img className='imgConatiner' src='https://www.svgrepo.com/show/499623/mobile.svg' style={{fill:'black'}}/>
 </div>

<div>
    <p>Click edit and create your own amazing website</p>
</div>
<div>
    <a>Read More</a>
</div>

<div className='PrimaryButton'>
    <label className='PrimaryButtonLabel'> Edit  this site</label>
   </div>
   </div>
</div>
    )
}

export {Header}