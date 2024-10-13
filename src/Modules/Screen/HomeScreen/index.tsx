import React,{FC} from 'react'
import {HomeScreenProps} from './interface'
import { Header } from '../../../Core'
import ScrollAnimation from 'react-animate-on-scroll';
import './HomeStyle.css'
const HomeScreen:FC<HomeScreenProps>=()=>{
    return(

<div className='Container'>
    <div className='Header'>

<div className='col-5'>
    <img src="https://i.pinimg.com/originals/7e/b8/f8/7eb8f8be53af16c3a4162ea302366ad0.jpg" className='imagestyle'/>
</div>
<div className='col-7 d-flex'> 
    <div className='d-flex IconConatiner'>
    <div className='align-self-center d-flex'>
    <img src="https://cdn-icons-png.flaticon.com/128/1423/1423923.png" className='IconStyle1'/>

    </div>
    <div className='HeaderContainer1'></div>
    <div className='align-self-center d-flex'>
    <img src="https://cdn-icons-png.flaticon.com/128/15634/15634417.png" className='IconStyle1'/>

    </div>
    </div>
    <div className='d-flex HeaderContainer2'>
        <div className='d-flex condentContainer'>
        <div className='d-flex ParagraphConatiner'>
        <p>Click edit and create your own amazing website

</p>

        </div>
        <div>
            <a href='#'>Read more</a>
        </div>
        </div>
       
        <div className='PrimaryButtonContainer'>
        <div className='primaryButton'><label className='primaryButtontext'>Edit this site</label></div>

        </div>
    </div>
</div>
    </div>
    <div className='d-flex ListContainer'>
<div className='col-lg-5 ListChildContainer2'>

</div>
<div className='col-lg-7 ListChildContainer d-flex'>
<div className='d-flex list-unstyled ListContainer3'>
{/* <ul className=""> */}
    <li ><a>ABOUT</a></li>
    <li><a>TREATMENT</a></li>
    <li><a>PACKAGES</a></li>
    <li><a>CONTACT</a></li>
    
{/* </ul> */}
</div>
<div className='LoginContainer'>
        <button className='LoginButtonStyle'>
            <span>Login</span>
        </button>
        <img src="https://cdn-icons-png.flaticon.com/128/2169/2169826.png" className='CartImage'/>
    </div>
</div>
    </div>
    <div className=' Container2'>

   
<div className='col-lg-6 Container3'>
<h1>llll</h1>
</div>
<div className='col-lg-6 bg-secondary'>
<h1>44444</h1>

</div>
</div>
</div>

    )
}

export {HomeScreen}

