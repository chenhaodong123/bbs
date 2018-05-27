package com.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


public class TC {
	public static void main(String[] args) throws SQLException {
		new TC().getConnection();
	}

	public static Connection getConnection() throws SQLException{
		//String url = "jdbc:sqlserver://localhost:1433;DataBaseName=TSG_data_count";
		String url = "jdbc:mysql://localhost:3306/bbs?useUnicode=true&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull";
		String user = "root";
		String password = "123456";
		Connection conn = null;
		try {
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection(url,user,password);			
		} catch (ClassNotFoundException e) {
			
			e.printStackTrace();
		}
		return conn;
	}
}

