
window.onload = (event) => {

    console.log("page is fully loaded");

    document.getElementById('submit').addEventListener('submit', (e) => {
        e.preventDefault;

        fetch('../utils/books.json')
            .then((response) => response.json())
            .then((json) => console.log(json));

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