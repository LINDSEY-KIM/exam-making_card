(function(){

    // const boxEl = document.querySelector('.box');

    // boxEl.style.width = '100px';
    // boxEl.style.height = '100px';
    // boxEl.style.backgroundColor = 'grey';

// ----------------------

    const btnEl = document.querySelector('button');

    function Card(num, color){
        this.num = num;
        this.color = color;
        this.init();
    }

    Card.prototype = {
        constructor:Card,
        init:function(){
            const divEl = document.createElement('div');
            divEl.innerHTML = this.num;
            divEl.style.color = this.color;
            divEl.classList.add('box');
            document.body.appendChild(divEl);
        }
    };

    const handleClick = () => {
        const numInput = prompt('숫자를 입력해주세요.');
        const colorInput = prompt('색상을 입력해주세요.');
        new Card(numInput, colorInput);
    };

    btnEl.addEventListener('click', handleClick)

})();