window.onload = function(){
    var leftScore = 0;    /* score for left brain */
    var rightScore = 0;   /* schore for right brain */
    var numberOfChoice = 1;  /* progressed quiz num */
    var questionArray =  ["default","노래를 들을 때 가사와 멜로디 중신경써서 듣는 것은?", /* 1 & 2 */
                         "미로 찾기를 수월하게 하는 편 인가요?", /* 3 */
                         "꼼꼼한 스타일인가요?", /* 4 */
                         "그림 그리는 것을 좋아하나요?", /* 5 */
                         "수학을 좋아하고 계산적인 편인가요?", /* 6 */
                         "평소 감정을 조절하는게 어렵나요?", /* 7 */
                         "일상속에서의 휴식이란?", /* 8 */
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
                         
    var leftArray = ["default","가사","예","예","예",
                    "예","예","다양한 활동","소가 좋아요!","스컹크가 좋아요!",
                    "코알라가 좋아요!","개가 좋아요!","쥐가 좋아요!","소가 좋아요!","스컹크가 좋아요!",
                    "코알라가 좋아요!","개가 좋아요!","쥐가 좋아요!","소가 좋아요!","스컹크가 좋아요!",
                    "끝"];
                    
    var rightArray = ["default","멜로디", "아니요", "아니요","아니요",
                     "아니요","아니요", "혼자만의 시간", "양이 좋아요!","낙타가 좋아요!",
                     "뱀이 좋아요!","고양이가 좋아요!", "햄스터가 좋아요!", "양이 좋아요!","낙타가 좋아요!",
                     "뱀이 좋아요!","고양이가 좋아요!", "햄스터가 좋아요!", "양이 좋아요!","낙타가 좋아요!",
                     "끝"];
                     
    /* assign the weight for each question */
    var leftScoreArray = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]; 
    var rightScoreArray = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
            
    var questionDisplay = document.getElementById("questionSentence");  /* DOM element for question */
    var leftChoice = document.getElementById("choiceone"); /* DOM element for left */
    var rightChoice = document.getElementById("choicetwo"); /* DOM element for right */
    var remainDisplay = document.getElementById("remainChoice"); /* DOM element for remain number of questions */
    var resultDisplay = document.getElementById("result"); /* DOM element for the final result */
     
    /* display the final result */       
    function displayResult(){
        if(leftScore > rightScore)
            resultDisplay.innerHTML = "당신은 좌뇌형이네요~~"; 
        else
            resultDisplay.innerHTML = "당신은 우뇌형이네요~~";               
    }
          
    /* the case a user selects left answer */  
    leftChoice.onclick = function(){
        if(numberOfChoice > 20)
            return;
                      
        leftScore += leftScoreArray[numberOfChoice-1];
        
        questionDisplay.innerHTML = questionArray[numberOfChoice];
        rightChoice.value = rightArray[numberOfChoice];              
        leftChoice.value = leftArray[numberOfChoice];
        numberOfChoice++;
                
        if(21 === numberOfChoice){
            displayResult();
        }else{
            remainDisplay.innerHTML = numberOfChoice + "/20";
        }     
    }
    
    /* the case a user selects right answer */                
    rightChoice.onclick = function(){
        if(numberOfChoice > 20)
            return;
                    
        rightScore += rightScoreArray[numberOfChoice-1];
        
        questionDisplay.innerHTML = questionArray[numberOfChoice];
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