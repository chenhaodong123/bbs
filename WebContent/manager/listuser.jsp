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
  
  int intPageSize; //һҳ��ʾ�ļ�¼��  
  int intRowCount; //��¼����  
  int intPageCount;//��ҳ��  
  int intPage;     //����ʾҳ��  
  String strPage;  


  intPageSize=18;   //����һҳ��ʾ�ļ�¼��      
  strPage = request.getParameter("page");   //ȡ�ô���ʾҳ�� 
  if(strPage==null){  
 	intPage=1; //������QueryString��û��page��һ����������ʱ��ʾ��һҳ���� 
  }  
  else{    
    
	 intPage = Integer.parseInt(strPage); //���ַ���ת��������      
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
	var reg = /^[\u4e00-\u9fa5A-Za-z0-9]{3,20}$/;//[\u4e00-\u9fa5]��֤���ĵ�������ʽ
	if(same =="" || !same.match(reg)){
		alert("��̳���Ƴ���Ϊ3-20");
		document.Form1.sName.focus();
		return false;
	}
}

</script>

<body>
	<DIV style="FONT-SIZE: 14px; PADDING-TOP: 60px; FONT-FAMILY: Arial"
		align=center>
		<DIV align="left">��ǰ�����ǣ��û�����</DIV>
		<HR style="WIDTH: 99%; COLOR: #cccccc; HEIGHT: 1px">
	</DIV>
	<div class="ManagerForm">
		<form action="../Data_sc" method="post" id="book" name="book">
			<table width="100%" border="1" cellspacing="0" cellpadding="0">
				<tr>
					<td width="50"><input type="submit" value="ɾ��"
						onclick="del(book)" /></td>
					<td>�û���</td>
					<td>����</td>
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
		��Ȩ��Ϣ
	</DIV>
</body>
</html>
