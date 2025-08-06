import React from 'react';
import user from  '../assets/M-removebg-preview.png'
import '../styles/slider.css'

export default function Slider(){
    const userContent = {
        fontSize:'50px',
        weight:'bold'
    }
    const userimg = {
        alt:'Sourabh Bante'
    }
    return <>
    <section id='slider' className="border">
        <div className="sliderDiv"></div>
        <div id='main' className="container p-4">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12" style={{alignContent:'center'}}>
                    <div style={{color:'#fff'}}>
                        <h1 className='py-3' style={{textAlign:'left',fontSize:userContent.fontSize,fontWeight:userContent.weight}}>Hello, I'm Saurabh</h1>
                        <h3 className='py-3' style={{textAlign:'left',}}>I am a Java FullStack developer</h3>
                        <p className='py-2' style={{textAlign:'justify'}}>I'm a passionate Java Full Stack Developer skilled in building robust backend systems with Spring Boot and dynamic frontends using React.js. I love solving real-world problems through code.</p>
                        <button className='bg-primary' style={{borderRadius:'10px',textAlign:'left',display:'flex',justifyContent:'left'}}>Contact Me</button>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12" style={{display:'flex',justifyContent:'center'}}>
                    <img src={user} alt={userimg.alt}  />
                </div>
            </div>
        </div>
    </section>
    </>;
}