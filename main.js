const gridWidth = 18;
const gridHeight = 7;

var gridPos = 0;
var pTable = document.getElementById("pTable");

function createDivText(text, className) {
    let container = document.createElement("div");
    container.classList = className;

    let textnode = document.createTextNode(text);
    container.appendChild(textnode);
    return container;
}

for (let i = 0, elemIndex = 1; i < elements.length; i++) {
    const element = elements[i];
    
    let elementGridContainer = document.createElement("div");

    let column = gridPos % (gridWidth) + 1;
    let row = Math.floor(gridPos / (gridWidth)) + 1;

    switch (element.symbol) {
        case null:
            elementGridContainer.setAttribute("style", `grid-column: ${column} / ${element.spacing + column}; grid-row: ${row} / ${row};`);

            gridPos += element.spacing;
            break;
    
        default:
            elementGridContainer.setAttribute("style", `grid-column: ${column} / ${column}; grid-row: ${row} / ${row};`);

            let elementContainer = document.createElement("div");
            elementContainer.classList = "elemContainer";

            let elementNumber = createDivText(`${elemIndex}`);

            let elementSymbol = createDivText(`${element.symbol}`, "elemSymbol");

            let elementName = createDivText(`${element.name}`, "elemName");

            elementContainer.appendChild(elementNumber);
            elementContainer.appendChild(elementSymbol);
            elementContainer.appendChild(elementName);

            elementGridContainer.appendChild(elementContainer);

            gridPos++;
            elemIndex++;
            break;
    }
    
    pTable.appendChild(elementGridContainer);
}

