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
		request.setCharacterEncoding("gb2312");			//������������ʽ
		response.setCharacterEncoding("gb2312");		//������Ӧ��Ÿ�ʽ
		response.setContentType("text/html");
PrintWriter out = response.getWriter();

String uname=request.getParameter("uname").trim();
String upassword=request.getParameter("upassword").trim();


java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat("yyyy.MM.dd");
java.util.Date currentTime = new java.util.Date();//�õ���ǰϵͳʱ��
String dateTime = formatter.format(currentTime); //������ʱ���ʽ��

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
  	 out.print("<script language=\"JavaScript\">alert(\"��ӳɹ�!\"); window.location.href='manager/listuser.jsp'; </script>");

   }

   catch(Exception e)

   {

          out.println(e);

   }


}
}
