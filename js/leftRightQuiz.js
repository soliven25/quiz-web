window.onload = function(){
    var leftScore = 0;    /* score for left brain */
    var rightScore = 0;   /* schore for right brain */
    var numberOfChoice = 1;  /* progressed quiz num */
    var leftArray = ["default","개가 좋아요!","쥐가 좋아요!","소가 좋아요!","스컹크가 좋아요!",
                    "코알라가 좋아요!","개가 좋아요!","쥐가 좋아요!","소가 좋아요!","스컹크가 좋아요!",
                    "코알라가 좋아요!","개가 좋아요!","쥐가 좋아요!","소가 좋아요!","스컹크가 좋아요!",
                    "코알라가 좋아요!","개가 좋아요!","쥐가 좋아요!","소가 좋아요!","스컹크가 좋아요!",
                    "끝"];
    var rightArray = ["default","고양이가 좋아요!", "햄스터가 좋아요!", "양이 좋아요!","낙타가 좋아요!",
                     "뱀이 좋아요!","고양이가 좋아요!", "햄스터가 좋아요!", "양이 좋아요!","낙타가 좋아요!",
                     "뱀이 좋아요!","고양이가 좋아요!", "햄스터가 좋아요!", "양이 좋아요!","낙타가 좋아요!",
                     "뱀이 좋아요!","고양이가 좋아요!", "햄스터가 좋아요!", "양이 좋아요!","낙타가 좋아요!",
                     "끝"];
    var leftScoreArray = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    var rightScoreArray = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
            
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
                      
        leftScore += leftScoreArray[numberOfChoice-1];
        rightChoice.value = rightArray[numberOfChoice];              
        leftChoice.value = leftArray[numberOfChoice];
        numberOfChoice++;
                
        if(21 === numberOfChoice){
            displayResult();
        }else{
            remainDisplay.innerHTML = numberOfChoice + "/20";
        }     
    }
                      
    rightChoice.onclick = function(){
        if(numberOfChoice > 20)
            return;
                    
        rightScore += rightScoreArray[numberOfChoice-1];
        leftChoice.value = leftArray[numberOfChoice];
        rightChoice.value = rightArray[numberOfChoice];
        numberOfChoice++;
                
        if(21 === numberOfChoice){
            displayResult();
        }else{
            remainDisplay.innerHTML = numberOfChoice +"/20";   
        }                                                                                           
    }
            
}