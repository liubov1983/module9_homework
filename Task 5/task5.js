const inputNodes = document.querySelectorAll('.input');
const btnNode = document.querySelector('.button');
const resultNode = document.querySelector('.result');

if (localStorage.getItem("card")) {
    displayResult(JSON.parse(localStorage.getItem("card")));
}

function useRequest(url, callback) {
    fetch(url)
        .then((response) => {
            const result = response.json();
            return result;
        })
        .then((data) => {
            callback(data);
        })
        .catch(() => { console.log('error', url) });
}

function displayResult(response) {
    let card = '';
    response.forEach(element => {
        const cardBlock = `
            <div class="card">
                <img width="500" src="${element.download_url}"/>
                <p>${element.author}</p>
            </div>
        `;
        card = card + cardBlock;
        resultNode.innerHTML = card;
    });
    localStorage.setItem("card", JSON.stringify(response));
}

btnNode.addEventListener('click', () => {
    const pageNumber = parseInt(inputNodes[0].value);
    const limitNumber = parseInt(inputNodes[1].value);

    if ((pageNumber < 1 || pageNumber > 10 || typeof(pageNumber) !== 'number') && (limitNumber < 1 || limitNumber > 10 || typeof(limitNumber) !== 'number')) {
        resultNode.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
    } else if (pageNumber < 1 || pageNumber > 10 || typeof(pageNumber) !== 'number') {
        resultNode.textContent = 'Номер страницы вне диапазона от 1 до 10';
    } else if (limitNumber < 1 || limitNumber > 10 || typeof(limitNumber) !== 'number') {
        resultNode.textContent = 'Лимит вне диапазона от 1 до 10';
    } else {
        const url = `https://picsum.photos/v2/list?page=${pageNumber}&limit=${limitNumber}`;
        useRequest(url, displayResult);
    }
})

