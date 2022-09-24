let button = document.querySelector('.button');
let inputValue = document.querySelector('.inputValue');
let city = document.querySelector('.name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');

button.addEventListener('click', () => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=f71d178599e5063e924fddad2ac6a97b')
        .then(res => res.json())
        .then(data => {
            let nameValue = data['name'];
            let tempValue = data['main']['temp'];
            let descValue = data['weather'][0]['description'];

            city.innerText = nameValue;
            temp.innerText = tempValue;
            desc.innerText = descValue;

        })
        .catch(err => alert("Please enter a valid city"))

})