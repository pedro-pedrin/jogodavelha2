let squere ={
a1:'',a2:'',a3:'',
b1:'',b2:'',b3:'',
c1:'',c2:'',c3:''
}

let player = ''
let warnig = ''
let playing = false

reset()

document.querySelector('.reset').addEventListener('click',reset)

document.querySelectorAll(".item").forEach(item =>{
item.addEventListener('click',itemClick)

})
document.querySelector('.reset').addEventListener('touchstart',reset)

document.querySelectorAll(".item").forEach(item =>{
item.addEventListener('touchstart',itemClick)

})
function  itemClick(event){
   let item = event.target.
    getAttribute('data-item')
    if (squere[item]==''  && playing == true){
squere[item]=player
renderSquere()
togglePlayer()
    }

}

function reset(){
     warnig = '';
  let random = Math.floor(Math.random()*2)
    player = (random === 0)? 'X' : 'O';

for(let i in squere){
    squere[i] = ''
}
playing = true
renderSquere()
renderInfor()
}

function renderSquere(){
    for(let i in squere){
let item = document.querySelector(`div[data-item=${i}]`)
item.innerHTML = squere[i];
    }

checkGame()

}

function renderInfor (){
document.querySelector('.vez').innerHTML = player
document.querySelector('.resultado').innerHTML = warnig 
}

function togglePlayer(){
player = (player == 'X')? 'O': 'X'
renderInfor()

}
function checkGame(){

if (checkWinnerFor('X')){
warnig = 'O "X"venceu!!!'
playing = false

} else if (checkWinnerFor('O')){
warnig = 'O "O" venceu!!!'
playing = false

}else if (isFull()){
    warnig = 'Deu Empate ###'
}
}

function checkWinnerFor(player){
let pos=[
   "a1,a2,a3",
   "b1,b2,b3",
   "c1,c2,c3",

   "a1,b1,c1",
   "a2,b2,c2",
   "a3,b3,c3",

   "a1,b2,c3",
   "a3,b2,c1",
]

for(let i in pos){
   let pArray = pos[i].split(",")
   let venceu = pArray.every(Option=> squere[Option]===player)
   if(venceu){
return true
   }

}
return false
}






function isFull(){
for(let i in squere){
    if(squere[i]==''){
        return false
    }
    }
    return true
    }



