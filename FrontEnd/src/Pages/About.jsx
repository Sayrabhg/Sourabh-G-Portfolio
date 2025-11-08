import { useState } from 'react'
import '../styles/about.css'
import sourabhImage from '../assets/Sourabh1.jpg'
import '../Script/script.js'

export default function About() {
    const [isExpanded, setIsExpanded] = useState(false)

    const aboutImage = {
        imageSize: '23em',
        height: 'fit-content',
        borderRadius: '.5rem',
        textAlign: 'left',
        fontWeight: '600',
        alignItems: 'center',
        border: '5px solid #c3e2f2bd',
    }

    return (
        <section id="about">
            <div className="container py-5 d-grid aboutcontainer" style={{ gap: '2rem' }}>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className='pb-3'>About</h1>
                        <p id="text" style={{ textIndent: '2em', textAlign: 'justify' }}>
                            Hello everyone, I'm a <b>Java Full Stack Developer</b> with strong skills in Core Java,
                            Advanced Java, and frameworks like Hibernate and Spring. I'm also proficient in API
                            testing tools such
                            {isExpanded && (
                                <span>
                                    {' '}
                                    as Postman. I completed comprehensive training at{' '}
                                    <i style={{ fontWeight: aboutImage.fontWeight }}>ARC Technologies</i>, covering
                                    front-end technologies (HTML, CSS, JavaScript), back-end development (Java, Spring
                                    Boot), and database management.
                                    <br />
                                    <div style={{ textIndent: '2em' }}>
                                        As a web developer, I have built several projects including a{' '}
                                        <b>Flipkart Clone</b> using HTML and CSS, and a <b>Pet Care Center</b> website
                                        developed with PHP, SQL (XAMPP), and JavaScript. These are fully web-based
                                        applications developed using my own code from scratch. I have a strong
                                        understanding of both front-end and back-end technologies, and I take pride in
                                        writing clean, effective code. I successfully completed my Full Stack
                                        Development internship at{' '}
                                        <i style={{ fontWeight: aboutImage.fontWeight }}>ARC Institute of Technologies</i>
                                        , gaining practical experience and deepening my knowledge as a fresher in the
                                        industry. This journey has helped me build solid technical expertise in web
                                        development.
                                    </div>
                                </span>
                            )}
                            <a
                                id="readMoreBtn"
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="text-danger"
                                style={{ textDecoration: 'none', cursor: 'pointer' }}
                            >
                                {isExpanded ? '...read less' : ' read more...'}
                            </a>
                        </p>
                    </div>
                </div>

                <div className="row" style={{ gap: '1em 0' }}>
                    <div className="col-lg-6 col-md-5 col-sm-12 col-12 overflow-hidden align-content-center justify-content-center d-flex dropcss"
                        style={{ flexFlow: 'wrap' }}>
                        <img
                            src={sourabhImage}
                            style={{
                                width: aboutImage.imageSize,
                                height: aboutImage.height,
                                borderRadius: aboutImage.borderRadius,
                                border: aboutImage.border,
                            }}
                            alt="Saurabh"
                        />
                    </div>

                    <div className="col-lg-6 col-md-7 col-sm-12 col-12 align-content-center">
                        <div>
                            <h2>Web / Full Stack Developer</h2>
                            <p>As per my truly knowledge based, I fill my personal details about myself</p>
                            <ul style={{ paddingLeft: '1em' }}>
                                <li>
                                    <div className="d-grid grid">
                                        <div style={{ fontWeight: aboutImage.fontWeight }}>Full Name :</div>
                                        <div>Saurabh Shankar Bante</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-grid grid">
                                        <div style={{ fontWeight: aboutImage.fontWeight }}>Birth :</div>
                                        <div>28 Feb 2003</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-grid grid">
                                        <div style={{ fontWeight: aboutImage.fontWeight }}>Email :</div>
                                        <div>
                                            <p>saurabhbante@gmail.com</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-grid grid">
                                        <div style={{ fontWeight: aboutImage.fontWeight }}>Location :</div>
                                        <div>Jawahar Nagar, Tukdoji Putla, Nagpur, 440009 (IN)</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-grid grid">
                                        <div style={{ fontWeight: aboutImage.fontWeight }}>Call :</div>
                                        <div>
                                            <p>7264032362</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
