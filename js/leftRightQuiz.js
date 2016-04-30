window.onload = function(){
    var leftScore = 0;    /* score for left brain */
    var rightScore = 0;   /* schore for right brain */
    var numberOfChoice = 1;  /* progressed quiz num */
    var problemArray =  ["default","노래를 들을 때 가사와 멜로디 중신경써서 듣는 것은?", /* 1 & 2 */
                         "쥐가 좋아요!", /* 3 */
                         "소가 좋아요!", /* 4 */
                         "스컹크가 좋아요!", /* 5 */
                         "코알라가 좋아요!", /* 6 */
                         "개가 좋아요!", /* 7 */
                         "쥐가 좋아요!", /* 8 */
                         "소가 좋아요!", /* 9 */
                         "스컹크가 좋아요!", /* 10 */
                         "코알라가 좋아요!", /* 11 */
                         "개가 좋아요!", /* 12 */
                         "쥐가 좋아요!", /* 13 */
                         "소가 좋아요!", /* 14 */
                         "스컹크가 좋아요!", /* 15 */
                         "코알라가 좋아요!", /* 16 */
                         "개가 좋아요!", /* 17 */
                         "쥐가 좋아요!", /* 18 */
                         "소가 좋아요!", /* 19 */
                         "스컹크가 좋아요!", /* 20 */
                         "끝"];
                         
    var leftArray = ["default","가사","쥐가 좋아요!","소가 좋아요!","스컹크가 좋아요!",
                    "코알라가 좋아요!","개가 좋아요!","쥐가 좋아요!","소가 좋아요!","스컹크가 좋아요!",
                    "코알라가 좋아요!","개가 좋아요!","쥐가 좋아요!","소가 좋아요!","스컹크가 좋아요!",
                    "코알라가 좋아요!","개가 좋아요!","쥐가 좋아요!","소가 좋아요!","스컹크가 좋아요!",
                    "끝"];
                    
    var rightArray = ["default","멜로디", "햄스터가 좋아요!", "양이 좋아요!","낙타가 좋아요!",
                     "뱀이 좋아요!","고양이가 좋아요!", "햄스터가 좋아요!", "양이 좋아요!","낙타가 좋아요!",
                     "뱀이 좋아요!","고양이가 좋아요!", "햄스터가 좋아요!", "양이 좋아요!","낙타가 좋아요!",
                     "뱀이 좋아요!","고양이가 좋아요!", "햄스터가 좋아요!", "양이 좋아요!","낙타가 좋아요!",
                     "끝"];
    var leftScoreArray = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    var rightScoreArray = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
            
    var problemDisplay = document.getElementById("problemSentence");
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
        
        problemDisplay.innerHTML = problemArray[numberOfChoice];
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
        
        problemDisplay.innerHTML = problemArray[numberOfChoice];
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