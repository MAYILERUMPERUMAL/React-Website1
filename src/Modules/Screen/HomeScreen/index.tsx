import React,{FC} from 'react'
import {HomeScreenProps} from './interface'
import { Header } from '../../../Core'
import ScrollAnimation from 'react-animate-on-scroll';
import './HomeStyle.css'
const HomeScreen:FC<HomeScreenProps>=()=>{
    return(
<div className='Container' >
<Header/>
<div className='OptionListHeader'>
    <div className='optionlistContainer1'>

  
<div className='optionlist1'>
    <label className='optionlist1Text1'>BRW</label>
    <label className='optionlist1Text2'>BAR INC @</label>

</div>
</div>
<div className='optionlistContainer2'>
    <div className='optionlistContainer2TextBox'>
        <label className='optionlistContainer2TextBoxText'>ABOUT</label>
    </div>
    <div className='optionlistContainer2TextBox'>
        <label className='optionlistContainer2TextBoxText'>TREATMENTS</label>
    </div>
    <div className='optionlistContainer2TextBox'>
        <label className='optionlistContainer2TextBoxText'>PACKAGES</label>
    </div>
    <div className='optionlistContainer2TextBox'>
        <label className='optionlistContainer2TextBoxText'>CONTACT</label>
    </div>
</div>
<div className='loginandcartContainer'>
    <div className='LoginContainer' onChange={()=>{}}>
        <label className='loginTextStyle'>Login</label>
    </div>
    <img src='https://www.svgrepo.com/show/505591/cart-1.svg' className='cartImageStyle'/>
</div>
</div>

</div>
    )
}

export {HomeScreen}

