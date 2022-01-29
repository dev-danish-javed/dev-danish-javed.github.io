const showRough = () => {
    [...document.getElementsByClassName('frame')].forEach(element => {
        element.classList.toggle('d-none');
    });
}