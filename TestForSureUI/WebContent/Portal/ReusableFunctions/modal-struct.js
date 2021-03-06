function loginModal(){
	var html = '<div class="modal fade" id="loginModal" role="dialog" data-backdrop="static" data-keyboard="false">'+
				'<div class="modal-dialog loginModal" role="document">'+
					'<div class="modal-content">'+
						'<div class="modal-header">'+
							'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
							'<h4 class="modal-title text-center">Login</h4>'+
						'</div>'+
						'<div class="modal-body">'+
							'<div id="errorOuter" class="hide">'+
								'<div class="text-center alert alert-danger" id="errorMessage"></div>'+
							'</div>'+
							'<form id="loginForm" class="form-horizontal" role="form">'+
								'<div class="form-group">'+
									'<label class="control-label col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xs-offset-0 col-sm-offset-0 col-md-offset-1 col-lg-offset-1">Email</label>'+
									'<div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">'+
										'<input type="email" class="form-control" id="txtEmail" name="txtEmailName" required="required" placeholder="abc@example.com"/>'+
									'</div>'+
								'</div>'+
								'<div class="form-group">'+
									'<label class="control-label col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xs-offset-0 col-sm-offset-0 col-md-offset-1 col-lg-offset-1">Password</label>'+
									'<div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">'+
									'<input type="password"  class="form-control" id="txtPassword" name="txtPasswordName" required="required" placeholder="Password"/>'+
									'</div>'+
								'</div>'+
								'<div class="form-group">'+
									'<div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xs-offset-0 col-sm-offset-0 col-md-offset-4 col-lg-offset-4">'+
										'<button type="button" id="btnDoLogin" class="button button-primary">Log in</button>'+
									'</div>'+
								'</div>'+
							'</form>'+
							'<div class="text-center col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xs-offset-0 col-sm-offset-0 col-md-offset-1 col-lg-offset-1 ">'+
								'<a id="linkRegister">New User? Register here</a>'+
							'</div>'+
						'</div>'+
						'<div class="modal-footer">'+
							'<div>'+
								'Forgot password? <a id="linkForgot">Click here</a></br>'+
								//'Didn\'t receive verification link? <a id="linkVerification">Click here</a>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>';
	return html;
}

function registerModal(){
	var html = '<div class="modal fade" id="registerModal" role="dialog" data-backdrop="static" data-keyboard="false">'+
				'<div class="modal-dialog registerModal" role="document">'+
					'<div class="modal-content">'+
						'<div class="modal-header">'+
							'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
							'<h4 class="modal-title text-center">Register</h4>'+
						'</div>'+
						'<div class="modal-body">'+
							'<div id="errorOuterReg" class="hide">'+
								'<div class="text-center alert alert-danger" id="errorMessageReg"></div>'+
							'</div>'+
							'<form id="registerForm" class="form-horizontal" role="form">'+
									'<div class="form-group">'+
									'<label class="control-label col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xs-offset-0 col-sm-offset-0 col-md-offset-1 col-lg-offset-1">Name</label>'+
									'<div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">'+
										'<input type="text" maxlength="40" id="txtNameReg" name="txtNameReg" class="form-control" placeholder="Your name"/>'+
									'</div>'+
								'</div>'+
								'<div class="form-group">'+
									'<label class="control-label col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xs-offset-0 col-sm-offset-0 col-md-offset-1 col-lg-offset-1">Email</label>'+
									'<div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">'+
										'<input type="email" id="txtEmailReg" name="txtEmailNameReg" class="form-control" placeholder="abc@example.com"/>'+
									'</div>'+
								'</div>'+
								'<div class="form-group">'+
									'<label class="control-label col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xs-offset-0 col-sm-offset-0 col-md-offset-1 col-lg-offset-1">Mobile Number</label>'+
									'<div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">'+
										'<input type="text"  maxlength="10" id="txtContactReg" name="txtContactNameReg" class="form-control" placeholder="Mobile number"/>'+
									'</div>'+
								'</div>'+
								'<div class="form-group">'+
									'<label class="control-label col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xs-offset-0 col-sm-offset-0 col-md-offset-1 col-lg-offset-1">Password</label>'+
									'<div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">'+
										'<input type="password" id="txtPasswordReg" name="txtPasswordNameReg" class="form-control" placeholder="Password"/>'+
									'</div>'+
								'</div>'+
								'<div class="form-group">'+
									'<label class="control-label col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xs-offset-0 col-sm-offset-0 col-md-offset-1 col-lg-offset-1">Confirm Password</label>'+
									'<div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">'+
										'<input type="password" id="txtConfirmPassword" name="txtConfirmNameReg" class="form-control" placeholder="Confirm Password"/>'+
									'</div>'+
								'</div>'+
								'<div class="form-group">'+
									'<div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xs-offset-0 col-sm-offset-0 col-md-offset-4 col-lg-offset-4">'+
										'<button type="button" id="btnDoRegister" class="button button-primary">Register</button>'+
									'</div>'+
								'</div>'+
							'</form>'+
							'<div class="text-center">'+
								'<a id="linkToLogin">Already Registered? Login here</a>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>';
	return html;
}

