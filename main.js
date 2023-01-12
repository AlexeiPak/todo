const block = document.querySelector('.do') // получение
const input = document.querySelector('.input') // добавление задач через кнопку
const addTaskButton = document.querySelector('.btn') // блок для вывода наших задач
const delTaskButton = document.querySelector('.btn2')

let i = 0 

addTaskButton.addEventListener('click', function () {

    let tasks = {
        'number': 1,
        'block': input.value
    }


    let p = input.value

    let delo1 = `<li id=${i++} class="do"><button class="btn2">x</button>`
    

    let delo2 = '</li>'
    let div2 = document.createElement("div2")
    div2.innerHTML = delo1 + p + delo2 
   
   
    document.getElementsByTagName('ol')[0].appendChild(div2)
    
    input.value = ''


})

// delTaskButton.addEventListener('click', function () {


// console.log('hgdf')
// div2.removeChild(ol.firstChild)


// })

