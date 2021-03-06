window.onload = function(){
    var TOTAL_NUM_OF_QUESTION = 19;
    var leftScore = 0;    /* score for left brain */
    var rightScore = 0;   /* schore for right brain */
    var numberOfChoice = 1;  /* progressed quiz num */
    var questionArray =  ["default","노래를 들을 때 가사와 멜로디 중 신경써서 듣는 것은?", /* 1 & 2 */
                         "미로 찾기를 수월하게 하는 편 인가?", /* 3 */
                         "꼼꼼한 스타일인가?", /* 4 */
                         "그림 그리는 것을 좋아한다.", /* 5 */
                         "수학을 좋아하고 계산적인 편이다.", /* 6 */
                         "일상속에서의 충전이란?", /* 7 */
                         "문제를 이해할 때 이론과 이미지 중 어떤 것이 도움이 되는가?", /* 8 */
                         "평소 긍정적으로 생각하는 편이다.", /* 9 */
                         "그림을 볼 때 세부 사항과 전체 그림 중 먼저 보는 것은?", /* 10 */
                         "종이접기 등 손으로 만들고 조립하는 놀이가 좋다.", /* 11 */
                         "자신의 의사를 전달할 때 말보다 글이 편하다.", /* 12 */
                         "DIY나 제품을 조립할 때 설명서를 먼저 본다.", /* 13 */
                         "맞춤법을 잘 지키는 편이다.", /* 14 */
                         "주어진 일을 할 때 처리하는 스타일은?", /* 15 */
                         "문제해결을 할 때 직관보다는 분석을 통해 해결한다.", /* 16 */
                         "주위 사람으로부터 눈치 없다는 소리를 듣는다.", /* 17 */
                         "일을 할 때 하나가 끝나야 다음 과제로 넘어간다.", /* 18 */
                         "집안이 더럽다고 느끼면 수시로 정리를 한다.", /* 19 */
                         "끝"];
                         
    var leftArray = ["default","가사","예","예","예",
                    "예","다양한 활동","이론","예","전체",
                    "예","예","예","예","계획적",
                    "직관","예","예","예","끝"];
                    
    var rightArray = ["default","멜로디", "아니요", "아니요","아니요",
                     "아니요","혼자만의 시간", "이미지","아니요","세부사항",
                     "아니요", "아니요", "아니요","아니요","닥치는데로",
                     "분석", "아니요", "아니요","아니요","끝"];
    /* the answer for left, the case left choice is left brain 1 otherwise 0 */                
    /* assign the weight for each question */
    var leftScoreArray =  [0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1]; 
    var rightScoreArray = [1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0];
            
    var questionDisplay = document.getElementById("question-sentence");  /* DOM element for question */
    var leftChoice = document.getElementById("choice-one"); /* DOM element for left */
    var rightChoice = document.getElementById("choice-two"); /* DOM element for right */
    var remainDisplay = document.getElementById("remain-choice"); /* DOM element for remain number of questions */
    var resultDisplay = document.getElementById("result"); /* DOM element for the final result */
     
    /**
     *  display the final result 
     *  @name displayResult
     *  @function
     */       
    function displayResult(){
        if(leftScore > rightScore)
            questionDisplay.innerHTML = "당신은 좌뇌형이네요~~" + "<br><br>다시 하시려면 여기를 클릭 해 주세요~"; 
        else
            questionDisplay.innerHTML = "당신은 우뇌형이네요~~" + "<br><br>다시 하시려면 여기를 클릭 해 주세요~";               
    }

    /**
     *  the case a user selects left answer 
     *  @name leftChoice onclick
     *  @function
     *  @param {Event} e onClick event from user selection
     */  
    leftChoice.onclick = function(e){
        e.preventDefault();
        if(numberOfChoice > TOTAL_NUM_OF_QUESTION)
            return;
                      
        if(1 == leftScoreArray[numberOfChoice-1])
            leftScore++;
        else
            rightScore++;
            
        console.log(leftScoreArray[numberOfChoice-1] + ":" +leftScore + " vs " + rightScore);
        
        questionDisplay.innerHTML = questionArray[numberOfChoice];
        rightChoice.innerHTML = rightArray[numberOfChoice];              
        leftChoice.innerHTML = leftArray[numberOfChoice];
        numberOfChoice++;
                
        if((TOTAL_NUM_OF_QUESTION + 1) === numberOfChoice){
            displayResult();
        }else{
            remainDisplay.innerHTML = numberOfChoice + "/" + TOTAL_NUM_OF_QUESTION;
        }     
    }
    
    /**  
     * the case a user selects right answer 
     * @name rightChoice onclick
     * @function
     */                
    rightChoice.onclick = function(){
        if(numberOfChoice > TOTAL_NUM_OF_QUESTION)
            return;
                    
        if(1 == leftScoreArray[numberOfChoice-1])
            rightScore++;
        else
            leftScore++;
            
        console.log(rightScoreArray[numberOfChoice-1] + ": "+ leftScore + " vs " + rightScore);
        
        questionDisplay.innerHTML = questionArray[numberOfChoice];
        leftChoice.innerHTML = leftArray[numberOfChoice];
        rightChoice.innerHTML = rightArray[numberOfChoice];
        numberOfChoice++;
                
        if((TOTAL_NUM_OF_QUESTION + 1) === numberOfChoice){
            displayResult();
        }else{
            remainDisplay.innerHTML = numberOfChoice +"/" + TOTAL_NUM_OF_QUESTION;   
        }                                                                                           
    }
   /**  
    * display the question sentence for user.
    * @name questionDisplay onclick
    * @function
    */    
    questionDisplay.onclick = function(){
        
        if(numberOfChoice > TOTAL_NUM_OF_QUESTION){
            /* reset global variable to retest */
            numberOfChoice = 1;
            leftScore = 0;
            rightScore = 0;
        
            questionDisplay.innerHTML = "처음 본 사람의 얼굴과 이름 중 잘 기억하는 것은?"
            leftChoice.innerHTML = "얼굴";
            rightChoice.innerHTML = "이름";
            remainDisplay.innerHTML = "1/" + TOTAL_NUM_OF_QUESTION;
        }
        
    }
            
}