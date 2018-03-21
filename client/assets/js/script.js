let socket = io.connect('http://localhost:3000/')
socket.on('welcome', () => console.log('connected'))

// let inputMessage = document.querySelector('input#message');
// let sendButton = document.querySelector('button#message');

// sendButton.addEventListener('click', () => {
//     console.log('Sending message ...');
//     socket.emit('message', {
//         messageText: inputMessage.value
//     })
// })



let btnNext = document.querySelector('#nextButton');
btnNext.addEventListener('click', () => {
    socket.emit('action', {
        action: 'next'
    })
})

let btnPrev = document.querySelector('#prevButton');
btnPrev.addEventListener('click', () => {
    socket.emit('action', {
        action: 'prev'
    })
})

socket.on('actions', (payload) => {
    console.log(payload.action);
    if (payload.action === 'next') {
        $("#carouselExampleIndicators").carousel("next");
    } else if (payload.action === 'prev') {
        $("#carouselExampleIndicators").carousel("prev");
    }
})


