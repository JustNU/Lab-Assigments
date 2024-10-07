const button = document.querySelector("button");
const paragraph = document.querySelector("p");
let buttonState = 0;

let changeCssAttributes = function()
{
    if (buttonState === 0) 
    {
        paragraph.style.color = "red";
        paragraph.style.fontSize = "xxx-large";
        paragraph.style.paddingLeft = "500px"

        paragraph.innerText = "Text Changed";

        buttonState = 1;
    }
    else
    {
        paragraph.style.color = "black";
        paragraph.style.fontSize = "medium";
        paragraph.style.paddingLeft = "0px"

        paragraph.innerText = "Text Unchanged";

        buttonState = 0;
    }
}

button.addEventListener("click", changeCssAttributes);