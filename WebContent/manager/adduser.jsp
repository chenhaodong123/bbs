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
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk">
<title></title>
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
		<DIV align="left">当前操作是：用户添加</DIV>
		<HR style="WIDTH: 99%; COLOR: #cccccc; HEIGHT: 1px">
	</DIV>
	<div class="ManagerForm">

		<form action="../Adduser" method="post">
			<table width="100%" border="1" cellspacing="0" cellpadding="0"
				style="font-size: 14px">
				<tr>
					<td width="50">用户名</td>
					<td><input name="uname" type="text" style="width: 300px" /></td>
				</tr>
				<tr>
					<td width="50">密&nbsp;&nbsp;码</td>
					<td><input name="upassword" type="password"
						style="width: 300px" /></td>
				</tr>
				<tr>
					<td>&nbsp;</td>
					<td><input name="" type="submit" /></td>
				</tr>
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
