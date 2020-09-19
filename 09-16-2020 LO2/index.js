const dark = document.getElementById('dark')
const light = document.getElementById('light');
const rosa = document.getElementById('rosa');

const container = document.getElementById('container');

dark.addEventListener('click', ()=>{
  container.className = 'container dark'
  localStorage.setItem('tema', 'dark');
});

light.addEventListener('click', ()=>{
    container.className = 'container'
    localStorage.setItem('tema', 'light');
})

rosa.addEventListener('click', ()=>{
    container.className = 'container rosa';
    localStorage.setItem('tema', 'rosa');
});

const temaEnStorage = () =>{
    const temaGuardado = localStorage.getItem('tema');
    if (temaGuardado == 'dark') {
        container.classList.add('dark')
    }else if (temaGuardado == 'light') {
        container.className = 'container';
    }else if(temaGuardado == 'rosa'){
        container.classList.add('rosa');
    }
    
}

temaEnStorage();