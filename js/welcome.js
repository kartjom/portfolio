function welcome(event)
{
    const welcomeNode = document.querySelector("#welcome");
    
    welcomeNode.style.opacity = 0
    setTimeout(() => {
        document.body.style.overflow = "auto";
        document.body.style.overflowX = "hidden";
        welcomeNode.remove()
    }, 1000)
}