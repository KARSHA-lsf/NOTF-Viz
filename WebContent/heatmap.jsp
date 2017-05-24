<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="java.io.*,java.util.*,java.sql.*"%>
<%@ page import="javax.servlet.http.*,javax.servlet.*" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- Meta, title, CSS, favicons, etc. -->
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>LSF | Home</title>

<!-- Bootstrap -->
<link href="css/bootstrap.min.css" rel="stylesheet">
<!-- Font Awesome -->
<link href="css/font-awesome/css/font-awesome.min.css" rel="stylesheet">
<!-- iCheck -->
<link href="css/green.css" rel="stylesheet">
<!-- bootstrap-progressbar -->
<link href="css/bootstrap-progressbar-3.3.4.min.css" rel="stylesheet">
<!-- jVectorMap -->
<link href="css/maps/jquery-jvectormap-2.0.3.css" rel="stylesheet" />
<link href="css/switchery.min.css" rel="stylesheet">

<!-- Custom Theme Style -->
<link href="build/css/custom.min.css" rel="stylesheet">
<link href="css/custom.css" rel="stylesheet">


<script src="http://d3js.org/d3.v3.js"></script>
<script src="js/angular/angular.min.js" type="text/javascript"></script>
<script src="views/menu/menu.js" type="text/javascript"></script>
<style type="text/css">
	element.style{
		box-shadow : rgb(160,177,173)0px 0px 0px 11px inset;
	}
</style>
</head>

