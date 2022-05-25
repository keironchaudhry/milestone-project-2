let choicesButtons = document.querySelector('button');

choicesButtons.addEventListener('click', function(event) {
    alert("You clicked me!");
})


/*
choicesButtons.forEach(choicesButton => {
    choicesButton.addEventListener('click', function(event) {
        const choiceName = choicesButton.dataset.selection;
        makeSelection(choiceName);
    })
})

function makeSelection(selection) {
    console.log(selection);
} */
