const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

// Set the number of elements in the marquee
root.style.setProperty("--marquee-elements", marqueeContent.children.length);

// Duplicate the elements to ensure seamless scrolling
for(let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}