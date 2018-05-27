<%@ page language="java" contentType="text/html; charset=gbk"
	pageEncoding="gbk"%>
<%@ page import="java.util.*,com.dao.*,com.entity.*"%>
<%@ include file="checkManagerLogin.jsp"%>
<%
	SectionInfoDAO section_dao = new SectionInfoDAO();
	ManagerDAO manager_dao = new ManagerDAO();
	List<SectionInfo> clist = null;
	String blank = "";
%>
<%   
  
  int intPageSize; //一页显示的记录数  
  int intRowCount; //记录总数  
  int intPageCount;//总页数  
  int intPage;     //待显示页码  
  String strPage;  


  intPageSize=18;   //设置一页显示的记录数      
  strPage = request.getParameter("page");   //取得待显示页码 
  if(strPage==null){  
 	intPage=1; //表明在QueryString中没有page这一个参数，此时显示第一页数据 
  }  
  else{    
    
	 intPage = Integer.parseInt(strPage); //将字符串转换成整型      
 	 if(intPage<1)   intPage=1;  
  }  
  
Data_fenye pageView = new Data_fenye ();

String sql = ("select * from userInfo");




  List list = pageView.getList(sql,intPageSize,intPage);
  intPageCount = pageView.getCount(sql.toString(),intPageSize,intPage);
  //session.setAttribute("stuInfo",list);
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk">
<title></title>
<script type="text/javascript" src="js/manage.js"></script>
</head>
<link href="manager.css" type=text/css rel=stylesheet>
<style>
#t1 {
	font-size: 12px;
}
</style>

<script type="text/javascript">
function zoomtextarea(objname, zoom) 
{
 	zoomsize = zoom ? 10 : -10;
	obj = document.Form1.elements[objname];
	if(obj.rows + zoomsize > 0 && obj.cols + zoomsize * 3 > 0) {
		obj.rows += zoomsize;
		obj.cols += zoomsize * 3;
	}
}

function check(){
	var same = document.Form1.sName.value
	var reg = /^[\u4e00-\u9fa5A-Za-z0-9]{3,20}$/;//[\u4e00-\u9fa5]验证中文的正则表达式
	if(same =="" || !same.match(reg)){
		alert("论坛名称长度为3-20");
		document.Form1.sName.focus();
		return false;
	}
}

</script>

<body>
	<DIV style="FONT-SIZE: 14px; PADDING-TOP: 60px; FONT-FAMILY: Arial"
		align=center>
		<DIV align="left">当前操作是：用户管理</DIV>
		<HR style="WIDTH: 99%; COLOR: #cccccc; HEIGHT: 1px">
	</DIV>
	<div class="ManagerForm">
		<form action="../Data_sc" method="post" id="book" name="book">
			<table width="100%" border="1" cellspacing="0" cellpadding="0">
				<tr>
					<td width="50"><input type="submit" value="删除"
						onclick="del(book)" /></td>
					<td>用户名</td>
					<td>密码</td>
				</tr>
				<% if(list!=null){
  		int i =-1;
  			for(Iterator iterator = list.iterator();iterator.hasNext();){
  				Map map = (Map)iterator.next();
  		  i++;
   %>
				<tr>
					<td><input type="checkbox" name="id" id="row"
						value="<%=map.get(1) %>" /></td>
					<td><%=map.get(2) %></td>
					<td><%=map.get(3) %></td>
				</tr>
				<%}} %>
			</table>

		</form>
	</div>
	<p></p>
	<DIV style="FONT-SIZE: 11px; PADDING-TOP: 60px; FONT-FAMILY: Arial"
		align=center>
		<HR style="WIDTH: 600px; COLOR: #cccccc; HEIGHT: 1px">
		版权信息
	</DIV>
</body>
</html>
