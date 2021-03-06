var contentlistingDef = {
		"category":{
			"title": "Category",
			"searchByName": true,
			"addNewBtn": true,
			"totalCount": true,
			"pagination": true,
			"tableFields": [{
								"frontend": "Id",
								"backend": "id"
							},
							{
								"frontend": "Name",
								"backend": "name"
							},
							{
								"frontend": "Title",
								"backend": "title"
							},
							{
								"frontend": "Image",
								"backend": "imageUrl",
								"type": "image"
							},
							{
								"frontend": "Display Index",
								"backend": "displayIndex"
							},
							{
								"frontend": "Action",
								"backend": undefined
							}],
			"listActions": [{
								"type": "Edit",
								"class": "btnEdit"
							},
							{
								"type": "Delete",
								"class": "btnDelete"
							}],
			"backend": {
				"loadData": "category"
			}
		},
		"exam":{
			"title": "Exam",
			"searchByName": true,
			"searchByCategory": true,
			"addNewBtn": true,
			"totalCount": true,
			"pagination": true,
			"tableFields": [{
								"frontend": "Id",
								"backend": "id"
							},
							{
								"frontend": "Name",
								"backend": "name"
							},
							{
								"frontend": "Title",
								"backend": "title"
							},
							{
								"frontend": "Image",
								"backend": "imageUrl",
								"type": "image"
							},
							{
								"frontend": "Category",
								"backend": "category"
							},
							{
								"frontend": "Display Index",
								"backend": "displayIndex"
							},
							{
								"frontend": "Action",
								"backend": undefined
							}],
			"listActions": [{
								"type": "Edit",
								"class": "btnEdit"
							},
							{
								"type": "Delete",
								"class": "btnDelete"
							}],
			"backend": {
				"loadData": "exam"
			}
		},
		"questionbank":{
			"title": "Question",
			"searchByName": true,
			"searchByQuesCategory": true,
			"addNewBtn": true,
			"totalCount": true,
			"pagination": true,
			"tableFields": [{
								"frontend": "Id",
								"backend": "id"
							},
							{
								"frontend": "Question",
								"backend": "questionText"
							},
							{
								"frontend": "Action",
								"backend": undefined
							}],
			"listActions": [{
								"type": "Edit",
								"class": "btnEdit"
							}/*,
							{
								"type": "Delete",
								"class": "btnDelete"
							}*/],
			"backend": {
				"loadData": "question"
			}
		},
		"test":{
			"title": "Test",
			"searchByName": true,
			"addNewBtn": true,
			"totalCount": true,
			"pagination": true,
			"tableFields": [{
								"frontend": "Id",
								"backend": "id"
							},
							{
								"frontend": "Name",
								"backend": "name"
							},
							{
								"frontend": "Title",
								"backend": "title"
							},
							{
								"frontend": "Questions",
								"backend": "totalQues"
							},
							{
								"frontend": "Marks",
								"backend": "totalMarks"
							},
							{
								"frontend": "Time",
								"backend": "totalTime"
							},
							{
								"frontend": "Display Index",
								"backend": "displayIndex"
							},
							{
								"frontend": "Action",
								"backend": undefined
							}],
			"listActions": [{
								"type": "Edit",
								"class": "btnEdit"
							}/*,
							{
								"type": "Delete",
								"class": "btnDelete"
							}*/,
							{
								"type": "Publish",
								"class": "testStatus",
								"action": true
							}],
			"backend": {
				"loadData": "test"
			}
		},
		"quizsubject":{
			"title": "Quiz Subject",
			"searchByName": true,
			"addNewBtn": true,
			"totalCount": true,
			"pagination": true,
			"tableFields": [{
								"frontend": "Id",
								"backend": "id"
							},
							{
								"frontend": "Name",
								"backend": "name"
							},
							{
								"frontend": "Display Index",
								"backend": "displayIndex"
							},
							{
								"frontend": "Action",
								"backend": undefined
							}],
			"listActions": [{
								"type": "Edit",
								"class": "btnEdit"
							},
							{
								"type": "Delete",
								"class": "btnDelete"
							}],
			"backend": {
				"loadData": "quizsubject"
			}
		},
		"quiz":{
			"title": "Quiz",
			"searchByName": true,
			"addNewBtn": true,
			"totalCount": true,
			"pagination": true,
			"tableFields": [{
								"frontend": "Id",
								"backend": "id"
							},
							{
								"frontend": "Name",
								"backend": "name"
							},
							{
								"frontend": "Title",
								"backend": "title"
							},
							{
								"frontend": "Questions",
								"backend": "noOfQues"
							},
							{
								"frontend": "Display Index",
								"backend": "displayIndex"
							},
							{
								"frontend": "Action",
								"backend": undefined
							}],
			"listActions": [{
								"type": "Edit",
								"class": "btnEdit"
							}/*,
							{
								"type": "Delete",
								"class": "btnDelete"
							}*/,
							{
								"type": "Publish",
								"class": "quizStatus",
								"action": true
							}],
			"backend": {
				"loadData": "quiz"
			}
		},
		"usertracking":{
			"title": "USer",
			"searchByName": true,
			"addNewBtn": false,
			"totalCount": true,
			"pagination": true,
			"tableFields": [{ 
								"frontend": "Id",
								"backend": "id" 
							},
							{
								"frontend": "Name",
								"backend": "name"
							},
							{
								"frontend": "E-mail",
								"backend": "email"
							},
							{
								"frontend": "Created On",
								"backend": "lastUpdatedOn",
								"type": "timestamp"
							},
							/*{
								"frontend": "Make Admin",
								"backend": "isAdmin",
								"type": "checkbox"
							},*/
							{
								"frontend": "Action",
								"backend": undefined
							}],
			"listActions": [{
								"type": "View",
								"class": "btnView"
							}],
			"backend": {
				"loadData": "user"
			}
		},
		"filter":{
			"title": "Filter",
			"searchByName": true,
			"addNewBtn": true,
			"totalCount": true,
			"pagination": true,
			"tableFields": [{
								"frontend": "Id",
								"backend": "id"
							},
							{
								"frontend": "Title",
								"backend": "title"
							},
							{
								"frontend": "Action",
								"backend": undefined
							}],
			"listActions": [{
								"type": "Edit",
								"class": "btnEdit"
							},
							{
								"type": "Delete",
								"class": "btnDelete"
							}],
			"backend": {
				"loadData": "filter"
			}
		},
		"asknanswer":{
			"title": "Category",
			"searchByName": true,
			"addNewBtn": true,
			"totalCount": true,
			"pagination": true,
			"tableFields": [{
								"frontend": "Id",
								"backend": "id"
							},
							{
								"frontend": "Name",
								"backend": "name"
							},
							{
								"frontend": "Title",
								"backend": "title"
							},
							{
								"frontend": "Image",
								"backend": "imageUrl"
							},
							{
								"frontend": "Action",
								"backend": undefined
							}],
			"listActions": [{
								"type": "Edit",
								"class": "btnEdit"
							},
							{
								"type": "Delete",
								"class": "btnDelete"
							}],
			"backend": {
				"loadData": "category"
			}
		},
		"video":{
			"title": "Video",
			"searchByName": true,
			"addNewBtn": true,
			"totalCount": true,
			"pagination": true,
			"tableFields": [{
								"frontend": "Id",
								"backend": "id"
							},
							{
								"frontend": "Name",
								"backend": "name"
							},
							{
								"frontend": "Display Index",
								"backend": "displayIndex"
							},
							{
								"frontend": "Action",
								"backend": undefined
							}],
			"listActions": [{
								"type": "Edit",
								"class": "btnEdit"
							},
							{
								"type": "Delete",
								"class": "btnDelete"
							}],
			"backend": {
				"loadData": "video"
			}
		},
		"notes":{
			"title": "Notes",
			"searchByName": true,
			"addNewBtn": true,
			"totalCount": true,
			"pagination": true,
			"tableFields": [{
								"frontend": "Id",
								"backend": "id"
							},
							{
								"frontend": "Name",
								"backend": "name"
							},
							{
								"frontend": "Display Index",
								"backend": "displayIndex"
							},
							{
								"frontend": "Action",
								"backend": undefined
							}],
			"listActions": [{
								"type": "Edit",
								"class": "btnEdit"
							},
							{
								"type": "Delete",
								"class": "btnDelete"
							}],
			"backend": {
				"loadData": "notes"
			}
		},
		"chapter":{
			"title": "Chapter",
			"searchByName": true,
			"addNewBtn": true,
			"totalCount": true,
			"pagination": true,
			"tableFields": [{
								"frontend": "Id",
								"backend": "id"
							},
							{
								"frontend": "Name",
								"backend": "name"
							},
							{
								"frontend": "Display Index",
								"backend": "displayIndex"
							},
							{
								"frontend": "Action",
								"backend": undefined
							}],
			"listActions": [{
								"type": "Edit",
								"class": "btnEdit"
							},
							{
								"type": "Delete",
								"class": "btnDelete"
							}],
			"backend": {
				"loadData": "chapter"
			}
		},
		"course":{
			"title": "Course",
			"searchByName": true,
			"addNewBtn": true,
			"totalCount": true,
			"pagination": true,
			"tableFields": [{
								"frontend": "Id",
								"backend": "id"
							},
							{
								"frontend": "Name",
								"backend": "name"
							},
							{
								"frontend": "Display Index",
								"backend": "displayIndex"
							},
							{
								"frontend": "Action",
								"backend": undefined
							}],
			"listActions": [{
								"type": "Edit",
								"class": "btnEdit"
							},
							{
								"type": "Delete",
								"class": "btnDelete"
							}],
			"backend": {
				"loadData": "course"
			}
		}
};

