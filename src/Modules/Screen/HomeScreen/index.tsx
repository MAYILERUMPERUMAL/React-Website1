import React,{FC,useEffect} from 'react'
import {HomeScreenProps} from './interface'
import ScrollAnimation from 'react-animate-on-scroll';
import './HomeStyle.css'
const HomeScreen:FC<HomeScreenProps>=()=>{
    // useEffect(() => {
    //     // Disable scrolling
    //     document.body.style.overflow = 'hidden';
    
    //     // Cleanup function to re-enable scrolling when component unmounts
    //     return () => {
    //       document.body.style.overflow = 'auto';
    //     };
    //   }, []);
    return(
<>
<div className='Header'>
<div className='col-5'>
    <img src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='30' fill='none'%3E%3Cg fill='%23000' clip-path='url(%23a)'%3E%3Cpath d='M75 0h-4.142a3.47 3.47 0 0 0-2.87 1.52l-5.54 8.174a.372.372 0 0 1-.615 0l-5.54-8.173A3.46 3.46 0 0 0 53.424 0h-4.143l9.87 14.56-9.815 14.477h4.143a3.465 3.465 0 0 0 2.868-1.52l5.486-8.093a.372.372 0 0 1 .616 0l5.485 8.093a3.46 3.46 0 0 0 2.87 1.52h4.142L65.131 14.56zM40.758 2.97v26.067h1.98a2.97 2.97 0 0 0 2.97-2.97V0h-1.98a2.97 2.97 0 0 0-2.97 2.97M37.126 0h-1.762a4.15 4.15 0 0 0-4.051 3.233l-3.942 17.328-3.45-16.175c-.638-2.99-3.706-5.006-6.845-4.139-1.999.552-3.481 2.241-3.914 4.27L9.747 20.54 5.813 3.234A4.16 4.16 0 0 0 1.76 0H0l6.604 29.036h2.502a4.81 4.81 0 0 0 4.706-3.808l4.221-19.81a.54.54 0 0 1 .523-.424c.25 0 .471.178.523.423l4.226 19.812a4.81 4.81 0 0 0 4.706 3.807h2.51z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h75v29.037H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E" className='imagestyle'/>
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
 <div className='Container'>
   
 <div className='d-flex ListContainer'>
      
<div className='col-lg-5 ListChildContainer2'>
    {/* <h1>gjhsgjhgjhgjhghj</h1> */}
<div className='listSideConatent d-flex'>
<div className='listSideConatentChild'>
    <a  className='contentLabel d-flex'>BRW</a>
    <div className='d-flex flex-column sideContent'>
        <label>Bar</label>
        <label>inc</label>

    </div>
</div>
</div>
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


    <div className=' Container2 d-flex'>
      
    <div className='imageConatainer1'>
<img src="https://static.wixstatic.com/media/d99169_4713498713044ad7bf124ab3d6b0c51c~mv2_d_3840_5760_s_4_2.jpg/v1/crop/x_0,y_670,w_3840,h_2792/fill/w_847,h_608,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d99169_4713498713044ad7bf124ab3d6b0c51c~mv2_d_3840_5760_s_4_2.jpg" className='imageConatainer1Image'/>
</div>
   
<div className='col-lg-6 Container3'>
<h1>llll</h1>
</div>
<div className='col-lg-6 bg-secondary Conatainer4'>
    <div className='sidecontent'>
<div className='sideContent1'><div className='sideContent2'>
<h1 className='sideContentText'>WE CHANGE THE WORLD<br/> ONE EYEBROW <br/>AT A TIME</h1></div></div>
    </div>
{/* <div className='contentContainer'>fff</div> */}
<div className='ImageIconContainer'>
        {/* <ul> */}
            <img src={'https://cdn-icons-png.flaticon.com/128/20/20837.png'} className='imageIconstyle'/>
            <img src={'https://cdn-icons-png.flaticon.com/128/1384/1384031.png'} className='imageIconstyle'/>
            <img src={'https://cdn-icons-png.flaticon.com/128/104/104093.png'} className='imageIconstyle'/>

          

            {/* </ul> */}
    </div>
</div>
</div>


 </div>
 <div className='container'>
<div className='row'>
    <div className='col-6 bg-primary'>
<h1>ppppppppp</h1>
    </div>
    <div className='col-6 bg-secondary'>

</div>

</div>
</div>
</>


    )
}

export {HomeScreen}

