window.onload = function(){
    var TOTAL_NUM_OF_QUESTION = 19;
    var leftScore = 0;    /* score for left brain */
    var rightScore = 0;   /* schore for right brain */
    var numberOfChoice = 1;  /* progressed quiz num */
    var questionArray =  ["default","노래를 들을 때 가사와 멜로디 중신경써서 듣는 것은?", /* 1 & 2 */
                         "미로 찾기를 수월하게 하는 편 인가요?", /* 3 */
                         "꼼꼼한 스타일인가요?", /* 4 */
                         "그림 그리는 것을 좋아하나요?", /* 5 */
                         "수학을 좋아하고 계산적인 편인가요?", /* 6 */
                         "일상속에서의 휴식이란?", /* 7 */
                         "문제를 이해할 때 이론과 이미지 중 어떤 것이 도움이 되는가요?", /* 8 */
                         "집중력이 30분 이상 가지 않는다.", /* 9 */
                         "그림을 볼 때 세부 사항과 전체 그림 중 먼저 보는 것은?", /* 10 */
                         "종이접기 등 손으로 만들고 조립하는 놀이가 좋다.", /* 11 */
                         "감기에 자주 걸리는 편인가?", /* 12 */
                         "DIY나 제품을 조립할 때 설명서를 먼저 본다.", /* 13 */
                         "맞춤법을 잘 지키는 편이다.", /* 14 */
                         "주어진 일을 할 때 처리하는 스타일은?", /* 15 */
                         "나는 문제해결을 할 때 직관보다는 분석을 통해 해결한다.", /* 16 */
                         "주위 사람으로 부터 눈치 없다는 소리를 듣는다.", /* 17 */
                         "일을 할 때 하나가 끝나야 다음 과제로 넘어간다.", /* 18 */
                         "집안이 더럽다고 느끼면 수시로 정리를 한다.", /* 19 */
                         "끝"];
                         
    var leftArray = ["default","가사","예","예","예",
                    "예","예","다양한 활동","이론","예",
                    "그림","예","예","예","예",
                    "계획적","예","예","예","끝"];
                    
    var rightArray = ["default","멜로디", "아니요", "아니요","아니요",
                     "아니요","아니요", "혼자만의 시간", "이미지","아니요",
                     "세부사항","아니요", "아니요", "아니요","아니요",
                     "닥치는데로","아니요", "아니요", "아니요","끝"];
    /* the answer for left, the case left choice is left brain 1 otherwise 0 */                
    /* assign the weight for each question */
    var leftScoreArray =  [0,1,0,    1,   1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]; 
    var rightScoreArray = [1,0,1,    0,   1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
            
    var questionDisplay = document.getElementById("questionSentence");  /* DOM element for question */
    var leftChoice = document.getElementById("choiceone"); /* DOM element for left */
    var rightChoice = document.getElementById("choicetwo"); /* DOM element for right */
    var remainDisplay = document.getElementById("remainChoice"); /* DOM element for remain number of questions */
    var resultDisplay = document.getElementById("result"); /* DOM element for the final result */
     
    /* display the final result */       
    function displayResult(){
        if(leftScore > rightScore)
            questionDisplay.innerHTML = "당신은 좌뇌형이네요~~"; 
        else
            questionDisplay.innerHTML = "당신은 우뇌형이네요~~";               
    }
          
    /* the case a user selects left answer */  
    leftChoice.onclick = function(e){
        e.preventDefault();
        if(numberOfChoice > TOTAL_NUM_OF_QUESTION)
            return;
                      
        leftScore += leftScoreArray[numberOfChoice-1];
        
        questionDisplay.innerHTML = questionArray[numberOfChoice];
        rightChoice.innerHTML = rightArray[numberOfChoice];              
        leftChoice.innerHTML = leftArray[numberOfChoice];
        numberOfChoice++;
                
        if((TOTAL_NUM_OF_QUESTION + 1) === numberOfChoice){
            displayResult();
        }else{
            remainDisplay.innerHTML = numberOfChoice + "/19";
        }     
    }
    
    /* the case a user selects right answer */                
    rightChoice.onclick = function(){
        if(numberOfChoice > TOTAL_NUM_OF_QUESTION)
            return;
                    
        rightScore += rightScoreArray[numberOfChoice-1];
        
        questionDisplay.innerHTML = questionArray[numberOfChoice];
        leftChoice.innerHTML = leftArray[numberOfChoice];
        rightChoice.innerHTML = rightArray[numberOfChoice];
        numberOfChoice++;
                
        if((TOTAL_NUM_OF_QUESTION + 1) === numberOfChoice){
            displayResult();
        }else{
            remainDisplay.innerHTML = numberOfChoice +"/20";   
        }                                                                                           
    }
            
}