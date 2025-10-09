// import democerti from '../assets/democertiimg.png'
import arccertificate from '../assets/ARC-Certificate.jpg'
import '../styles/Certificate.css'

function Certificate() {
    const name = {
        h2: 'Certifications',
        // img: democerti,
        img2: arccertificate,
        height:'500'
    }
    return (
        <>
            <section id="certificate">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12" style={{ justifyItems: 'center' }}>
                            <h1 className='py-3' style={{ fontWeight: 'bold' }}>{name.h2}</h1>
                            <div className="py-3">
                                <img src={name.img2} alt="" className='rounded' height={name.height} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Certificate;