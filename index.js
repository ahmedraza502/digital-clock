function updateclock(){
    const now =  new Date();
    const hours = now.getHours();
    const minutes =  now.getMinutes();
    const seconds =  now.getSeconds();
    const timestring = `${hours}h: ${minutes}m:${seconds}s`;
    document.getElementById("clock").textContent=timestring;
}
updateclock();
setInterval(updateclock, 1000)