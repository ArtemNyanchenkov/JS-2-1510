const sendedform = {
    fname: document.getElementsByName('fname').value,
    text: document.getElementsByName('text').value,
    email: document.getElementsByName('email').value,
    phone: document.getElementsByName('phone').value,

    _handleEvents() {
        document.querySelector('#submit').addEventListener('click', () => {
            checkdata(this);            
        });
    },

    checkdata(data){
        
        if (data.fname != null && data.fname.value.length < 2 )
        {
        alert('Заполните поле "Ваше имя"');
        document.getElementsByName('fname').addClass('redLine');
        return false;
        }

        if(data.phone != null && data.phone.value.length == 0)
        {
        alert('поле "Контактный телефон" пустое');
        document.getElementsByName('phone').addClass('redLine'); 
        return false;
        }
        
        if(data.phone != null && data.phone.value.length < 5)
        {
        alert('поле "Контактный телефон" должно содержать минимум пять символов');
        document.getElementsByName('phone').addClass('redLine'); 
        return false;
        }
        
        if(!(/^[0-9-+()s]+z/.test(data.phone.value+'z')))
        {
        alert('"Контактный телефон" указан неверно');
        document.getElementsByName('phone').addClass('redLine'); 
        return false; 
        }

        if(data.email != null && data.email.value.length == 0)
        {
        alert('поле "E-Mail" пустое');
        document.getElementsByName('email').addClass('redLine');  
        return false;     
        }
        
        if(!(/^\w+[-_\.]*\w+@\w+-?\w+\.[a-z]{2,4}$/.test(data.email.value)) )
        {
        alert('Введите правильный E-Mail адрес');
        document.getElementsByName('email').addClass('redLine');
        return false;    
        }
        
        if (data.text != null && data.text.value.length < 1)
        {
        alert('Заполните поле "Текст"');
        document.getElementsByName('text').addClass('redLine');        
        return false;
        } 

        alert ('Данные отправлены. Спасибо.');
    }
}

sendedform._handleEvents();