function forgotPassModal(){
	var html = '<div class="modal fade" id="forgotPassModal" role="dialog" data-backdrop="static" data-keyboard="false">'+
	'<div class="modal-dialog forgotPasswordModal" role="document">'+
	'<div class="modal-content">'+
			'<div class="modal-header">'+
				'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
				'<h4 class="modal-title text-center">Forgot Password?</h4>'+
			'</div>'+
			'<div class="modal-body">'+
				'<div id="errorOuterForgot" class="hide">'+
					'<div class="text-center alert alert-danger" id="errorMessageForgot"></div>'+
				'</div>'+
				'<div id="successOuter" class="hide">'+
					'<div class=" alert alert-success" id="successMessage"></div>'+
				'</div>'+
				'<form id="forgotPassForm" class="form-horizontal" role="form">'+
					'<div class="form-group">'+
						'<label class="control-label col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xs-offset-0 col-sm-offset-0 col-xs-offset-1 col-sm-offset-1">Enter your registered e-mail</label>'+
						'<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">'+
							'<input type="text" class="form-control" id="txtForgotEmail" name="txtForgotEmailName" required="required" placeholder="abc@example.com"/>'+
							'</div>'+
					'</div>'+
					'<div class="form-group">'+
						'<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-5 col-lg-offset-5">'+
							'<button type="button" id="btnForgotSend" class="button button-primary">Submit</button>'+
						'</div>'+
					'</div>'+
				'</form>'+
			'</div>'+
			'<div class="modal-footer hide footer-forgot">'+
				'<div>'+
					'<button type="button" id="btnClose" class="btn btn-default" data-dismiss="modal">Ok</button>'+
				'</div>'+
			'</div>'+
		'</div>'+
	'</div>'+
'</div>';
	return html;
}

function verificationModal(){
	var html = '<div class="modal fade" id="verificationModal" role="dialog" data-backdrop="static" data-keyboard="false">'+
	'<div class="modal-dialog forgotPasswordModal" role="document">'+
  	'<div class="modal-content">'+
			'<div class="modal-header">'+
				'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
				'<h4 class="modal-title text-center">E-mail verification link</h4>'+
			'</div>'+
			'<div class="modal-body">'+
				'<div id="errorOuterVerification" class="hide">'+
					'<div class="text-center alert alert-danger" id="errorMessageVerification"></div>'+
				'</div>'+
				'<form id="verForm" class="form-horizontal" role="form">'+
					'<div class="form-group">'+
						'<label class="control-label col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xs-offset-0 col-sm-offset-0 col-xs-offset-1 col-sm-offset-1">Enter your e-mail(used for registration)</label>'+
						'<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">'+
							'<input type="text" class="form-control" id="txtVerEmail" name="txtVerEmailName" required="required" placeholder="abc@example.com"/>'+
						'</div>'+
					'</div>'+
					'<div class="form-group">'+
						'<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-5 col-lg-offset-5">'+
							'<button type="button" id="btnVerSend" class="btn btn-success btn-block">Submit</button>'+
						'</div>'+
					'</div>'+
				'</form>'+
			'</div>'+
			'<div class="modal-footer hide footer-ver">'+
				'<div>'+
					'<button type="button" id="btnClose" class="btn btn-default" data-dismiss="modal">Ok</button>'+
				'</div>'+
			'</div>'+
		'</div>'+
	'</div>'+
'</div>';
	return html;
}

