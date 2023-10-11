const inputNode = document.querySelector('.input');
const btnNode = document.querySelector('.button');
const resultNode = document.querySelector('.result');

function useRequest(url, callback) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    };

    xhr.onerror = function() {
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };
      
    xhr.send();
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
}

btnNode.addEventListener('click', function() {
    if (inputNode.value < 1 || inputNode.value > 10) {
        resultNode.textContent = 'Число вне диапазона от 1 до 10';
    } else {
        const url = `https://picsum.photos/v2/list?limit=${inputNode.value}`;
        useRequest(url, displayResult);
    }
})