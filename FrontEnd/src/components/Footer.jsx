export default function Footer() {

    const data = {
        para1: '@Copyright Sourabh_g_ All Rights Reserverd',
        para2: 'Designed by',
        bold: 'TAILWIND',
        link: 'Certified by',
    }

    const footer = {
        backgroundcolor: '#0032b5',
        border: '1px solid #aaa1a1ff',
        position: 0,
    }

    return (
        <>
            <section style={{ position: 'relative' }}>
                <div className="footercolor text-white text-center py-3" style={{ background: footer.backgroundcolor, borderTop: footer.border }}>
                    <p>{data.para1}</p>
                    <p>{data.para2} <span style={{ color: '#00eaffff' }}>{data.bold}</span> | <a onClick={() => { navigate('/certification') }} className="text-white" style={{ cursor: 'pointer', fontSize: '1em' }}>{data.link}</a></p>
                </div>
            </section>
        </>
    );
}