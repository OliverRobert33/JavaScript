document.addEventListener('DOMContentLoaded', () => {
  
    const observer = new IntersectionObserver ( entries =>{
            console.log('Ya esta Visible')
    })

    observer.observe(document.querySelector('.premium'))
})