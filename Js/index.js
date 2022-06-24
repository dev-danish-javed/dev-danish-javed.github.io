
const toogleMode= ()=>{
    let body = document.body;
    body.classList.toggle('dark');
    document.getElementById('lightThemeIcon').classList.toggle('d-none');
    document.getElementById('darkThemeIcon').classList.toggle('d-none');

    if (body.classList.contains('dark')) {
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