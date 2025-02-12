let list = document.querySelector('#list');
let mybtn = document.querySelector('#myBtn');
let nameInput = document.querySelector('#nameInput');
let wrapper = document.querySelector('.wrapper');
let modalw = document.querySelector('.modal_w');

mybtn.addEventListener('click', addTask);

nameInput.addEventListener('keyup', (event) =>{
    if(event.key === 'Enter') {
        addTask();
    }
})

function addTask() {
    if (nameInput.value != '') {
        let modal = document.querySelector('#modal');
        let delbtn = document.querySelector('#del');
        let cancel = document.querySelector('#canc');
        let newitem = document.createElement('li');
        let newitemContent = document.createElement('p');
        newitem.appendChild(newitemContent);
        newitem.classList.add('item')
        newitemContent.innerHTML = `<span>${nameInput.value}</span>`;
        newitem.addEventListener('click', ()=>{
            newitemContent.style.textDecoration = 'line-through'
            function removeLine() {
                newitem.style.textDecoration = ''
            }
            newitem.addEventListener('click', removeLine())
        })
        let newdelbtn =document.createElement('button');
        newdelbtn.textContent = 'x';
        newdelbtn.style.color = 'white';
        newdelbtn.classList.add('newdelbtn')
        list.appendChild(newitem);
        newitem.appendChild(newdelbtn);


        newdelbtn.addEventListener('click', ()=>{
            modalw.style.animation ='1s anim-lineUp ease-out forwards';
            
            
            wrapper.style.filter ='grayscale(100%)';
            wrapper.style.transition = '1s'
            modal.style.display = 'block';
            
            
            
            function remove() {
                list.removeChild(newitem);
                modal.style.display = 'none';
                modalw.style.animation = '1s opacity ';
                wrapper.style.filter ='grayscale(0%)';
                wrapper.style.transition = '1s'
                
            }

            delbtn.addEventListener('click', remove);

            cancel.addEventListener('click', ()=> {
                modal.style.display = 'none';
                wrapper.style.filter ='grayscale(0%)';
                delbtn.removeEventListener('click', remove)
            })
        })
        
        nameInput.value = '';

    } else {
        alert('Fill the form!')
    }
}

newitem.addEventListener('click', ()=> {
    newitem.text.style.textDecoration = 'line-through'
    event.stopImmediatePropagation();
})