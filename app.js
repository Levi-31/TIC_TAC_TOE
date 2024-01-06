let boxes= document.querySelectorAll('.box');
let reset=document.querySelector('#reset-btn');
let newGamebtn = document.querySelector('#new-game');
let msgContainer= document.querySelector('.msg-container');
let msgPara = document.querySelector('.msg');






// turn === true then X gets printed
let turn =0;

let count=0;

const winningPattern = [
                        [0,1,2] , [0,3,6] ,[0,4,8],
                        [1,4,7] ,[2,5,8],[2,4,6] ,
                        [3,4,5] ,[6,7,8]

                    ];
                    

  const resetGame= ()=>{
       turn =0;
       enableBoxes();
       msgContainer.classList.add("hide")
                    }


 boxes.forEach((box)=>{

      box.addEventListener('click' ,()=>{
      count++;
      if(turn){ // player X is 
        box.style.color = "#CEE397";
        box.innerText = 'X';
        turn =!turn;
      }else{
        box.innerText='O';
       turn =!turn;
      }

      box.disabled=true;
  
     checkWinner(count);
      })
 });
 

 const disableBoxes =()=>{
    for( let box of boxes){
        box.disabled=true; 
    }
 }

 const enableBoxes =()=>{
    for( let box of boxes){
        box.disabled=false; 
        box.innerText="";
    }
 }

const showWinner =(winner)=>{
    msg.innerHTML = `Congratulation the winner is ${winner}` ;
    msgContainer.classList.remove("hide");
     
    disableBoxes();

};



  

const checkWinner= (count)=>{
   
    for(let pattern of winningPattern){

            let pos1Val= boxes[pattern[0]].innerText;
            let pos2Val=  boxes[pattern[1]].innerText;
            let pos3Val=  boxes[pattern[2]].innerText;

            if((pos1Val && pos2Val && pos3Val) && (pos1Val==pos2Val && pos2Val==pos3Val)){
                showWinner(pos1Val);
            }
            if(count==9){
                msg.innerHTML="No Winner ,Please restart the game ";
                msgContainer.classList.remove('hide');
            }
    }
 };


 newGamebtn.addEventListener('click', resetGame);

 reset.addEventListener('click' ,resetGame)


