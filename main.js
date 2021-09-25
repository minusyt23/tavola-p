const gridWidth = 18;
const gridHeight = 7;

var gridPos = 0;
var pTable = document.getElementById("pTable");
var elemZoom = document.getElementById("elemZoom");

function createDivText(text, className) {
    let container = document.createElement("div");
    if(className) {
        container.classList = className;
    }

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
            elementContainer.appendChild(elementNumber);

            let elementSymbol = createDivText(`${element.symbol}`, "elemSymbol");
            elementContainer.appendChild(elementSymbol);

            let elementName = createDivText(`${element.name}`, "elemName");
            elementContainer.appendChild(elementName);

            let oxidationString = "";
            if(element.oxidation) {
                oxidationString = element.oxidation.replaceAll("+-", "±");
            } else {
                oxidationString = "--"
            }
            
            let elementOxidation = createDivText(`${oxidationString}`, "elemOxidation");
            elementContainer.appendChild(elementOxidation);

            elementGridContainer.appendChild(elementContainer);

            elementContainer.addEventListener("click", () => {
                elemZoom.classList.add("goBack");
                elemZoom.innerHTML = elementContainer.innerHTML;
                setTimeout(() => {
                    elemZoom.classList.remove("goBack");
                }, 1);
            });

            gridPos++;
            elemIndex++;
            break;
    }
    
    pTable.appendChild(elementGridContainer);
}


window.addEventListener("mousemove", (e) => {
    document.documentElement.style.setProperty("--mouseX", `${e.pageX - elemZoom.offsetLeft - elemZoom.offsetWidth / 2}px`);
    document.documentElement.style.setProperty("--mouseY", `${e.pageY - elemZoom.offsetTop - elemZoom.offsetHeight / 2}px`);
}); 