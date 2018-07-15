$(document).ready(function(){
	//load...
	var load = '<svg class="circular" viewBox="25 25 50 50">'+
			            '<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />'+
			        '</svg>';
			    
		$("#ndy-preloader").html(load);
})



/**
 * 下方chart和table显示均为一下api返回的数据
 *getMessageStat? startDt=20180620&endDt=20180720
 *[{dt:20180102,val:200},{dt:20180102,val:200},{dt:20180102,val:200}]
 * labels: dt
 * data : val
 * fillColor： 颜色
 * 
 * labels数组中存在几个元素， 代表X轴有几个日期     -----------  柱状图的个数
 * datasets中存在几个对象   图表当前的日期显示几个柱状图     ------------- 当前柱状图的个数
 * 
 */
$(document).ready(function(){
	
	/**
	 * _this == true  需要交互图表   false  则不执行
	 */
	
		if(_this){
    		var ctx2 = document.getElementById("chart2").getContext("2d");
		    var data2 = {
		        labels: ["January", "February", "March", "April", "May", "June", "July"],
		        datasets: [
		        {
	//	                label: "My First dataset",
		                fillColor: "rgba(120,110,123,0.8)",
	//	                strokeColor: "rgba(255,118,118,0.8)",
	//	                highlightFill: "rgba(255,118,118,1)",
	//	                highlightStroke: "rgba(255,118,118,1)",
		                data: [10, 30, 80, 61, 26, 75, 40]
		            },
		            {
	//	                label: "My First dataset",
		                fillColor: "rgba(255,118,118,0.8)",
	//	                strokeColor: "rgba(255,118,118,0.8)",
	//	                highlightFill: "rgba(255,118,118,1)",
	//	                highlightStroke: "rgba(255,118,118,1)",
		                data: [10, 30, 80, 61, 26, 75, 40]
		            },
		            {
	//	                label: "My Second dataset",
		                fillColor: "rgba(180,193,215,0.8)",
	//	                strokeColor: "rgba(180,193,215,0.8)",
	//	                highlightFill: "rgba(180,193,215,1)",
	//	                highlightStroke: "rgba(180,193,215,1)",
		                data: [28, 48, 40, 19, 86, 27, 90]
		            }
		        ]
		    };
		    
		    var chart2 = new Chart(ctx2).Bar(data2, {
		        scaleBeginAtZero : true,
		        scaleShowGridLines : true,
		        scaleGridLineColor : "rgba(0,0,0,.005)",
		        scaleGridLineWidth : 0,
		        scaleShowHorizontalLines: true,
		        scaleShowVerticalLines: true,
		        barShowStroke : true,
		        barStrokeWidth : 0,
				tooltipCornerRadius: 2,
		        barDatasetSpacing : 3,
		        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
		        responsive: true
		    });
	    }
})
    
