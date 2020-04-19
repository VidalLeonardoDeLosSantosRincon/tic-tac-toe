(function(){
    let items = Array.from(document.getElementsByClassName("items"));
    let btnClear = document.getElementById("btn-clear");

    /*/////method o set and validate storage score//////*/
    (function storageScore(){
        if(localStorage.getItem("x-winner")===null 
            && localStorage.getItem("o-winner")===null){ 

            localStorage.setItem("x-winner",0);
            localStorage.setItem("o-winner",0);

        }else if(localStorage.getItem("x-winner")===null 
            && localStorage.getItem("o-winner")!==null){

            localStorage.setItem("x-winner",0);

        }else if(localStorage.getItem("x-winner")!==null 
            && localStorage.getItem("o-winner")===null){

            localStorage.setItem("o-winner",0);

        }else if(localStorage.getItem("x-winner")!==null 
        && localStorage.getItem("o-winner")!==null){
            let XScore = document.getElementById("x-score");
            let OScore = document.getElementById("o-score");

            XScore.innerHTML+=` ${localStorage.getItem('x-winner')}`;
            OScore.innerHTML+=` ${localStorage.getItem('o-winner')}`;

        }
    })();
    /*///////////////////////////////////////////////*/


    /*///////method to clear all fields////*/
    function clearFields(clean){
        if(clean){
            items.forEach((item)=>{
                localStorage.removeItem("lastItem");
                item.innerHTML="";
                location.reload();
            });
        }  
    }
    /*////////////////////////////////////// */

    /*////////////method to show winner///////////////*/
    function showWinner(winner){
        if(winner.trim()!==""){
             if(winner.trim()==="X"){
                localStorage.setItem("x-winner",parseInt(localStorage.getItem("x-winner"))+1);
                console.log(localStorage.getItem("x-winner"));
             }else if(winner.trim()==="O"){
                localStorage.setItem("o-winner",parseInt(localStorage.getItem("o-winner"))+1);
                console.log(localStorage.getItem("o-winner"));
             }
             setTimeout(()=>{
                 alert(`El ganador es: ${winner}`);
                 winner="";
                 clearFields(true);
                 location.reload();
             },500);
         }
    }
    /*///////////////////////////////////////////*/

    /*///////////method to validate winner/////////*/
    function validateWinner(){
        let winner ="";
        if(
            (items[0].innerHTML.trim()==="x" 
            && items[1].innerHTML.trim()==="x"
            && items[2].innerHTML.trim()==="x")
            || (items[3].innerHTML.trim()==="x" 
            && items[4].innerHTML.trim()==="x"
            && items[5].innerHTML.trim()==="x")
            || (items[6].innerHTML.trim()==="x" 
            && items[7].innerHTML.trim()==="x"
            && items[8].innerHTML.trim()==="x")
        ){
            winner = "X";
        }else if(
            (items[0].innerHTML.trim()==="x" 
            && items[3].innerHTML.trim()==="x"
            && items[6].innerHTML.trim()==="x")
            || (items[1].innerHTML.trim()==="x" 
            && items[4].innerHTML.trim()==="x"
            && items[7].innerHTML.trim()==="x")
            || (items[2].innerHTML.trim()==="x" 
            && items[5].innerHTML.trim()==="x"
            && items[8].innerHTML.trim()==="x")
        ){
            winner = "X";
        }else if(
            (items[0].innerHTML.trim()==="x" 
            && items[4].innerHTML.trim()==="x"
            && items[8].innerHTML.trim()==="x")
            || (items[2].innerHTML.trim()==="x" 
            && items[4].innerHTML.trim()==="x"
            && items[6].innerHTML.trim()==="x")
        ){
            winner = "X";
        }else{
                
            if(
                (items[0].innerHTML.trim()==="o" 
                && items[1].innerHTML.trim()==="o"
                && items[2].innerHTML.trim()==="o")
                || (items[3].innerHTML.trim()==="o" 
                && items[4].innerHTML.trim()==="o"
                && items[5].innerHTML.trim()==="o")
                || (items[6].innerHTML.trim()==="o" 
                && items[7].innerHTML.trim()==="o"
                && items[8].innerHTML.trim()==="o")
            
            ){
                winner = "O";
            }else if(
                (items[0].innerHTML.trim()==="o" 
                && items[3].innerHTML.trim()==="o"
                && items[6].innerHTML.trim()==="o")
                || (items[1].innerHTML.trim()==="o" 
                && items[4].innerHTML.trim()==="o"
                && items[7].innerHTML.trim()==="o")
                || (items[2].innerHTML.trim()==="o" 
                && items[5].innerHTML.trim()==="o"
                && items[8].innerHTML.trim()==="o")
            ){
                winner = "O";
            }else if(
                (items[0].innerHTML.trim()==="o" 
                && items[4].innerHTML.trim()==="o"
                && items[8].innerHTML.trim()==="o")
                || (items[2].innerHTML.trim()==="o" 
                && items[4].innerHTML.trim()==="o"
                && items[6].innerHTML.trim()==="o")
            ){
                winner = "O";
            }

        }
        showWinner(winner);
    }
    /*//////////////////////////////////////////*/

    /*//////////iterating  items///////////////////*/
    items.forEach((item)=>{
        /*///////adding event to item//////////*/
        item.addEventListener("click",(e)=>{
            let itemID = e.target.id;
            let currentItem = document.getElementById(itemID);
            let lastItem = localStorage.getItem("lastItem");
            //console.log(lastItem);
            if(currentItem.innerHTML.trim()===""){
                if(lastItem===null){
                    localStorage.setItem("lastItem","x");
                    item.style.color="lightpink";
                    currentItem.innerHTML="x";
                }else if(lastItem==="x"){
                    localStorage.setItem("lastItem","o");
                    item.style.color="lightgreen";
                    currentItem.innerHTML="o";
                }else if(lastItem==="o"){
                    localStorage.setItem("lastItem","x");
                    item.style.color="lightpink";
                    currentItem.innerHTML="x";
                } 
            }
            validateWinner();
        });
        /*///////////////////////////////////////*/
    });
    /*///////////////////////////////////////////////*/
    
    /*/////////////button clear event////////////*/
    btnClear.addEventListener("click",()=>{
        let clean = confirm("¿Quieres reiniciar el juego?");
        if(clean){
            localStorage.setItem("x-winner",0);
            localStorage.setItem("o-winner",0);
            clearFields(clean);
        }
    });
    /*///////////////////////////////////////////*/
})();