<body class="nav-md">
 <% String key_request = request.getParameter("key"); %>
	<sql:setDataSource var="snapshot" driver="com.mysql.jdbc.Driver"
     url="jdbc:mysql://localhost/notf-viz"
     user="root"  password=""/>
		<sql:query dataSource="${snapshot}" var="result">
		SELECT * from vnotf_records where hash_key = <%= key_request %> ;
		</sql:query>
		<sql:query dataSource="${snapshot}" var="result_title">
		SELECT hash_key_title from vnotf_records where hash_key = <%= key_request %> limit 1 ;
		</sql:query>

	<div class="container body">
		<div class="main_container">
			<div class="col-md-3 left_col">
				<div class="left_col scroll-view">
					<div class="navbar nav_title" style="border: 0;">
						<a href="index.html" class="site_title"> <span>LSF-Dashboard</span></a>
					</div>

					<div class="clearfix"></div>

					<!-- menu profile quick info -->
					<div class="profile">
						<div class="profile_pic">
							<img src="images/img.jpg" alt="..."
								class="img-circle profile_img">
						</div>
						<div class="profile_info">
							<span>NOTF-Viz</span>
						</div>
					</div>
					<!-- /menu profile quick info -->

					<br />

				      <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
		              <div class="menu_section">
		                <h3>Visualization</h3>
		                <ul class="nav side-menu">
		                  <c:forEach var="row" items="${result_title.rows}">
		                  <li><a><i class="fa fa-home"></i> <c:out value="${row.hash_key_title}"/> <span class="fa fa-chevron-down"></span></a>
		                  </c:forEach>
		                    <ul class="nav child_menu">
		                    <c:forEach var="row" items="${result.rows}">
		                      <li><a href=".\heatmap.jsp?key=<%= key_request %>&<c:out value="${row.parameters}"/>"><c:out value="${row.menu_item_name}"/></a></li>
		                    </c:forEach>
		                    </ul>
		                  </li>
		                 
		                </ul>
		              </div>          
            </div>
				</div>
			</div>

			<!-- top navigation -->
			<div class="top_nav">
				<div class="nav_menu">
					<nav class="" role="navigation">
						<div class="nav toggle">
							<a id="menu_toggle"><i class="fa fa-bars"></i></a>
						</div>
					</nav>
				</div>
			</div>
			<!-- /top navigation -->

			<!-- page content -->
			<div class="right_col" role="main">
				<div class="row">

					<div class="col-md-12 col-sm-12 col-xs-12" ng-controller="chart_back">
						<div class="dashboard_graph">
							<div class="row x_title">
								<div class="col-md-6">
									<div id="page_title"></div>
								</div>
								<div class="col-md-3">
                           			<div class="">
			                            <label>
			                              <input id="bg_color" type="checkbox" class="js-switch"  /> Background Color 
			                            </label>
			                        </div>
								</div>
							</div>

							<div id="tooltip" class="hidden">
								<p>
									<span id="value">
								</p>
							</div>
							<div id="chart" ></div>
							<div class="clearfix"></div>
						</div>
					</div>
					<!-- end of first graph -->
					<br />





				</div>
			</div>
		</div>
		<!-- /page content -->

		<!-- footer content -->
		<footer>
			<div class="pull-right">
				Gentelella - Bootstrap Admin Template by <a href="#">Colorlib</a>
			</div>
			<div class="clearfix"></div>
		</footer>
		<!-- /footer content -->
	</div>
	</div>



	<!-- jQuery -->
	<script src="js/jquery.min.js"></script>
	<!-- Bootstrap -->
	<script src="js/bootstrap.min.js"></script>
	<!-- FastClick -->
	<script src="js/fastclick.js"></script>
	<!-- NProgress -->
	<script src="js/nprogress.js"></script>
	<!-- Chart.js -->
	<script src="js/Chart.min.js"></script>
	<!-- gauge.js -->
	<script src="js/gauge.min.js"></script>
	<!-- bootstrap-progressbar -->
	<script src="js/bootstrap-progressbar.min.js"></script>
	<!-- iCheck -->
	<script src="js/icheck.min.js"></script>
	<!-- Skycons -->
	<script src="js/skycons.js"></script>
	<!-- Flot -->
	<script src="js/jquery.flot.js"></script>
	<script src="js/jquery.flot.pie.js"></script>
	<script src="js/jquery.flot.time.js"></script>
	<script src="js/jquery.flot.stack.js"></script>
	<script src="js/jquery.flot.resize.js"></script>
	<!-- Flot plugins -->
	<script src="js/flot/jquery.flot.orderBars.js"></script>
	<script src="js/flot/date.js"></script>
	<script src="js/flot/jquery.flot.spline.js"></script>
	<script src="js/flot/curvedLines.js"></script>
	<!-- jVectorMap -->
	<script src="js/maps/jquery-jvectormap-2.0.3.min.js"></script>
	<!-- bootstrap-daterangepicker -->
	<script src="js/moment/moment.min.js"></script>
	<script src="js/datepicker/daterangepicker.js"></script>
	<script src="js/switchery.min.js"></script>

	<!-- Custom Theme Scripts -->
	<script src="build/js/custom.min.js"></script>
	<script type="text/javascript">
	
	
	$.urlParam = function(name){
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
			if (results==null){
				return null;
			}else{
				return results[1] || 0;
			}	
		}
	var colLabel,cellSize=10,row_number=20,rowLabel;
	var tabel = $.urlParam('tabel');
	var col_number= $.urlParam('col');
	var y_col = $.urlParam('y_col');
	var title_main = $.urlParam('title_main').replace("%20"," ").replace("%20"," ");
	var title_sub = $.urlParam('title_sub');
	
	$("#page_title").html("<h3>"+title_main+" <small> "+ title_sub +" </small></h3>");
	
	if($.urlParam('csize') != null){cellSize = $.urlParam('csize');}
	if($.urlParam('rows') != null){row_number = $.urlParam('rows');}
	//console.log("kkkkk : "+row_number);
	//console.log("llll : "+row_number);
	</script>
	<script src="config/config.js" type="text/javascript">	</script>
	
	</script>
	<script src="js/graph_us/heatmap.js" type="text/javascript"></script>
	<script type="text/javascript">
	//console.log("clor :"+$("#bg_color").attr('checked', true));
	
		 $('#bg_color').click(function() {
			var $bg_color = $( this );
			if ($bg_color.prop( "checked" )) {
				$('#chart').css('background-color', '#2a3f54');
			}else{
				$('#chart').css('background-color', 'white');
			}
			//console.log("clorkk :" +$bg_color.prop( "checked" ));
			
		    /* if($(this).is(":checked")) {
		    	
		       // var returnVal = confirm("Are you sure?");
		        //$(this).attr("checked", returnVal);
		    } */
		 });      
		
	</script>

	<!-- /Skycons -->

	<!-- Doughnut Chart -->

</body>
</html>
    