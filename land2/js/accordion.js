"use strict";

const allAccordions = Array.from(document.querySelectorAll(".accordion"));

allAccordions.forEach((accordion) =>
  accordion.addEventListener("click", handleClick)
);

function closeAllItems(e) {
  const currentAccordionItems = Array.from(
    e.currentTarget.querySelectorAll(".accordion__item")
  );

  for (let i = 0; i < currentAccordionItems.length; i++) {
    currentAccordionItems[i].classList.remove("active");
  }
}

function handleClick(e) {
  const clickedElement = e.target.closest(".accordion__item");
  if (clickedElement) {
    if (clickedElement.classList.contains("active")) {
      clickedElement.classList.remove("active");
    } else {
      closeAllItems(e);
      clickedElement.classList.add("active");
    }
  }
}
