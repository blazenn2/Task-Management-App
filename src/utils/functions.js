export const rotateArrowOfButton = (e) => {
    let svgElement;
    if (e.tagName.toLowerCase() === "button") svgElement = [...e.childNodes].filter(value => value.tagName.toLowerCase() === "svg")[0];
    else svgElement = [...e.closest("button").childNodes].filter(value => value.tagName.toLowerCase() === "svg")[0];
    if ([...svgElement.classList].includes("rotate-180")) svgElement.classList.remove("rotate-180");
    else svgElement.classList.add("rotate-180");
};

export const toggleDropdownMenu = (dropDownElement) => {
    if (![...dropDownElement.classList].includes("max-h-52") && [...dropDownElement.classList].includes("opacity-0")) {
        dropDownElement.classList.add("max-h-52");
        dropDownElement.classList.remove("opacity-0");
        dropDownElement.classList.remove("max-h-0");
    } else {
        dropDownElement.classList.add("opacity-0");
        dropDownElement.classList.remove("max-h-52");
        dropDownElement.classList.add("max-h-0");
    }
};

export const clickSelectHandler = (optionElement, btnElement) => {
    if (typeof optionElement === "string") btnElement.textContent = optionElement; 
    else btnElement.textContent = optionElement.textContent;
    btnElement.parentElement.value = optionElement.textContent;
};

export const addRemoveParticipants = (checked, value, state, setState) => checked ? setState(state.map(val => val.name === value ? { ...val, checked: true } : val)) : setState(state.map(val => val.name === value ? { ...val, checked: false } : val));

export const removeTag = (state, setState, value) => setState(state.map(val => val.name !== value ? { ...val } : { ...val, checked: false }));