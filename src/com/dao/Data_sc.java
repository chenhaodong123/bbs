package com.dao;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


public class Data_sc extends HttpServlet {


		 public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
				request.setCharacterEncoding("utf-8");
				response.setCharacterEncoding("GB2312");
				PrintWriter out = response.getWriter();
		        HttpSession session = request.getSession();
		   String[] name = request.getParameterValues("id");
		   Connection conn =null;
		 	 PreparedStatement stat =null;
			 
		       int rs=0;

		try {
			 conn = TC.getConnection();
			 if(name.length>0){
		for (int i = 0; i < name.length; i++)
		   {
		
			stat = conn.prepareStatement("DELETE FROM userInfo  where uId='"+name[i].trim()+"'");
		 	rs = stat.executeUpdate();
			
						if (rs>0){
		
			out.print("<script language=\"JavaScript\">alert(\"³É¹¦É¾³ý!\"); window.location.href='manager/listuser.jsp'; </script>");
					}
		   }}
				} catch (Exception e) {
					e.printStackTrace();
				} finally{
		      	  
		  	      try {
					
					  stat.close();
					  conn.close();
				           } catch (SQLException e)
				               {
					
					          e.printStackTrace();
				                }
		                }
		   
				
			}
	}
