document.addEventListener("mousemove", (e)=>{
    console.log(e.clientX, e.clientY);
    Object.assign(document.documentElement, {
        style: `--moveX: ${e.clientX - window.innerHeight/2}deg;
        --moveY: ${e.clientY - window.innerHeight/2}deg;`,
    })
})