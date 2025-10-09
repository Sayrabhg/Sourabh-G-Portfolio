import React from 'react';
import '../styles/slider.css'
import { useNavigate } from 'react-router-dom';
import SliderPage from '../components/SubPages.jsx/SliderPage';

export default function Slider() {

    const navigate = useNavigate();

    const userContent = {
        fontSize: '50px',
        weight: 'bold'
    }
    return <>
        <section id='slider' className="border">
            <div className="sliderDiv"></div>
            <div id='main' className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12" style={{ alignContent: 'center' }}>
                        <div style={{ color: '#fff' }}>
                            <h1 className='py-3' style={{ textAlign: 'left', fontSize: userContent.fontSize, fontWeight: userContent.weight }}>Hello, I'm Saurabh</h1>
                            <SliderPage />
                            <div className='d-flex gap-4'>
                                <button className='bg-primary my-4' onClick={() => navigate('/contact')} style={{ borderRadius: '10px', textAlign: 'left', display: 'flex', justifyContent: 'left' }}>Contact Me</button>
                                <div className='socialLinks d-flex gap-3'>
                                    <a href="https://github.com/Sayrabhg"><i class="fa-brands fa-github"></i></a>
                                    <a href="https://www.linkedin.com/in/saurabh-bante-5347b422a/"><i class="fa-brands fa-linkedin"></i></a>
                                    <a href="https://sayrabhgportfolio.netlify.app/"><i class="fa fa-user-circle-o" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>;
}