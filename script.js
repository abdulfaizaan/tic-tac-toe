const btn = document.getElementById('reset');
const boxes = document.querySelectorAll('.box');
const msg = document.getElementById('msg');
let turnX = true;

btn.addEventListener('click', () => {
    boxes.forEach(box => {
        box.innerText = '';
        box.disabled = false;
    });
    msg.innerText = '';
    turnX = true;
});

const winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach(box => {
    box.addEventListener('click', () => {
        if(turnX && box.innerText === '') {
            box.innerText = 'X';
            turnX = false;
        }
         else if(!turnX && box.innerText === '') {
            box.innerText = 'O';
            turnX = true;
        }   
        checkWin();
    })
});

const showWinner = (winner) => {
    msg.innerText = `${winner} has won the game!`;
    boxes.forEach(box => box.disabled = true);
}

const draw = () => {
    msg.innerText =" It's a Draw!";
    boxes.forEach(box => box.disabled = true);
}



const checkWin = () =>{
    for(let pattern of winningPatterns) {
        let pos1 = boxes[pattern[0]];
        let pos2 = boxes[pattern[1]];
        let pos3 = boxes[pattern[2 ]];

        if(pos1.innerText !== "" && pos2.innerText !== "" && pos3.innerText !== "") {
            if(pos1.innerText === pos2.innerText && pos2.innerText === pos3.innerText) {
                showWinner(pos1.innerText);
        }
    }
        if([...boxes].every(box => box.innerText !== "")) {
            draw();
    }
}
};