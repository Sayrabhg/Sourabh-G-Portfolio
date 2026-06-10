import '../styles/resume.css'

export default function Resume() {
    return (
        <>
            <section id="Resume">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <h1 className="pb-4">Resume</h1>
                            <aside id="showresume" className='d-grid'>
                                <p className="" style={{ fontWeight: 'bold', width: '6rem' }}>Summary :</p>
                                <p className="" style={{ textIndent: '.1rem' }}> I have completed my school and college-level education, and this year, I successfully completed the final year of my Master of Computer Applications (MCA) program.</p>
                            </aside>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <aside className="">
                                <p className="py-3" style={{ fontWeight: 'bold' }}>Education</p>
                                <div className="container position-relative boxsiz">
                                    <div className="vertical-line"></div>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12"></div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="position-relative joint-r p-4 border">
                                                <div id="showgridresume" className="showgridresume educationanimation ">
                                                    <b>VMV Commerce, JMT Arts & JJP Science College Wardhaman sq. Nagpur, Maharashtra.</b>
                                                    <p>- Master Of Computer Application(MCA), Web Development, July 2023-Appearing.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12" style={{ justifyItems: 'end' }}>
                                            <div className="position-relative joint-l p-4 border">
                                                <div id="showgridresume" className="showgridresume educationanimation ">
                                                    <b>Shri. Mathuradas Mohota College Of Science Sakkardara road, Nagpur, Maharashtra.</b>
                                                    <p>- Bachelor Of Science, PCM(Physics, Chemistry, Maths), Jun 2023-Passout with 60.07%.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12"></div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="position-relative joint-r p-4 border">
                                                <div id="showgridresume" className="showgridresume educationanimation ">
                                                    <b>Prerna College Of Science Reshimbagh, Nagpur, Maharashtra</b>
                                                    <p>- HSC(Higher Secondary Education), Feb 2020-Passout with 56.31%.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12" style={{ justifyItems: 'end' }}>
                                            <div className="position-relative joint-l p-4 border">
                                                <div id="showgridresume" className="showgridresume educationanimation ">
                                                    <b>Indira Gandhi High School Jawahar Nagar, Tukdoji Putla, Nagpur.</b>
                                                    <p>- SSC(Secondary School Certificate), Mar 2018-Passout with 63.80%.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12"></div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}