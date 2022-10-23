const botao = document.querySelector('#scroll')

botao.addEventListener('click', () => {
    window.scroll({top: window.innerHeight, behavior: "smooth"})
    
})

let to =new Date('nov 19 2022 07:00:00');
            function update(){
                let from =new Date();
                diff=to-from,
                days=setTwoDigit(Math.floor(diff/1000/60/60/24)),
                hours=setTwoDigit(Math.floor(diff/1000/60/60)%24),
                min=setTwoDigit(Math.floor(diff/1000/60)%60),
                sec=setTwoDigit(Math.floor(diff/1000)%60),

                document.querySelector('#days').innerText=days
                document.querySelector('#hours').innerText=hours
                document.querySelector('#min').innerText=min
                document.querySelector('#sec').innerText=sec
                
            }

            let interval=setInterval(update,1000)

            function setTwoDigit(argument) {
                return argument>9?argument:'0'+argument;
            }
