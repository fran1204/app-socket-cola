
const btnCrear = document.querySelector('button');
const lblNuevoTicket = document.querySelector('#lblNuevoTicket');

const socket = io();



socket.on('connect', () => {
    btnCrear.disabled = false;
});

socket.on('disconnect', () => {
    btnCrear.disabled = true;
});

socket.on('ultimo-ticket', (ultimoTicket) => {
    lblNuevoTicket.innerHTML = 'Ticket ' + ultimoTicket;
})


btnCrear.addEventListener( 'click', () => {
    
    
    socket.emit( 'siguiente-ticket', null, ( ticket ) => {
        lblNuevoTicket.innerHTML = ticket;
    });

});