$(function(){
	//header
	var heade = `<nav class="navbar navbar-default navbar-static-top m-b-0">
		            <div class="navbar-header">
		                <div class="top-left-part">
		                    <p class="text-white h3 text-center">短信发送系统</p>
		                </div> 
		              
		                <ul class="nav navbar-top-links navbar-left">
		                    <li><a href="javascript:void(0)" class="open-close waves-effect waves-light visible-xs"><i class="ti-close ti-menu"></i></a></li>
		                    <li class="dropdown">
		                        <a class="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#"> <i class="mdi mdi-gmail"></i>
		                            <div class="notify"> <span class="heartbit"></span> <span class="point"></span> </div>
		                        </a>
		                        <ul class="dropdown-menu mailbox animated bounceInDown">
		                            <li>
		                                <div class="drop-title">You have 4 new messages</div>
		                            </li>
		                            <li>
		                                <div class="message-center">
		                                    <a href="#">
		                                        <div class="user-img"> <img src="../plugins/images/users/pawandeep.jpg" alt="user" class="img-circle"> <span class="profile-status online pull-right"></span> </div>
		                                        <div class="mail-contnet">
		                                            <h5>Pavan kumar</h5> <span class="mail-desc">Just see the my admin!</span> <span class="time">9:30 AM</span> </div>
		                                    </a>
		                                    <a href="#">
		                                        <div class="user-img"> <img src="../plugins/images/users/sonu.jpg" alt="user" class="img-circle"> <span class="profile-status busy pull-right"></span> </div>
		                                        <div class="mail-contnet">
		                                            <h5>Sonu Nigam</h5> <span class="mail-desc">I've sung a song! See you at</span> <span class="time">9:10 AM</span> </div>
		                                    </a>
		                                    <a href="#">
		                                        <div class="user-img"> <img src="../plugins/images/users/arijit.jpg" alt="user" class="img-circle"> <span class="profile-status away pull-right"></span> </div>
		                                        <div class="mail-contnet">
		                                            <h5>Arijit Sinh</h5> <span class="mail-desc">I am a singer!</span> <span class="time">9:08 AM</span> </div>
		                                    </a>
		                                    <a href="#">
		                                        <div class="user-img"> <img src="../plugins/images/users/pawandeep.jpg" alt="user" class="img-circle"> <span class="profile-status offline pull-right"></span> </div>
		                                        <div class="mail-contnet">
		                                            <h5>Pavan kumar</h5> <span class="mail-desc">Just see the my admin!</span> <span class="time">9:02 AM</span> </div>
		                                    </a>
		                                </div>
		                            </li>
		                            <li>
		                                <a class="text-center" href="javascript:void(0);"> <strong>See all notifications</strong> <i class="fa fa-angle-right"></i> </a>
		                            </li>
		                        </ul>
		                       
		                    </li>
		                    
		                    <li class="dropdown">
		                        <a class="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#"> <i class="mdi mdi-check-circle"></i>
		                            <div class="notify"><span class="heartbit"></span><span class="point"></span></div>
		                        </a>
		                        <ul class="dropdown-menu dropdown-tasks animated slideInUp">
		                            <li>
		                                <a href="#">
		                                    <div>
		                                        <p> <strong>Task 1</strong> <span class="pull-right text-muted">40% Complete</span> </p>
		                                        <div class="progress progress-striped active">
		                                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"> <span class="sr-only">40% Complete (success)</span> </div>
		                                        </div>
		                                    </div>
		                                </a>
		                            </li>
		                            <li class="divider"></li>
		                            <li>
		                                <a href="#">
		                                    <div>
		                                        <p> <strong>Task 2</strong> <span class="pull-right text-muted">20% Complete</span> </p>
		                                        <div class="progress progress-striped active">
		                                            <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%"> <span class="sr-only">20% Complete</span> </div>
		                                        </div>
		                                    </div>
		                                </a>
		                            </li>
		                            <li class="divider"></li>
		                            <li>
		                                <a href="#">
		                                    <div>
		                                        <p> <strong>Task 3</strong> <span class="pull-right text-muted">60% Complete</span> </p>
		                                        <div class="progress progress-striped active">
		                                            <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"> <span class="sr-only">60% Complete (warning)</span> </div>
		                                        </div>
		                                    </div>
		                                </a>
		                            </li>
		                            <li class="divider"></li>
		                            <li>
		                                <a href="#">
		                                    <div>
		                                        <p> <strong>Task 4</strong> <span class="pull-right text-muted">80% Complete</span> </p>
		                                        <div class="progress progress-striped active">
		                                            <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%"> <span class="sr-only">80% Complete (danger)</span> </div>
		                                        </div>
		                                    </div>
		                                </a>
		                            </li>
		                            <li class="divider"></li>
		                            <li>
		                                <a class="text-center" href="#"> <strong>See All Tasks</strong> <i class="fa fa-angle-right"></i> </a>
		                            </li>
		                        </ul>
		                    </li>
		                    <!-- .Megamenu -->
		                    <li class="mega-dropdown"> <a class="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#"><span class="hidden-xs">Mega</span> <i class="icon-options-vertical"></i></a>
		                        <ul class="dropdown-menu mega-dropdown-menu animated bounceInDown">
		                            <li class="col-sm-3">
		                                <ul>
		                                    <li class="dropdown-header">Forms Elements</li>
		                                    <li><a href="form-basic.html">Basic Forms</a></li>
		                                    <li><a href="form-layout.html">Form Layout</a></li>
		                                    <li><a href="form-advanced.html">Form Addons</a></li>
		                                    <li><a href="form-material-elements.html">Form Material</a></li>
		                                    <li><a href="form-float-input.html">Form Float Input</a></li>
		                                    <li><a href="form-upload.html">File Upload</a></li>
		                                    <li><a href="form-mask.html">Form Mask</a></li>
		                                    <li><a href="form-img-cropper.html">Image Cropping</a></li>
		                                    <li><a href="form-validation.html">Form Validation</a></li>
		                                </ul>
		                            </li>
		                            <li class="col-sm-3">
		                                <ul>
		                                    <li class="dropdown-header">Advance Forms</li>
		                                    <li><a href="form-dropzone.html">File Dropzone</a></li>
		                                    <li><a href="form-pickers.html">Form-pickers</a></li>
		                                    <li><a href="form-wizard.html">Form-wizards</a></li>
		                                    <li><a href="form-typehead.html">Typehead</a></li>
		                                    <li><a href="form-xeditable.html">X-editable</a></li>
		                                    <li><a href="form-summernote.html">Summernote</a></li>
		                                    <li><a href="form-bootstrap-wysihtml5.html">Bootstrap wysihtml5</a></li>
		                                    <li><a href="form-tinymce-wysihtml5.html">Tinymce wysihtml5</a></li>
		                                </ul>
		                            </li>
		                            <li class="col-sm-3">
		                                <ul>
		                                    <li class="dropdown-header">Table Example</li>
		                                    <li><a href="basic-table.html">Basic Tables</a></li>
		                                    <li><a href="table-layouts.html">Table Layouts</a></li>
		                                    <li><a href="data-table.html">Data Table</a></li>
		                                    <li><a href="bootstrap-tables.html">Bootstrap Tables</a></li>
		                                    <li><a href="responsive-tables.html">Responsive Tables</a></li>
		                                    <li><a href="editable-tables.html">Editable Tables</a></li>
		                                    <li><a href="foo-tables.html">FooTables</a></li>
		                                    <li><a href="jsgrid.html">JsGrid Tables</a></li>
		                                </ul>
		                            </li>
		                          
		                        </ul>
		                    </li>
		          
		                </ul>
		                <ul class="nav navbar-top-links navbar-right pull-right">
		                    <li>
		                        <form role="search" class="app-search hidden-sm hidden-xs m-r-10">
		                            <input type="text" placeholder="Search..." class="form-control"> <a href=""><i class="fa fa-search"></i></a> </form>
		                    </li>
		                    <li class="dropdown">
		                        <a class="dropdown-toggle profile-pic" data-toggle="dropdown" href="#"> <img src="../plugins/images/users/varun.jpg" alt="user-img" width="36" class="img-circle"><b class="hidden-xs">Steave</b><span class="caret"></span> </a>
		                        <ul class="dropdown-menu dropdown-user animated flipInY">
		                            <li>
		                                <div class="dw-user-box">
		                                    <div class="u-img"><img src="../plugins/images/users/varun.jpg" alt="user" /></div>
		                                    <div class="u-text">
		                                        <h4>Steave Jobs</h4>
		                                        <p class="text-muted">varun@gmail.com</p><a href="profile.html" class="btn btn-rounded btn-danger btn-sm">View Profile</a></div>
		                                </div>
		                            </li>
		                            <li role="separator" class="divider"></li>
		                            <li><a href="#"><i class="ti-user"></i> My Profile</a></li>
		                            <li><a href="#"><i class="ti-wallet"></i> My Balance</a></li>
		                            <li><a href="#"><i class="ti-email"></i> Inbox</a></li>
		                            <li role="separator" class="divider"></li>
		                            <li><a href="#"><i class="ti-settings"></i> Account Setting</a></li>
		                            <li role="separator" class="divider"></li>
		                            <li><a href="#"><i class="fa fa-power-off"></i> Logout</a></li>
		                        </ul>
		                    
		                    </li>
		             
		                </ul>
		            </div>
		            
		        </nav>`;
	
	$("#ndy-header").html(heade);
	
	//left sidebar
	var LeftSide = `<div class="sidebar-nav slimscrollsidebar">
		                <div class="sidebar-head">
		                    <h3><span class="fa-fw open-close"><i class="ti-menu hidden-xs"></i><i class="ti-close visible-xs"></i></span> <span class="hide-menu">Navigation</span></h3> </div>
		                <ul class="nav" id="side-menu">
		                	<li class="user-pro">
		                        <a href="#" class="waves-effect"><img src="../plugins/images/users/varun.jpg" alt="user-img" class="img-circle"> <span class="hide-menu"> Steve Gection<span class="fa arrow"></span></span>
		                        </a>
		                        <ul class="nav nav-second-level collapse" aria-expanded="false" style="height: 0px;">
		                            <li><a href="javascript:void(0)"><i class="ti-user"></i> <span class="hide-menu">My Profile</span></a></li>
		                            <li><a href="javascript:void(0)"><i class="ti-wallet"></i> <span class="hide-menu">My Balance</span></a></li>
		                            <li><a href="javascript:void(0)"><i class="ti-email"></i> <span class="hide-menu">Inbox</span></a></li>
		                            <li><a href="javascript:void(0)"><i class="ti-settings"></i> <span class="hide-menu">Account Setting</span></a></li>
		                            <li><a href="javascript:void(0)"><i class="fa fa-power-off"></i> <span class="hide-menu">Logout</span></a></li>
		                        </ul>
		                   </li>
		                    <li><a href="index.html" class="waves-effect"><i class="fa fa-bank"></i> <span class="hide-menu">首页</span></a></li>
		                    <li><a href="mail-list.html" class="waves-effect"><i class="fa fa-phone-square"></i> <span class="hide-menu">通讯录</span></a></li>
		                    <li><a href="javascript:;" class="waves-effect"><i class="fa fa-paper-plane-o"></i> <span class="hide-menu">发送短信</span></a></li>
		                    <li><a href="source-sms.html" class="waves-effect"><i class="fa fa-pencil-square-o"></i> <span class="hide-menu">短信来往</span></a></li>
		                </ul>
		            </div>`;
	$("#ndy-leftSide").html(LeftSide);
	
	//right sidebar
	var RightSilde = `<div class="right-sidebar">
		                <div class="slimscrollright">
		                    <div class="rpanel-title"> Service Panel <span><i class="ti-close right-side-toggle"></i></span> </div>
		                    <div class="r-panel-body">
		                        <ul id="themecolors" class="m-t-20">
		                            <li><b>All background</b></li>
		                            <li><a href="javascript:void(0)" data-theme="default" class="default-theme">1</a></li>
		                            <li><a href="javascript:void(0)" data-theme="green" class="green-theme">2</a></li>
		                            <li><a href="javascript:void(0)" data-theme="gray" class="yellow-theme">3</a></li>
		                            <li><a href="javascript:void(0)" data-theme="blue" class="blue-theme">4</a></li>
		                            <li><a href="javascript:void(0)" data-theme="purple" class="purple-theme">5</a></li>
		                            <li><a href="javascript:void(0)" data-theme="megna" class="megna-theme">6</a></li>
		                            <li class="full-width"><b>left background</b></li>
		                            <li><a href="javascript:void(0)" data-theme="default-dark" class="default-dark-theme">7</a></li>
		                            <li><a href="javascript:void(0)" data-theme="green-dark" class="green-dark-theme">8</a></li>
		                            <li><a href="javascript:void(0)" data-theme="gray-dark" class="yellow-dark-theme">9</a></li>
		                            <li><a href="javascript:void(0)" data-theme="blue-dark" class="blue-dark-theme working">10</a></li>
		                            <li><a href="javascript:void(0)" data-theme="purple-dark" class="purple-dark-theme">11</a></li>
		                            <li><a href="javascript:void(0)" data-theme="megna-dark" class="megna-dark-theme">12</a></li>
		                        </ul>
		                    </div>
		                </div>
		            </div>`;
		            
    $("#ndy-rightSilde").html(RightSilde);
	
	//footer
	var footer = `<footer class="footer text-center"> 2017 &copy; Ample Admin brought to you by themedesigner.in </footer>`;
	$("#ndy-footer").html(footer);
})
