const icon=document.getElementById('icon')
const RegClose=document.getElementById('icon-reg')
const btnlog=document.querySelector('.btn');
const regon=document.getElementById('logoff');
const logon=document.getElementById('logon');
const log=document.getElementById('log');
const reg=document.getElementById('reg');


icon.addEventListener('click', ()=>{
    log.classList.add('active');
    reg.classList.add('active');
})

btnlog.addEventListener('click', ()=>{
    log.classList.remove('active');
    reg.classList.add('active');
})

regon.addEventListener('click', ()=>{
    log.classList.add('active');
    reg.classList.remove('active');
})

logon.addEventListener('click', ()=>{
    log.classList.remove('active');
    reg.classList.add('active');
})

RegClose.addEventListener('click', ()=>{
    log.classList.add('active');
    reg.classList.add('active');
})

