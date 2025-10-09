export default function Footer() {
    const footer = {
        backgroundcolor: '#0032b5',
        border: '1px solid #aaa1a1ff',
        position: 0,
    }
    return (
        <>
            <section style={{position:'relative'}}>
                <div className="footercolor text-white text-center py-3" style={{ background: footer.backgroundcolor, borderTop: footer.border }}>
                    <p>@Copyright Sourabh_g_ All Rights Reserverd</p>
                    <p>Designed by <span style={{ color: '#00eaffff' }}>TAILWIND</span> | <a onClick={() => { navigate('/certification') }} className="text-white" style={{ cursor: 'pointer', fontSize: '1em' }}>Certified by</a></p>
                </div>
            </section>
        </>
    );
}