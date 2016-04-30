window.onload = function(){
    var leftScore = 0;    /* score for left brain */
    var rightScore = 0;   /* schore for right brain */
    var numberOfChoice = 1;  /* progressed quiz num */
    var leftArray = ["default","개가 좋아요!","쥐가 좋아요!","소가 좋아요!"];
    var rightArray = ["default","고양이가 좋아요!", "햄스터가 좋아요!", "양이 좋아요!"];
            
    var leftChoice = document.getElementById("choiceone"); /* DOM element for left */
    var rightChoice = document.getElementById("choicetwo"); /* DOM element for right */
    var remainDisplay = document.getElementById("remainChoice");
    var resultDisplay = document.getElementById("result");
            
    function displayResult(){
        if(leftScore > rightScore)
            resultDisplay.innerHTML = "당신은 좌뇌형이네요~~"; 
        else
            resultDisplay.innerHTML = "당신은 우뇌형이네요~~";               
    }
            
    leftChoice.onclick = function(){
        if(numberOfChoice > 20)
            return;
                  
        numberOfChoice++;
        leftScore++;
        rightChoice.value = rightArray[numberOfChoice];              
        leftChoice.value = leftArray[numberOfChoice];
                
        if(21 === numberOfChoice){
            displayResult();
        }else{
            remainDisplay.innerHTML = numberOfChoice + "/20";
        }     
    }
                      
    rightChoice.onclick = function(){
        if(numberOfChoice > 20)
            return;
                    
        numberOfChoice++;
        rightScore++;
        leftChoice.value = leftArray[numberOfChoice];
        rightChoice.value = rightArray[numberOfChoice];
                
        if(21 === numberOfChoice){
            displayResult();
        }else{
            remainDisplay.innerHTML = numberOfChoice +"/20";   
        }                                                                                           
    }
            
}