var contentlistingController = function(content){
	this.currentPage = 1;
	this.contentType = content;
	this.content = contentlistingDef[this.contentType];
	this.fromSearch = false;
	this.Init();
};
contentlistingController.prototype.Init = function()
{
	showLoader();
	$('.menu-page-content').empty();
	this.CreateSearchBar();
	this.CreateCounter();
	this.CreateExistingItems();
	this.LoadDataFromServer(function(len){
		this.HandlePagination(len);
		removeLoader();
	}.bind(this));
	this.BindEvents();
};
contentlistingController.prototype.CreateSearchBar = function()
{
	var searchBar = $('<div class="menu-bar col-xs-12 col-sm-12 col-md-12 col-lg-12"></div>');
	searchBar.appendTo($('.menu-page-content'));
	
	//Name/title Search
	if(this.content.searchByName){
		var nameSearch = '<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9 searchbar">'+
						 	'<span>Search By &nbsp; </span> <input type="text" placeholder="Name/Title" class="txtSearchByName">'+
						 	'<button class="btn btn-primary btnSearchByName">Search</button>'+
						 '</div>';
		$(nameSearch).appendTo(searchBar);
	}

	//Add new button
	if(this.content.addNewBtn){
		var addNewBtn = '<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 addNew">'+
							'<button class="btn btn-primary btnAddNew">'+
								'<span class="glyphicon glyphicon-plus"></span>&nbsp;Add '+ this.content.title + ''+
							'</button>'+
						'</div>';
		$(addNewBtn).appendTo(searchBar);
	}
	
	var searchBar2 = $('<div class="menu-bar-2 col-xs-12 col-sm-12 col-md-12 col-lg-12"></div>');
	searchBar2.appendTo($('.menu-page-content'));
	//Category Search
	if(typeof this.content.searchByCategory != 'undefined' && this.content.searchByCategory == true){
		var categorySearch = '<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 searchbar">'+
						 		'<span>Search by Category </span>'+
						 		'<select id="ddSearchCategory"><option value="0">All</option></select>'+
						 '</div>';
		$(categorySearch).appendTo(searchBar2);
		getCategories(function(data){
			if(data.length > 0){
				var html = "";
				for(var cat in data){
					html += "<option value='"+data[cat]['id']+"'>"+data[cat]['title']+"</option>";
				}
				$('#ddSearchCategory').append(html);
			}
		});
	}
	//Ques Category & Subcategory Search
	if(typeof this.content.searchByQuesCategory != 'undefined' && this.content.searchByQuesCategory == true){
		var categorySearch = '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 searchbar">'+
						 		'<span>Search by Question Category </span>'+
						 		'<select id="ddSearchQuesCategory"><option value="0">All</option></select>'+
						 		'<span style="margin-left: 40px;">Search by Question Sub Category </span>'+
						 		'<select id="ddSearchQuesSubCategory"><option value="0">All</option></select>'+
						 	'</div>';
		$(categorySearch).appendTo(searchBar2);
		getQuestionCategories(function(categories, subcategories){
			if(categories.length > 0){
				var html = "";
				for(var cat in categories){
					html += "<option value='"+categories[cat]['id']+"'>"+categories[cat]['name']+"</option>";
				}
				$('#ddSearchQuesCategory').append(html);
			}
		}.bind(this));
	}
};
contentlistingController.prototype.CreateCounter = function()
{
	var counterBar = $('<div class="counter col-xs-12 col-sm-12 col-md-12 col-lg-12"></div>');
	counterBar.appendTo($('.menu-page-content'));
	
	//Show total count
	if(this.content.totalCount){
		var totalCount = '<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 itemCount">'+
							'Total ' + this.content.title + ' - <span></span>'+
						 '</div>';
		$(totalCount).appendTo(counterBar);
	}

	//Pagination
	if(this.content.pagination){
		var pagination = '<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 paginationDiv">'+
						 '</div>';
		$(pagination).appendTo(counterBar);
	}
};

