import { getFeaturedTemplate, allDinosaurContentTemplate } from "./templates.js";
import dinoData from './dinosaurs.json' with { type: "json" }

if(window.location.pathname.includes('all-dinos.html')){
    const allDinos = document.querySelector('.all-dinos');
    const allDinoContent = dinoData.map((dino) => allDinosaurContentTemplate(dino)).join("");
    allDinos.innerHTML = allDinoContent

    dinoData.forEach(dino => {
        const agreeRadio = document.getElementById(`agree-${dino['name']}`);
        const disagreeRadio = document.getElementById(`disagree-${dino['name']}`);

        const thumbsUp = document.querySelector(`#agree-${dino['name']} + .custom-radio .not-checked`);
        const thumbsDown = document.querySelector(`#disagree-${dino['name']} + .custom-radio .not-checked`);
        
        const thumbsUpChecked = document.querySelector(`#agree-${dino['name']} + .custom-radio .checked`);
        const thumbsDownChecked = document.querySelector(`#disagree-${dino['name']} + .custom-radio .checked`);

        function toggleThumbs() {
            if (agreeRadio.checked) {
                thumbsUp.style.opacity = 0;
                thumbsUpChecked.style.opacity = 1;
                thumbsDown.style.opacity = 1;
                thumbsDownChecked.style.opacity = 0;
            } else if (disagreeRadio.checked) {
                thumbsUp.style.opacity = 1;
                thumbsUpChecked.style.opacity = 0;
                thumbsDown.style.opacity = 0;
                thumbsDownChecked.style.opacity = 1;
            }
        }

        agreeRadio.addEventListener('change', toggleThumbs);
        disagreeRadio.addEventListener('change', toggleThumbs);
        
        toggleThumbs();

        // form submittal
        const form = document.querySelector(`.${dino['name']}-form`);

        form.addEventListener('submit', function(event){
            event.preventDefault()

            const messageDiv = document.createElement('div');
            messageDiv.classList.add('thank-you-message');

            if(agreeRadio.checked) {
                messageDiv.innerHTML = `Thank you for agreeing with my take on ${dino['name']}, your response has been recorded`
            } else if(disagreeRadio.checked) {
                messageDiv.innerHTML = `Thank you for disagreeing with my take on ${dino['name']}, your response has been recorded`
            }

            form.innerHTML = '';
            form.appendChild(messageDiv)
        })
    });

} else{
    const featureDinosSlot = document.querySelector(".featured-dino")
    const featuredDinoContent = dinoData.map((dino) => getFeaturedTemplate(dino)).join("");
    featureDinosSlot.innerHTML = featuredDinoContent
}

