function welcome()
{
    const welcomeNode = document.querySelector("#welcome");
    
    welcomeNode.style.opacity = 0
    setTimeout(() => {
		const canvas = document.querySelector("canvas[main]")
		if (canvas) {
			canvas.shouldExit = true
		}

        document.body.style.overflow = "auto";
        document.body.style.overflowX = "hidden";
        welcomeNode.remove()
    }, 1000)
}