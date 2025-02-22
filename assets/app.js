

const spotForm = document.querySelector('.form');

const gbtn = document.querySelector('.g-btn');

gbtn.addEventListener('click', () => {
    let uid = uuidv4();

    spotForm.id.value = uid
})
