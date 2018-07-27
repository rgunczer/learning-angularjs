2
function addItem(val: any) {
    const node: HTMLElement = document.createElement("li");
    const textnode: any = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}