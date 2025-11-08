document.addEventListener("DOMContentLoaded", function(){
    const target = document.getElementById('aboutcontainer');
    if(target){
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },{
            threshold:0.1
        })
        observer.observe(target);
    }
})