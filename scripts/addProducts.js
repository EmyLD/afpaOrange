

window.onload = (event) => {

    let datas = [];
    fetch('../utils/books.json')
        .then((response) => response.json())
        .then((json) => datas.push(json));

    console.log(datas);
    let dataStorage = JSON.stringify(datas[0]);
    console.log(dataStorage);
    console.log("page is fully loaded");
    localStorage.setItem("datas", dataStorage)
    console.log(localStorage.getItem("datas"));

    document.getElementById('submit').addEventListener('submit', (e) => {
        e.preventDefault;


        try {
            let formData = {
                title: document.getElementById('title').value,
                category: document.getElementById('category').value,
                author: document.getElementById('author').value
            };



        } catch (error) {

        }

    })
};