import '../styles/about.css'
import sourabhImage from '../assets/Sourabh1.jpg'

export default function About() {

    const aboutContainer ={
        
    }

    const aboutImage = {
        imageSize:'70%',
        height:'fit-content',
        borderRadius:'.5rem',
        textAlign:'left',
        fontWeight:'600',
        alignItems:'center',
        border:'5px solid #c3e2f2bd',
    }
    

    return <>
        <section id="about">
            <div className="container py-5 d-grid aboutcontainer" style={{gap:'1rem'}}>
                <div className="row">
                    <div className="col-lg-12">
                        <h1>About</h1>
                        <p>Hello everyone, I'm a <b>Java Full Stack Developer</b> with strong skills in Core Java, Advanced Java, and frameworks like Hibernate and Spring. I'm also proficient in API testing tools such as Postman. I completed comprehensive training at <i style={{fontWeight:aboutImage.fontWeight}}>ARC Technologies</i>, covering front-end technologies (HTML, CSS, JavaScript), back-end development (Java, Spring Boot), and database management.</p>
                        <p>As a web developer, I have built several projects including a <b>Flipkart Clone</b> using HTML and CSS, and a <b>Pet Care Center</b> website developed with PHP, SQL (XAMPP), and JavaScript. These are fully web-based applications developed using my own code from scratch. I have a strong understanding of both front-end and back-end technologies, and I take pride in writing clean, effective code. I successfully completed my Full Stack Development internship at <i style={{fontWeight:aboutImage.fontWeight}}>ARC Institute of Technologies</i>, gaining practical experience and deepening my knowledge as a fresher in the industry. This journey has helped me build solid technical expertise in web development.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 overflow-hidden align-content-center justify-content-center d-flex dropcss" style={{flexFlow:'wrap',}}>
                        <img src={sourabhImage} style={{width:aboutImage.imageSize,height:aboutImage.height,borderRadius:aboutImage.borderRadius,border:aboutImage.border}} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 align-content-center">
                        <div>
                            <h2>Web / Full Stack Developer</h2>
                        <p>As per my truly knowlegde based i fill my personals details about my self</p>
                        <ul className=''>
                            <li>
                                <div className='d-grid grid'>
                                    <div style={{fontWeight:aboutImage.fontWeight}}>Full Name</div>
                                    <div style={{fontWeight:aboutImage.fontWeight}}>:</div>
                                    <div>Saurabh Shankar Bante</div>
                                </div>
                            </li>
                            <li>
                                <div className='d-grid grid'>
                                    <div style={{fontWeight:aboutImage.fontWeight}}>Birth</div>
                                    <div style={{fontWeight:aboutImage.fontWeight}}>:</div>
                                    <div>28 Feb 2003</div>
                                </div>
                            </li>
                            <li>
                                <div className='d-grid grid'>
                                    <div style={{fontWeight:aboutImage.fontWeight}}>Email</div>
                                    <div style={{fontWeight:aboutImage.fontWeight}}>:</div>
                                    <div><a href="saurabhbante11@gmail.com">saurabhbante11@gmail.com</a></div>
                                </div>
                            </li>
                            <li>
                                <div className='d-grid grid'>
                                    <div style={{fontWeight:aboutImage.fontWeight}}>Location</div>
                                    <div style={{fontWeight:aboutImage.fontWeight}}>:</div>
                                    <div>Jawahar Nagar, Tukdoji Putla, Nagpur, 440009(IN)</div>
                                </div>
                            </li>
                            <li>
                                <div className='d-grid grid'>
                                    <div style={{fontWeight:aboutImage.fontWeight}}>Call</div>
                                    <div style={{fontWeight:aboutImage.fontWeight}}>:</div>
                                    <div><a href="7264032362" >7264032362</a></div>
                                </div>
                            </li>
                        </ul>
                        <h5 style={{fontWeight:'bold'}}>Personal Website</h5>
                        <ul className=''>
                            <li>
                                <div className='d-grid grid'>
                                    <div style={{fontWeight:aboutImage.fontWeight}}>github</div>
                                    <div style={{fontWeight:aboutImage.fontWeight}}>:</div>
                                    <div><a href="https://github.com/Sayrabhg">https://github.com/Sayrabhg</a></div>
                                </div>
                            </li>
                            <li>
                                <div className='d-grid grid'>
                                    <div style={{fontWeight:aboutImage.fontWeight}}>LinkedIn</div>
                                    <div style={{fontWeight:aboutImage.fontWeight}}>:</div>
                                    <div><a href="https://www.linkedin.com/in/saurabh-bante-5347b422a/">https://www.linkedin.com/in/saurabh-bante-5347b422a/</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='d-grid grid'>
                                    <div style={{fontWeight:aboutImage.fontWeight}}>Portfolio</div>
                                    <div style={{fontWeight:aboutImage.fontWeight}}>:</div>
                                    <div><a href="https://sayrabhgportfolio.netlify.app/">https://sayrabhgportfolio.netlify.app/</a></div>
                                </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>;
}