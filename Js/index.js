
const toogleMode= ()=>{
    let body = document.body;
    body.classList.toggle('background-color-change');
    body.classList.toggle('bg-dark');
    body.classList.toggle('text-light');
    body.classList.toggle('bg-gradient');

    if (body.classList.contains('bg-dark')) {
        let darkButtons = document.getElementsByClassName('btn-outline-dark');
        [...darkButtons].forEach(element => {
            element.classList.remove('btn-outline-dark');
            element.classList.add('btn-outline-light');
        });
        
    }
    else {
        let lightButtons = document.getElementsByClassName('btn-outline-light');
        [...lightButtons].forEach(element => {
            element.classList.remove('btn-outline-light');
            element.classList.add('btn-outline-dark');
        });
    }

}