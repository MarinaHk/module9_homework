const resultNode = document.querySelector('.j-result');
    const btnNode = document.querySelector('.j-btn-request');
    const inp1Node = document.querySelector('.j-num');
    const inp2Node = document.querySelector('.j-limit');

     btnNode.addEventListener('click', () => {
       let value1 = document.querySelector('.inp1').value;
       let value2 = document.querySelector('.inp2').value;
       if(value1 >= 1 && value1 <= 10 && value2 >= 1 && value2 <= 10) {
      useRequest(`https://picsum.photos/v2/list?page=${value1}&limit=${value2}`, displayResult);
     } else if (value1 >= 1 && value1 <= 10 && (value2 < 1 || value2 > 10 || !isNaN(value2))) {
        const error_of_inp1 = `
            <div class="card">
            <p>Лимит вне диапазона от 1 до 10</p>
            </div>`;
        resultNode.innerHTML = error_of_inp1
     } else if ((value2 >= 1 && value2 <= 10) && (value1 < 1 || value1 > 10 || !isNaN(value1))) {
       const error_of_inp2 = `
            <div class="card">
            <p>Номер страницы вне диапазона от 1 до 10</p>
            </div>`;
        resultNode.innerHTML = error_of_inp2
     } else {
       const error = `
            <div class="card">
            <p>Номер страницы и лимит вне диапазона от 1 до 10</p>
            </div>`;
        resultNode.innerHTML = error
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
        class="card-image"
      />
      <p>${item.author}</p>
    </div>
  `;
        cards = cards + cardBlock;
    });
    resultNode.innerHTML = cards;
};
