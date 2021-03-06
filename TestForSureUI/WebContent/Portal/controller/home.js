var homeController = function(){
	this.category = {};
	this.exam = {};
	this.testCount = {};
	this.quizCount = {};
};
homeController.prototype.Init = function(callback)
{
	this.LoadPage();
	this.LoadCategoriesExams();
	setTimeout(function(){
		if(localStorage.getItem("test2bsure_rp") == null){
			test2bsureController.getObj().ShowRewardInstructions();
			localStorage.setItem("test2bsure_rp", "true");
		}
	}, 2000);
	callback();
};
homeController.prototype.LoadPage = function()
{
	var html = '<div class="banner col-xs-12 col-sm-12 col-md-12 col-lg-12 container" style="z-index: -1;">'+
					'<div id="myCarousel" class="carousel slide" data-ride="carousel">'+
		    		    '<ol class="carousel-indicators">'+
					      '<li data-target="#myCarousel" data-slide-to="0" class="active"></li>'+
					      '<li data-target="#myCarousel" data-slide-to="1"></li>'+
					      '<li data-target="#myCarousel" data-slide-to="2"></li>'+
					      '<li data-target="#myCarousel" data-slide-to="3"></li>'+
					    '</ol>'+
					    '<div class="carousel-inner">'+
					    	'<div class="item active">'+
					    		'<img src="WebContent/Portal/images/final/carousal-1.png" alt="Test" style="width:100%;height:300px;">'+
					    	'</div>'+
					    	'<div class="item">'+
					    		'<img src="WebContent/Portal/images/final/carousal-2.png" alt="Test" style="width:100%;height:300px;">'+
					    	'</div>'+
					    	'<div class="item">'+
					    		'<img src="WebContent/Portal/images/final/carousal-3.png" alt="Test" style="width:100%;height:300px;">'+
					    	'</div>'+
					    	'<div class="item">'+
					    		'<img src="WebContent/Portal/images/final/carousal-4.png" alt="Test" style="width:100%;height:300px;">'+
					    	'</div>'+
					    '</div>'+
					    '<a class="left carousel-control" href="#myCarousel" data-slide="prev">'+
						    '<span class="glyphicon glyphicon-chevron-left"></span>'+
						    '<span class="sr-only">Previous</span>'+
						'</a>'+
					    '<a class="right carousel-control" href="#myCarousel" data-slide="next">'+
						    '<span class="glyphicon glyphicon-chevron-right"></span>'+
						    '<span class="sr-only">Next</span>'+
					    '</a>'+
					'</div>'+
			   '</div>'+
			   '<div class="category-exam-listing col-xs-12 col-sm-12 col-md-12 col-lg-12 container">'+
					'<div class="category-listing col-xs-12 col-sm-12 col-md-3 col-lg-3 hide">'+
					'</div>'+
					'<div class="exam-listing col-xs-12 col-sm-12 col-md-12 col-lg-12">'+
					'</div>'+
			   '</div>';
	$('body .common-content').html(html);
};
homeController.prototype.LoadCategoriesExams = function()
{
	fetch(remoteServer+'/test2bsure/home')
	  .then(response => response.json())
	  .then(data => this.SetState({ category: data.category, exam: data.exam, testCount: data.testCount, quizCount: data.quizCount }));
}
homeController.prototype.SetState = function(obj)
{
	for(var key in obj){
		this[key] = obj[key];
	}
	this.PopulateAllCategories();
	this.PopulateAllExams();
};
homeController.prototype.PopulateAllCategories = function()
{
	var html = "<ul class='col-xs-12 col-sm-12 col-md-12 col-lg-12'>";
	html += "<li class='active' category-id='0'>"+
				"<a>All</a>"+
			"</li>";
	for(var category in this.category){
		html += "<li category-id='"+this.category[category].id+"'>"+
					"<img src='"+this.category[category].imageUrl+"' alt='"+this.category[category].title+"'/>"+
					"<a>"+this.category[category].title+"</a>"+
				"</li>";
	}
	html += "</ul>";
	$('.category-listing').html(html);
	//$('.category-listing').find('ul li.active').css('pointer-events', 'none');
	$('.category-listing').find('ul li').unbind().bind("click", function(e){
		var id = $(e.currentTarget).attr('category-id');
		if(id == 0){
			this.PopulateAllExams();
		}
		else{
			this.PopulateAllExams(id);
		}
		$('.category-listing').find('ul li').removeClass('active');
		$(e.currentTarget).addClass('active');
	}.bind(this));
};
homeController.prototype.PopulateAllExams = function(id)
{
	var html = "";
	for(var category in this.category){
		if((typeof id == 'undefined') || (typeof id != 'undefined' && this.category[category].id == id)){
			html += "<div class='outer-category'>"+
						"<div category-id='"+this.category[category].id+"'>"+
						"<h4>"+this.category[category].title+"</h4>"+
						"<ul class='col-xs-12 col-sm-12 col-md-12 col-lg-12'>";
			for(var exam in this.exam){
				if(this.exam[exam].category == this.category[category].id){
					html += "<li class='col-xs-12 col-sm-12 col-md-3 col-lg-3' exam-id='"+this.exam[exam].id+"' data-action='"+this.exam[exam].urlKey+"'>";
					html += test2bsureController.getObj().ExamCard(this.exam[exam], this.testCount, this.quizCount);
					html +=	"</li>";
				}
			}
			html += "</li>"+
					"</div>"+
					"</div>";
		}
	}
	$('.exam-listing').html(html);
	$('.exam-listing').find('li[data-action]').unbind().bind('click', function(e){
		var action = $(e.currentTarget).attr('data-action');
		window.open(action, "_self");
	});
};
