const resultNode = document.querySelector('.j-result');
const imgWidth = document.querySelector('.j-num1');
const imgHeight = document.querySelector('.j-num2');
const btnNode = document.querySelector('.j-btn-request');

btnNode.addEventListener('click', () => {
    let width = imgWidth.value;
    let height = imgHeight.value;
    if ((width > 300 || width < 100) || (height > 300 || height < 100)){
        document.querySelector('p').textContent ='одно из чисел вне диапазона от 100 до 300';
    }
    else{
        fetch(`https://picsum.photos/${width}/${height}`, displayResult)
        .then(response => response.json())
        .then(json => console.log(json))   
    }
});

 function useRequest(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
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
    };

    function displayResult(apiData) {
    let cards = '';
    apiData.forEach(item => {
        const cardBlock = `
    <div class="card">
      <img
        src="${item.download_url}"
        class="card-image">
      <p>${item.author}</p>
    </div>
  `;
        cards = cards + cardBlock;
    });
    resultNode.innerHTML = cards;
};