package com.servlet;
//
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dao.TC;

public class Adduser extends HttpServlet {

	public void doPost(HttpServletRequest request, HttpServletResponse response)
	throws ServletException, IOException {
		request.setCharacterEncoding("gb2312");			//设置请求编码格式
		response.setCharacterEncoding("gb2312");		//设置响应编号格式
		response.setContentType("text/html");
PrintWriter out = response.getWriter();

String uname=request.getParameter("uname").trim();
String upassword=request.getParameter("upassword").trim();


java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat("yyyy.MM.dd");
java.util.Date currentTime = new java.util.Date();//得到当前系统时间
String dateTime = formatter.format(currentTime); //将日期时间格式化

      Connection conn =null;
	  PreparedStatement stat =null;
try

{

	 conn = TC.getConnection();
  	
  	stat = conn.prepareStatement( "insert into userInfo values(null,?,?,?,?,?,?)");

 
     stat.setString(1,uname);
     stat.setString(2,upassword);
     stat.setString(3,"1");   
     stat.setString(4,"1.gif");   
     stat.setString(5,dateTime);   
     stat.setString(6,"2");   
  

      stat.executeUpdate();
  	 out.print("<script language=\"JavaScript\">alert(\"添加成功!\"); window.location.href='manager/listuser.jsp'; </script>");

   }

   catch(Exception e)

   {

          out.println(e);

   }


}
}
