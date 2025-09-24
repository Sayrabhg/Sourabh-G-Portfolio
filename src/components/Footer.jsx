export default function Footer(){
    const footer = {
        backgroundcolor: '#0032b5',
        border:'1px solid #aaa1a1ff'
    }
    return(
        <>
        <section className="footercolor text-white text-center py-3" style={{background:footer.backgroundcolor,borderTop:footer.border}}>
            <p>@Copyright Sourabh_g_ All Rights Reserverd</p>
            <p>Designed by <span style={{color:'#00eaffff'}}>TAILWIND</span></p>
        </section>
        </>
    );
}