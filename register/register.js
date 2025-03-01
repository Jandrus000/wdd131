import {participantTemplate, successTemplate, totalFees} from "./templates.js";

document.addEventListener("DOMContentLoaded", () => {
    let participantCount = 1;

    const addButton = document.getElementById("add");
    const participantSection = document.querySelector(".participants")
    const form = document.querySelector("form");

    addButton.addEventListener("click", () => {
        participantCount += 1;
        const participantHTML = participantTemplate(participantCount)
        participantSection.lastElementChild.insertAdjacentHTML("beforebegin",participantHTML)
    });

    form.addEventListener("submit", () => {
        event.preventDefault()
        const adult_name = document.getElementById("adult_name").value;
        const info = {name: adult_name, participantCount: participantCount, fee: totalFees()};
        const summarySection = document.getElementById("summary")
    
        form.style.display = "none";
        summarySection.insertAdjacentHTML("beforeend", successTemplate(info))
    });

});

