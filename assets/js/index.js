document.addEventListener("mousemove", (e)=>{
    console.log("X", (e.clientX - window.innerHeight/2)*0.005);
    console.log("Y", (e.clientY - window.innerHeight/2)*0.01);
    Object.assign(document.documentElement, {
        style: `--moveX: ${(e.clientX - window.innerHeight/2)*-0.005}deg;
        --moveY: ${(e.clientY - window.innerHeight/2)*0.01}deg;`,
    })
})