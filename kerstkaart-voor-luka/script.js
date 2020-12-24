const cracker = document.getElementById("crackerWrapper");
const leftCracker = document.getElementById("leftCracker");
const rightCracker = document.getElementById("rightCracker");
const message = document.getElementById("message");
const jokeWrap = document.getElementById("jokeWrap");
const joke = document.getElementById("joke");
const punchline = document.getElementById("punchline");

let counter = 0
let jokes =[{Q: "Welk ijs kan niet smelten?" ,A: "Radijs!"}, {Q: "Why are mummies such big fans of Christmas?" ,A: "Because they enjoy wrapping."}, {Q: "Het is groen, rond en heeft een gewei." ,A: "Een herwt."}, {Q: "Het is groen en komt heel snel naar beneden." ,A: "Een slawine."}, {Q: "Er gaat een vis naar de dokter. 'Ik zie het al', zegt die meteen" ,A: "Uit de kom!"}, {Q: "What do you call an old snowman?" ,A: "Water."}, {Q: "What do snowmen have for breakfast?" ,A: "Snowflakes!"}, {Q: "Waarom kon Einstein geen muur bouwen?" ,A: "Hij had maar ein stein!"}, {Q: "Wat doet een pizza als hij corona heeft?" ,A: "Hij gaat naar Dr. Oetker."}, {Q: "Why don’t penguins fly?" ,A: "Because they’re not tall enough to be pilots!"}, 
           {Q: "Wat is de originele kleur van gips?", A: "Gebroken wit!"},]
let num = Math.floor(Math.random() * jokes.length)

cracker.addEventListener('click', () => {
  if(counter < 13){
    counter++
  } else{
    joke.textContent = jokes[num].Q
    punchline.textContent = jokes[num].A
    leftCracker.style.animation = "left 1s forwards"
    rightCracker.style.animation = "right 1s forwards"
    message.style.animation = "title 1s forwards"
    jokeWrap.style.animation = "joke 2s forwards"
    cracker.style.transform = "scaleX(1)"
  }
})

function Loop(){      
  window.requestAnimationFrame(Loop);
  if(counter > 0 && counter < 13){
    cracker.style.transform = `scaleX(${1 + (counter / 100)})`
    counter -= 0.05
  }
}
Loop()