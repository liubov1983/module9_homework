const inputNodes = document.querySelectorAll('.input');
const btnNode = document.querySelector('.button');
const resultNode = document.querySelector('.result');

function useRequest(url, callback) {
    fetch(url)
        .then(response => 
            response
        )
        .then((data) => {
            callback(data.url);
        })
        .catch(() => { console.log('error') });
}

function displayResult(response) {
    const cardBlock = `
        <div class="card">
            <img src="${response}"/>
        </div>
        `;
    resultNode.innerHTML = cardBlock;
}


btnNode.addEventListener('click', () => {
    const width = inputNodes[0].value;
    const height = inputNodes[1].value;

    if ((width < 100 || width > 300) || (height < 100 || height > 300 )) {
        resultNode.textContent = 'одно из чисел вне диапазона от 100 до 300';
    } else {
        const url = `https://picsum.photos/${width}/${height}`;
        useRequest(url, displayResult);
    }
})