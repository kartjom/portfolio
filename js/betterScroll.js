function focusOnElement(id) {
    const node = document.querySelector(`#${id}`)

    window.scrollTo(0, node.offsetTop - node.offsetHeight);
}