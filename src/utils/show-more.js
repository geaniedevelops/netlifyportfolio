const allshowMoreTriggers = document.querySelectorAll('.js-showmore-trigger');

const updateButtonText = (button) => {
    if (button.innerHTML === 'More') {
        button.innerHTML = 'Less';
    } else if (button.innerHTML === 'Less') {
        button.innerHTML = 'More';
    }
};

const handleShowMoreClick = (content, buttonText) => {
    content.classList.toggle('expanded');
    updateButtonText(buttonText);
};

Array.from(allshowMoreTriggers).forEach((showMore) => {
    const targetElement = document.querySelector(`.${showMore.dataset.target}`);
    showMore.addEventListener('click', (e) => {
        const buttonText = e.target.firstElementChild;
        handleShowMoreClick(targetElement, buttonText);
    });
});