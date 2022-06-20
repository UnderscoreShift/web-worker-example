export const appendSpanToDiv = (nodeClass, nodeContent) => {
    const newNode = document.createElement('span');
    newNode.className = nodeClass;
    const textNode = document.createTextNode(nodeContent);
    newNode.appendChild(textNode);
    document.getElementsByClassName('flex-parent')[0].appendChild(newNode);
    document.getElementsByClassName('flex-parent')[0].append('\u00A0');
}
