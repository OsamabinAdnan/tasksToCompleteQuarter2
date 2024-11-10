"use strict";
// Get references to the button and skills section elements
let toggleBtn = document.querySelector('#togglebtn');
let skillsList = document.getElementById('skills');
// Initial state for skills visibility
let showSkills = false;
// Function to toggle the visibility of the skills section
let toggleSkills = () => {
    showSkills = !showSkills;
    skillsList.style.display = showSkills ? 'block' : 'none';
    toggleBtn.textContent = showSkills ? 'Hide Skills' : 'Show Skills';
};
// Attach the toggle function to the button's click event
toggleBtn.addEventListener('click', toggleSkills);
