package com.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
//

public class Data_fenye {

	  
	public List getList(String sql,int intPageSize,int intPage){
		  Statement stmt=null ;
		  ResultSet rs = null;
		  int intRowCount; //记录总数  
		  int intPageCount;//总页数  
		  List<Map> list = new ArrayList<Map>();
		try {
			Connection con = TC.getConnection();
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY); 
			rs = stmt.executeQuery(sql);   //执行SQL语句并获取结果集 
			rs.last();    //获取记录总数  
			intRowCount = rs.getRow(); 
			intPageCount = (intRowCount+intPageSize-1)/intPageSize;   //记算总页数 			   
			if(intPage>intPageCount)  intPage = intPageCount;   //调整待显示的页码  
			 if(intPageCount>0){			     
			     rs.absolute((intPage-1)*intPageSize+1);//将记录指针定位到待显示页的第一条记录上 
			     int i = 0; //显示数据    		
			     
			     ResultSetMetaData rsmd = rs.getMetaData();
		         int columnNum = rsmd.getColumnCount();
			     while(i<intPageSize  &&  !rs.isAfterLast()){ 
			    	 Map map = new HashMap();
			    	for(int j=1;j<=columnNum;j++){
			    		map.put(j,rs.getString(j));
			    	}
			    	list.add(map);
			    	rs.next();  
			        i++;
			     }
			 }  
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			try {
				rs.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return list;
	}
	
	public int getCount(String sql,int intPageSize,int intPage){
		  Statement stmt=null ;
		  ResultSet rs = null;
		  int intRowCount; //记录总数  
		  int intPageCount = 0;//总页数  
		try{
			Connection con = TC.getConnection();
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY); 
			rs = stmt.executeQuery(sql);   //执行SQL语句并获取结果集 
			rs.last();    //获取记录总数  
			intRowCount = rs.getRow(); 
			intPageCount = (intRowCount+intPageSize-1)/intPageSize;   //记算总页数 
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			try {
				rs.close();
				stmt.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		
		}
		return intPageCount;
	}
}
