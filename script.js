let list = document.querySelector('#list');
let mybtn = document.querySelector('#myBtn');
let nameInput = document.querySelector('#nameInput');

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
        newitem.classList.add('item')
        newitem.innerHTML = `<span>${nameInput.value}</span>`;
        let newdelbtn =document.createElement('button');
        newdelbtn.textContent = 'x';
        newdelbtn.style.color = 'white';
        newdelbtn.classList.add('newdelbtn')
        list.appendChild(newitem);
        newitem.appendChild(newdelbtn);

        newdelbtn.addEventListener('click', ()=>{
            modal.style.display = 'block';
            modal.style.transition = '1s';

            function remove() {
                list.removeChild(newitem);
                modal.style.display = 'none';
            }

            delbtn.addEventListener('click', remove);

            cancel.addEventListener('click', ()=> {
                modal.style.display = 'none';
                delbtn.removeEventListener('click', remove)
            })
        })
        
        nameInput.value = '';

    } else {
        alert('Fill the form!')
    }
}

newitem.addEventListener('click', (event)=> {
    newitem.text.style.textDecoration = 'line-through'
    event.stopImmediatePropagation();
})