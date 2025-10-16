
import arccertificate from '../assets/ARC-Certificate.jpg'
import SkyVisionItSolutionCertificate from '../assets/Sky Vision Intern Certificate.jpg'
import '../styles/Certificate.css'

function Certificate() {
    const name = {
        h2: 'Certifications',
        img2: arccertificate,
        img3: SkyVisionItSolutionCertificate,
        height:'500',
        height2:'900',
    }
    return (
        <>
            <section id="certificate">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12" style={{ justifyItems: 'center' }}>
                            <h1 className='py-3' style={{ fontWeight: 'bold' }}>{name.h2}</h1>
                            <div className="image-container py-3">
                                <img src={name.img2} alt="" className='rounded' height={name.height} />
                            </div>
                            <div className="image-container py-3">
                                <img src={name.img3} alt="" className='rounded' height={name.height2} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Certificate;