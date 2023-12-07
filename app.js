let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');
let turnO = true; //playerX, playerO
let msg = document.querySelector('#winner p');
let winner = document.querySelector('#winner');
let newGame = document.querySelector('#newGame');

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box)=>{
    box.addEventListener('click', function(){
        if(turnO){
            box.innerText = 'X';
            box.style.color = '#31d810';
            box.style.textShadow = `${1}px ${1}px ${1}px #31d810`;

            turnO = false;
        }
        else{
            box.innerText = 'O'
            box.style.color = '#a939eb';
            box.style.textShadow = `${1}px ${1}px ${1}px #a939eb`;
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
      
    });
});
const disableBoxes = ()=>{
   boxes.forEach((box)=>{
    box.disabled = true;
   });
};
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = '';
        msg.innerText = '';
    }
};
const showWinner = (winner)=>{
    msg.innerText = `Congrat's ${winner} you are Winner`;
    disableBoxes();
}


const checkWinner = ()=>{
    for(let pattern of winPatterns){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
                
            }
           
        }
    }
};

const resetGame =()=>{
    turnO = true;
    enableBoxes();
}


newGame.addEventListener('click', resetGame);
reset.addEventListener('click', resetGame);











