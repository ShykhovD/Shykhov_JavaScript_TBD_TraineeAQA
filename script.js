const inputT1 = document.querySelector('#inputN')
const button1 = document.querySelector('#numButton')
const answer1 = document.querySelector('#taskAns1')

const funk1 = function() {
    let value = inputT1.value
    if(value === '7'){
       return answer1.innerHTML = 'Привет!!!'
    }
    return answer1.innerHTML = 'Попробуйте еще'
}
button1.addEventListener('click', funk1)

const inputT2 = document.querySelector('#inputName')
const button2 = document.querySelector('#nameButton')
const answer2 = document.querySelector('#taskAns2')


const nameAns = () => {
    let valueN = inputT2.value
    if(valueN === 'Вячеслав'){
        return answer2.innerHTML = 'Привет Вячеслав'
    }
    return answer2.innerHTML = 'Нет такого имени'
}

button2.addEventListener('click', nameAns)


