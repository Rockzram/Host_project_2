let count=0
let total_att=10
let rand_num = Math.floor((Math.random()*100)+1)
let stat=1
console.log(rand_num)
const h1=document.getElementById('hint')
const a1=document.getElementById('attempt')
function check(){
    if (stat==1 && total_att>0){
    let guessed=document.forms['num']['val'].value
    count++
    if (guessed == rand_num){
        h1.innerHTML="Your guess was correct"
        a1.innerHTML="Your current attempt : " + count
        document.getElementById('check1').innerHTML = 'Reset'
        stat = 0
    }
    else if(guessed < rand_num){
        h1.innerHTML="The guessed number was low, try higher numbers"
        a1.innerHTML="Your current attempt : " + count
        total_att -= 1
    }
    else{
        h1.innerHTML="The guessed number was high, try lower numbers"
        a1.innerHTML="Your current attempt : " + count
        total_att -= 1
    }
}
    else{
        reset()
        stat=1
    }
}
function reset(){
    document.getElementById('check1').innerHTML='Check'
    rand_num = Math.floor((Math.random()*100)+1)
    count=0
    console.log(rand_num)
    a1.innerHTML="Your attempt is : 0"
    h1.innerHTML="Try and Find it"
    total_att=10
}