function changePasswordModal(){
	var html = '<div class="modal fade" id="changePasswordModal" role="dialog" data-backdrop="static" data-keyboard="false">'+
				'<div class="modal-dialog changePasswordModal" role="document">'+
					'<div class="modal-content">'+
						'<div class="modal-header">'+
							'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
							'<h4 class="modal-title text-center">Change Password</h4>'+
						'</div>'+
						'<div class="modal-body">'+
							'<div id="errorOuter">'+
								'<div class="text-center alert alert-danger" id="errorMessage"></div>'+
							'</div>'+
							'<form id="passwordForm" class="form-horizontal" role="form">'+
								'<div class="form-group">'+
									'<label class="control-label col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xs-offset-0 col-sm-offset-0 col-md-offset-1 col-lg-offset-1">Password</label>'+
									'<div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">'+
										'<input type="password" class="form-control" id="txtPass" name="txtPassName" required="required" placeholder="Password"/>'+
									'</div>'+
								'</div>'+
								'<div class="form-group">'+
									'<label class="control-label col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xs-offset-0 col-sm-offset-0 col-md-offset-1 col-lg-offset-1">Confirm Password</label>'+
									'<div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">'+
									'<input type="password"  class="form-control" id="txtConfirmPass" name="txtConfirmPassName" required="required" placeholder="Confirm Password"/>'+
									'</div>'+
								'</div>'+
								'<div class="form-group">'+
									'<div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xs-offset-0 col-sm-offset-0 col-md-offset-4 col-lg-offset-4">'+
										'<button type="button" id="btnChangePass" class="button button-primary">Change Password</button>'+
									'</div>'+
								'</div>'+
							'</form>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>';
	return html;
}

function editProfileModal(){
	var html = '<div class="modal fade" id="editProfileModal" role="dialog" data-backdrop="static" data-keyboard="false">'+
				'<div class="modal-dialog editProfileModal" role="document">'+
					'<div class="modal-content">'+
						'<div class="modal-header">'+
							'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
							'<h4 class="modal-title text-center">Edit Profile</h4>'+
						'</div>'+
						'<div class="modal-body">'+
							'<div id="errorOuter">'+
								'<div class="text-center alert alert-danger" id="errorMessage"></div>'+
							'</div>'+
							'<form id="profileForm" class="form-horizontal" role="form">'+
								'<div class="form-group">'+
									'<label class="control-label col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xs-offset-0 col-sm-offset-0 col-md-offset-1 col-lg-offset-1">Name</label>'+
									'<div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">'+
										'<input type="text" class="form-control" id="txtName" name="txtName" required="required" placeholder="Your Name"/>'+
									'</div>'+
								'</div>'+
								'<div class="form-group">'+
									'<label class="control-label col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xs-offset-0 col-sm-offset-0 col-md-offset-1 col-lg-offset-1">Email</label>'+
									'<div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">'+
										'<input type="text" class="form-control" id="txtEmail" name="txtEmailName" disabled="disabled" required="required" placeholder="Your Email"/>'+
									'</div>'+
								'</div>'+
								'<div class="form-group">'+
									'<label class="control-label col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xs-offset-0 col-sm-offset-0 col-md-offset-1 col-lg-offset-1">Mobile Number</label>'+
									'<div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">'+
									'<input type="text" class="form-control" id="txtMobile" name="txtMobileName" required="required" placeholder="Your mobile number"/>'+
									'</div>'+
								'</div>'+
								'<div class="form-group">'+
									'<div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xs-offset-0 col-sm-offset-0 col-md-offset-4 col-lg-offset-4">'+
										'<button type="button" id="btnEdit" class="button button-primary">Update</button>'+
									'</div>'+
								'</div>'+
							'</form>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>';
	return html;
}
function rewardHistoryModal(){
	var html = '<div class="modal fade" id="rewardHistoryModal" role="dialog" data-backdrop="static" data-keyboard="false">'+
				'<div class="modal-dialog rewardHistoryModal" role="document">'+
					'<div class="modal-content">'+
						'<div class="modal-header">'+
							'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
							'<h4 class="modal-title text-center">Reward Points History</h4>'+
						'</div>'+
						'<div class="modal-body">'+
							'<div class="reward-history table-responsive">'+
								'<table class="table1">'+
					        		'<thead>'+
					            		'<tr>'+
										  '<th>Test/Quiz Id</th>'+
										  '<th class="title">Title</th>'+
										  '<th class="type">Test/Quiz</th>'+
										  '<th class="points">Points Earned</th>'+
										  '<th class="createdon">Earned On</th>'+
										'</tr>'+
									'</thead>'+
									'<tbody>'+
									'</tbody>'+
								'</table>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>';
	return html;
}