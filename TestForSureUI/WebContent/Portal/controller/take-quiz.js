var quizController = function(){
	this.id = 0;
	this.quizInfo = {};
	this.questionsData = {};
	this.sessionId = 0;
	this.currentQues = 0;
	this.reportData = {};
	this.Init();
};
quizController.prototype.Init = function()
{
	//Read id from query string
	this.id = test2bsureController.getObj().QueryString(window.location.href, 'id');
	this.LoadData();
};
quizController.prototype.LoadData = function()
{
	var id = this.id;
	fetch('http://localhost:8083/test2bsure/quizdata?quizId='+id)
	  .then(response => response.json())
	  .then(data => this.SetState({ quizInfo: data.quizInfo, questionsData: data.questionsData, sessionId: data.sessionId }));
}
quizController.prototype.SetState = function(obj)
{
	for(var key in obj){
		this[key] = obj[key];
	}
	this.ManageQuizState();
};
quizController.prototype.ManageQuizState = function()
{
	if(typeof this.quizInfo.attemptInfo != 'undefined' && this.quizInfo.attemptInfo != null){
		this.currentQues = this.quizInfo.attemptInfo.lastQues;
	}
	this.PopulateQuizDetails();
	if(this.quizInfo.attemptInfo != null && this.quizInfo.attemptInfo.state == 2){
		//Means quiz already attempted, show the report
		this.currentQues = 0;
		this.DisplayReport();
	}
	else{
		//Display the question wherever left
		this.PopulateQuestion();
	}
	this.PopulateQuestionStatus();
};
quizController.prototype.PopulateQuizDetails = function()
{
	var html = "<h4 class='col-xs-6 col-sm-6 col-md-8 col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-1 col-lg-offset-1'>"+this.quizInfo.title+"</h4>"+
			   "<span>"+this.quizInfo.noOfQues+" Ques / "+(this.quizInfo.noOfQues * this.quizInfo.marksPerQues)+" Marks</span>";
	$('.quiz-header').html(html);
};
quizController.prototype.PopulateQuestion = function(solution)
{
	$('.quiz').find('.quiz-questions').find('.attempt-controls').empty();
	var question = this.questionsData[this.currentQues];
	var html = "<div class='question' question-id='"+question.id+"' question-index='"+this.currentQues+"'>"+
					"<div class='question-desc'>"+
						"<span class='question-number'>"+(this.currentQues+1)+"</span>";
	if(question.paragraph == "true"){
		html += "<span class='para-text'>"+question.paragraphText+"</span>";
	}
	html += "<span class='question-text'>"+question.questionText+"</span>"+
			"</div>"+
			"<div class='options'>";
	var correct = question.correctOption != null ? (JSON.parse(question.correctOption)).indexOf(true) : -1;
	var marked = question.markedOption != null ? (JSON.parse(question.markedOption)).indexOf(true) : -1;
	var redOption = -1;
	var greenOption = -1;
	if(correct != null && marked != null){
		if(correct == marked){
			greenOption = marked;
		}
		else{
			greenOption = correct;
			redOption = marked;
		}
	}
	$(question.options).find('option').each(function(key, value){
		var addClass = 'option';
		if(key == redOption){
			addClass = 'option incorrect';
		}
		else if(key == greenOption){
			addClass = 'option correct';
		}
		if(typeof solution != 'undefined' && solution == true){
			addClass += ' no-hover block-events';
		}
		html += "<div class='"+addClass+"' data-option='"+key+"'>"+
					"<span class='option-count'>"+(key+1)+"</span>"+
					"<span class='option-value'>"+$(value).html()+"</span>"+
					"<span class='answer-status'></span>"+
				"</div>";
	});
	html += "</div>";
	html += "<div class='solution' style='display:none;'>"+
			"</div>";
	$('.quiz').find('.quiz-questions').find('.questions').html(html);
	if(question.solution != null && question.solution.length > 0){
		var html = "<h5>Solution:</h5>"+
				   "<div>"+question.solution+"</div>";
		$('.quiz-questions').find('.questions').find('.question').find('.solution').show();
		$('.quiz-questions').find('.questions').find('.question').find('.solution').html(html);
	}
	$('.quiz').find('.quiz-questions').find('.questions').find('.option').unbind().bind('click', function(e){
		this.CheckAnswer(e.currentTarget);	
	}.bind(this));				
};
quizController.prototype.PopulateQuestionStatus = function()
{
	var html = "<h5>Question Status</h5>"+
			   "<div class='question-status'>";
	for(var question in this.questionsData){
		var status = 'notvisited';
		if(this.questionsData[question].correctOption != null){
			//means already attempted
			var correctOption = JSON.parse(this.questionsData[question].correctOption);
			var markedOption = JSON.parse(this.questionsData[question].markedOption);
			if(correctOption.indexOf(true) == markedOption.indexOf(true)){
				status = 'correct';
			}
			else{
				status = 'incorrect';
			}
		}
		html += "<span class='"+status+"' qindex='"+(question)+"' qId='"+(this.questionsData[question]).id+"'>"+(parseInt(question)+1)+"</span>";
	}
	html += "</div>";
	$('.quiz').find('.quiz-status').html(html);
};
quizController.prototype.CheckAnswer = function(node)
{
	var option = $(node).attr('data-option');
	var answer = '[';
	option = parseInt(option);
	for(var i=0;i<=option;i++){
		if(i == option){
			answer += 'true]';
		}
		else{
			answer += 'false,';
		}
	}
	//Check answer
	var sessionId = this.sessionId;
	var quesId = $(node).parents('.question').attr('question-id');
	var quesIndex = parseInt($(node).parents('.question').attr('question-index')) + 1;
	var submit = 0;
	if(this.currentQues == this.quizInfo.noOfQues-1){
		submit = 1;
	}
	var obj = this;
	var url = 'http://localhost:8083/test2bsure/checkanswer?quesid='+quesId+'&quesindex='+quesIndex+'&sessionid='+sessionId+'&answer='+answer+'&submit='+submit;
	fetch(url)
	.then(response => response.json())
	.then(function(data){
		if(data.solution.length > 0){
			var html = "<h5>Solution:</h5>"+
					   "<div>"+data.solution+"</div>";
			$('.quiz-questions').find('.questions').find('.question[question-id='+quesId+']').find('.solution').show();
			$('.quiz-questions').find('.questions').find('.question[question-id='+quesId+']').find('.solution').html(html);
		}
		var correctAnswer = JSON.parse(data.correctAnswer);
		if(correctAnswer.indexOf(true) == option){
			$(node).addClass('correct');
			$('.question-status').find('span[qid='+quesId+']').removeClass('notvisited').addClass('correct');
		}
		else{
			$(node).addClass('incorrect');
			$('.question-status').find('span[qid='+quesId+']').removeClass('notvisited').addClass('incorrect');
			var correctIndex = correctAnswer.indexOf(true);
			$('.question[question-id='+quesId+']').find('.option[data-option='+correctIndex+']').addClass('correct');
		}
		$(node).parents('.options').find('.option').addClass('block-events');
		$(node).parents('.options').find('.option').addClass('no-hover');
		obj.ManageControls();
	});
};
quizController.prototype.ManageControls = function(){
	var html = "";
	if(this.currentQues == this.quizInfo.noOfQues - 1){
		html += "<button type='button' class='btnSubmit button button-primary'>Submit</button>";
	}
	else{
		html += "<button type='button' class='btnNext button button-primary'>Next</button>"
	}
	$('.quiz').find('.quiz-questions').find('.attempt-controls').html(html);
	
	$('.btnNext').unbind().bind('click', function(){
		this.currentQues += 1;
		this.PopulateQuestion();
	}.bind(this));
	$('.btnSubmit').unbind().bind('click', function(){
		alert('Quiz submitted !!');
		this.LoadData();
	}.bind(this));
}
quizController.prototype.DisplayReport = function()
{
	$('.quiz').find('.quiz-questions').hide();
	$('.quiz').find('.quiz-report').show();
	//find the correct question count
	var correctCount = 0;
	for(var question in this.questionsData){
		if(this.questionsData[question]["correctOption"] != null && this.questionsData[question]["markedOption"] != null){
			var marked = (JSON.parse(this.questionsData[question]["markedOption"])).indexOf(true);
			var correct = (JSON.parse(this.questionsData[question]["correctOption"])).indexOf(true);
			if(marked == correct){
				correctCount++;
			}
		}
	}
	var html = "<div>Correct: <span>"+correctCount+" / "+this.quizInfo.noOfQues+"</span></div>";
	html += "<div>Incorrect: <span>"+(this.quizInfo.noOfQues - correctCount)+" / "+this.quizInfo.noOfQues+"</span></div>";
	html += "<div>Accuracy: <span>"+(correctCount/this.quizInfo.noOfQues)*100+"%</span></div>";
	html += "<div><button type='button' class='button button-primary btnReviewQuiz'>Review Quiz</button></div>";
	$('.quiz').find('.quiz-report').html(html);
	$('.quiz').find('.quiz-report').find('.btnReviewQuiz').unbind().bind('click', function(e){
		$('.quiz').find('.quiz-report').hide();
		$('.quiz').find('.quiz-questions').show();
		this.PopulateQuestion(true);
		this.HandleReviewControls();
	}.bind(this));
};
quizController.prototype.HandleReviewControls = function()
{
	console.log(this.currentQues);
	var html = "<button type='button' class='btnPrev button button-primary'>Previous</button>"+
			"<button type='button' class='btnNext button button-primary'>Next</button>"+
			"<button type='button' class='btnFinish button button-primary'>Finish</button>";
	$('.quiz').find('.quiz-questions').find('.attempt-solution-controls').html(html);
	$('.quiz').find('.quiz-questions').find('.attempt-solution-controls').find('.btnPrev').hide();
	$('.quiz').find('.quiz-questions').find('.attempt-solution-controls').find('.btnFinish').hide();
	$('.quiz').find('.quiz-questions').find('.attempt-solution-controls').find('.btnPrev').unbind().bind('click', function(){
		this.currentQues -= 1;
		this.PopulateQuestion();
		if(this.currentQues == 0){
			$('.quiz').find('.quiz-questions').find('.attempt-solution-controls').find('.btnPrev').hide();
			$('.quiz').find('.quiz-questions').find('.attempt-solution-controls').find('.btnNext').show();
			$('.quiz').find('.quiz-questions').find('.attempt-solution-controls').find('.btnFinish').hide();
		}
		else if(this.currentQues == this.quizInfo.noOfQues - 1){
			$('.quiz').find('.quiz-questions').find('.attempt-solution-controls').find('.btnPrev').show();
			$('.quiz').find('.quiz-questions').find('.attempt-solution-controls').find('.btnNext').hide();
			$('.quiz').find('.quiz-questions').find('.attempt-solution-controls').find('.btnFinish').show();
		}
		else{
			$('.quiz').find('.quiz-questions').find('.attempt-solution-controls').find('.btnPrev').show();
			$('.quiz').find('.quiz-questions').find('.attempt-solution-controls').find('.btnNext').show();
			$('.quiz').find('.quiz-questions').find('.attempt-solution-controls').find('.btnFinish').hide();
		}
	}.bind(this));
	$('.quiz').find('.quiz-questions').find('.attempt-solution-controls').find('.btnNext').unbind().bind('click', function(){
		this.currentQues += 1;
		this.PopulateQuestion();
		if(this.currentQues == 0){
			$('.quiz').find('.quiz-questions').find('.attempt-solution-controls').find('.btnPrev').hide();
			$('.quiz').find('.quiz-questions').find('.attempt-solution-controls').find('.btnNext').show();
			$('.quiz').find('.quiz-questions').find('.attempt-solution-controls').find('.btnFinish').hide();
		}
		else if(this.currentQues == this.quizInfo.noOfQues - 1){
			$('.quiz').find('.quiz-questions').find('.attempt-solution-controls').find('.btnPrev').show();
			$('.quiz').find('.quiz-questions').find('.attempt-solution-controls').find('.btnNext').hide();
			$('.quiz').find('.quiz-questions').find('.attempt-solution-controls').find('.btnFinish').show();
		}
		else{
			$('.quiz').find('.quiz-questions').find('.attempt-solution-controls').find('.btnPrev').show();
			$('.quiz').find('.quiz-questions').find('.attempt-solution-controls').find('.btnNext').show();
			$('.quiz').find('.quiz-questions').find('.attempt-solution-controls').find('.btnFinish').hide();
		}
	}.bind(this));
	$('.quiz').find('.quiz-questions').find('.attempt-solution-controls').find('.btnFinish').unbind().bind('click', function(){
		this.currentQues = 0;
		$('.quiz').find('.quiz-questions').hide();
		$('.quiz').find('.quiz-report').show();
	}.bind(this));
};