contentlistingController.prototype.CreateExistingItems = function()
{
	var html = "<div class='existing-items'>"+
					"<table>"+
						"<thead>"+
							"<tr class='table-header'>";
	for(var field in this.content.tableFields){
		html += "<th>"+this.content.tableFields[field]["frontend"]+"</th>";
	}
	html += "</tr>"+
			"</thead>"+
			"<tbody>"+
							
			"</tbody>"+
			"</table>"+
			"</div>";
	html += "<div class='no-data hide'></div>";
	$(html).appendTo($('.menu-page-content'));
};
//Consider Search and pagination here
contentlistingController.prototype.LoadDataFromServer = function(callback)
{
	this.start = $('.paginationDiv').find('.pagination').find('select').find(":selected").attr('data-start');
	if(typeof this.start == 'undefined' || this.fromSearch){
		this.start = 0;
		this.currentPage = 1;
		this.fromSearch = false;
	}
	var search = "";
	var category = 0;
	var subcategory = 0;
	if(typeof this.content.searchByName != 'undefined' && this.content.searchByName == true){
		search = $('.txtSearchByName').val();
	}
	if(typeof this.content.searchByCategory != 'undefined' && this.content.searchByCategory == true){
		category = $('#ddSearchCategory').val();
	}
	if(typeof this.content.searchByQuesCategory != 'undefined' && this.content.searchByQuesCategory == true){
		category = $('#ddSearchQuesCategory').val();
		subcategory = $('#ddSearchQuesSubCategory').val();
	}
	
	var url = remoteServer + "/test2bsure/"+this.content.backend.loadData+"?count="+perPage;
	if(search.length > 0){
		url += "&search="+search;
	}
	if(category != 0){
		url += "&category="+category;
	}
	if(subcategory != 0){
		url += "&subcategory="+subcategory;
	}
	url += "&start="+this.start;
	console.log(url)
	$.ajax({
		url: url,
		type: 'GET',
		success: function(response){
			if(response.result.status == true){
				if(response.data != null && ((Array.isArray(response.data) && response.data.length > 0) || (Object.keys(response.data).length > 0))){
					var items = response.data;
					var html = "";
					for(var item in items){
						html += "<tr data-id = '" + items[item]["id"] + "'>";
						for(var field in this.content.tableFields){
							if(typeof this.content.tableFields[field]["backend"] != 'undefined'){
								if(typeof this.content.tableFields[field]["type"] != 'undefined'){
									if(this.content.tableFields[field]["type"] == 'checkbox'){
										var chkValue = "";
										if(items[item][this.content.tableFields[field]["backend"]] == 1){
											chkValue = "checked = checked";
										}
										html += "<td class='td"+this.contentType+this.content.tableFields[field]["backend"]+"'>"+
													"<input type='checkbox' " + chkValue + "/>"+
												"</td>";
									}
									else if(this.content.tableFields[field]["type"] == 'image'){
										html += "<td class='td"+this.contentType+this.content.tableFields[field]["backend"]+"'>"+
													"<img src = '"+items[item][this.content.tableFields[field]["backend"]]+"' alt = 'Not Available'>"+
												"</td>";
									}
									else if(this.content.tableFields[field]["type"] == 'timestamp'){
										var timeStamp = items[item][this.content.tableFields[field]["backend"]];
										var dt = new Date(timeStamp);
										var datetime = dt.getFullYear()+"-"+(dt.getMonth()+1)+"-"+dt.getDate()+" "+dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds()
										html += "<td class='td"+this.contentType+this.content.tableFields[field]["backend"]+"'>"+
													datetime+
												"</td>";
									}
								}
								else{
									html += "<td class='td"+this.contentType+this.content.tableFields[field]["backend"]+"'>"+
												items[item][this.content.tableFields[field]["backend"]]+
											"</td>";
								}
							}
						}
						if(typeof this.content.listActions != 'undefined'){
							html += "<td>";
							for(var action in this.content.listActions){
								var dataAction = "";
								var text = this.content.listActions[action]["type"];
								if(text == 'Edit' || text == 'Delete'){
									text = "<img src='../../Images/"+text+".svg' alt = '"+text+"'/>";
								}
								if(typeof this.content.listActions[action]["action"] != 'undefined' &&
										this.content.listActions[action]["action"] == true){
									dataAction = "data-action="+items[item]["publish"];
									if(items[item]["publish"] == 1){
										text = "Unpublish";
									}
								}
								html += "<button class='btn btn-default "+this.content.listActions[action]["class"]+"' " + dataAction + ">"+
											text+
										"</button>";
							}
							html += "</td>";
						}
						html += "</tr>";
					}
					$('.existing-items').removeClass('hide').addClass('show');
					$('.no-data').removeClass('show').addClass('hide');
					$('.existing-items').find('table').find('tbody').html(html);
				}
			}
			else{
				$('.existing-items').removeClass('show').addClass('hide');
				$('.no-data').removeClass('hide').addClass('show');
				$('.no-data').html('<h3>'+response.result.message+' !!</h3>');
			}
			if(typeof callback == 'function'){
				callback(response.result.length);
			}
			this.BindEvents();
		}.bind(this),
		error: function(e){
			console.log(e);
			if(typeof callback == 'function'){
				callback(0);
			}
		}
	});
};
contentlistingController.prototype.HandlePagination = function(len){
	$('.counter').find('.itemCount').find('span').text(len);
	
	if(len > 0){
		$('.paginationDiv').html(pagination(len));
		$('.paginationDiv').find('.pagination').find('select').val(this.currentPage);
		$('.paginationDiv').find('.pagination').find('select').unbind().bind('change', function(e){
			this.currentPage = $(e.currentTarget).val();
			showLoader();
			this.LoadDataFromServer(function(len){
				this.HandlePagination(len);
				removeLoader();
			}.bind(this));
		}.bind(this));
	}
};
contentlistingController.prototype.BindEvents = function()
{
	//Search
	if($('.btnSearchByName').length > 0){
		$('.btnSearchByName').unbind().bind('click', function(){
			this.fromSearch = true;
			this.LoadDataFromServer(function(len){
				this.HandlePagination(len);
				removeLoader();
			}.bind(this));
		}.bind(this))
	}
	//Search By Category
	if($('#ddSearchCategory').length > 0){
		$('#ddSearchCategory').unbind().bind('change', function(){
			this.fromSearch = true;
			this.LoadDataFromServer(function(len){
				this.HandlePagination(len);
				removeLoader();
			}.bind(this));
		}.bind(this))
	}
	
	//Search by Question Category & Question Subcategory
	if($('#ddSearchQuesCategory').length > 0){
		$('#ddSearchQuesCategory').unbind().bind('change', function(e){
			this.fromSearch = true;
			var categoryId = $(e.currentTarget).val();
			//Populate Subcategories
			if(categoryId == 0){
				$('#ddSearchQuesSubCategory').html("<option value='0'>All</option>");
				this.LoadDataFromServer(function(len){
					this.HandlePagination(len);
					removeLoader();
				}.bind(this));
			}
			else{
				getQuestionCategories(function(cat, subcat){
					var html = "<option value='0'>All</option>";
					for(var cat in subcat){
						if(subcat[cat]["categoryId"] == categoryId){
							html += "<option value='"+subcat[cat]['id']+"'>"+subcat[cat]['name']+"</option>";
						}
					}
					$('#ddSearchQuesSubCategory').html(html);
					this.LoadDataFromServer(function(len){
						this.HandlePagination(len);
						removeLoader();
					}.bind(this));
				}.bind(this));
			}
		}.bind(this))
	}
	
	if($('#ddSearchQuesSubCategory').length > 0){
		$('#ddSearchQuesSubCategory').unbind().bind('change', function(){
			this.fromSearch = true;
			this.LoadDataFromServer(function(len){
				this.HandlePagination(len);
				removeLoader();
			}.bind(this));
		}.bind(this))
	}
	//Create New Item
	if($('.btnAddNew').length > 0){
		$('.btnAddNew').unbind().bind('click', function(){
			LoadJS(this.contentType, function(){
				var obj = eval("new " + this.contentType + "Controller()");
				obj.id = -1;
				obj.AddEdit();
			}.bind(this));
		}.bind(this));
	}
	
	//Edit an Item
	if($('.btnEdit').length > 0){
		$('.btnEdit').unbind().bind('click', function(e){
			var id = $(e.currentTarget).parents('tr[data-id]').attr('data-id');
			LoadJS(this.contentType, function(){
				var obj = eval("new " + this.contentType + "Controller()");
				obj.id = id;
				obj.AddEdit();
			}.bind(this));
		}.bind(this));
	}
	
	//Delete an Item
	if($('.btnDelete').length > 0){
		$('.btnDelete').unbind().bind('click', function(e){
			var id = $(e.currentTarget).parents('tr[data-id]').attr('data-id');
			LoadJS(this.contentType, function(){
				var obj = eval("new " + this.contentType + "Controller()");
				obj.id = id;
				obj.Delete();
			}.bind(this));
		}.bind(this));
	}
	//View an Item
	if($('.btnView').length > 0){
		$('.btnView').unbind().bind('click', function(e){
			var id = $(e.currentTarget).parents('tr[data-id]').attr('data-id');
			LoadJS(this.contentType, function(){
				var obj = eval("new " + this.contentType + "Controller()");
				obj.id = id;
				obj.View();
			}.bind(this));
		}.bind(this));
	}
	
	//Test Status Change
	if($('.testStatus').length > 0){
		$('.testStatus').unbind().bind('click', function(e){
			var id = $(e.currentTarget).parents('tr[data-id]').attr('data-id');
			LoadJS(this.contentType, function(){
				var obj = eval("new " + this.contentType + "Controller()");
				obj.id = id;
				obj.HandleTestStatus();
			}.bind(this));
		}.bind(this));
	}
	
	//Quiz Status Change
	if($('.quizStatus').length > 0){
		$('.quizStatus').unbind().bind('click', function(e){
			var id = $(e.currentTarget).parents('tr[data-id]').attr('data-id');
			LoadJS(this.contentType, function(){
				var obj = eval("new " + this.contentType + "Controller()");
				obj.id = id;
				obj.HandleQuizStatus();
			}.bind(this));
		}.bind(this));
	}
	
	//Make Admin Change
	if($('.tdusertrackingisAdmin').length > 0){
		$('.tdusertrackingisAdmin').find('input').unbind().bind('click', function(e){
			var id = $(e.currentTarget).parents('tr[data-id]').attr('data-id');
			LoadJS(this.contentType, function(){
				var obj = eval("new " + this.contentType + "Controller()");
				obj.id = id;
				obj.HandleAdmin();
			}.bind(this));
		}.bind(this));
	}
};