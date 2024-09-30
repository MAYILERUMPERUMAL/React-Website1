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
<div className='imageandcontentcontainer'>
    <div className='imagebackgroundContainer'>
        <div className='conetntConatinerParent'>
            <div className='conetntConatinerParent1'>
            <div className='conetntConatiner'> 
<h1 className='textStyle'>We Change The World One Eye Brow At the time</h1>

</div>
            </div>
      
        </div>
    
    </div>
    <div className='imagestylecontainer'>
    <img src='https://static.wixstatic.com/media/d99169_4713498713044ad7bf124ab3d6b0c51c~mv2_d_3840_5760_s_4_2.jpg/v1/crop/x_0,y_670,w_3840,h_2792/fill/w_847,h_608,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d99169_4713498713044ad7bf124ab3d6b0c51c~mv2_d_3840_5760_s_4_2.jpg' className='imageStyle1'/>

    </div>
  
</div>
</div>
    )
}

export {HomeScreen}

