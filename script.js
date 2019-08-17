const editNodes = (type) => {
    const nodes = document.querySelectorAll(type);
    nodes.forEach((node) => {
        if (node.innerText) {
            const text = node.innerHTML
                    .replace(/the (?!fucking)/g, 'the fucking ')
                    .replace(/ a (?!fucking)/g, ' a fucking ')
                    .replace(/ an (?!fucking)/g, ' a fucking ');
            node.innerHTML = text;
        }
    });
}

const listOfTypes = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'a', 'strong'];
listOfTypes.forEach((type) => {
    editNodes(type);
});
