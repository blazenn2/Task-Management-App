export const rotateArrowOfButton = (e) => {
    let svgElement;
    if (e.target.tagName.toLowerCase() === "button") svgElement = [...e.target.childNodes].filter(value => value.tagName.toLowerCase() === "svg")[0];
    else svgElement = [...e.target.closest("button").childNodes].filter(value => value.tagName.toLowerCase() === "svg")[0];
    if ([...svgElement.classList].includes("rotate-180")) svgElement.classList.remove("rotate-180");
    else svgElement.classList.add("rotate-180");
};

export const toggleDropdownMenu = (dropDownElement) => {
    if (![...dropDownElement.classList].includes("h-52") && [...dropDownElement.classList].includes("opacity-0")) {
        dropDownElement.classList.add("h-52");
        dropDownElement.classList.remove("opacity-0");
        dropDownElement.classList.remove("h-0");
    } else {
        dropDownElement.classList.add("opacity-0");
        dropDownElement.classList.remove("h-52");
        dropDownElement.classList.add("h-0");
    }
};