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
		  int intRowCount; //��¼����  
		  int intPageCount;//��ҳ��  
		  List<Map> list = new ArrayList<Map>();
		try {
			Connection con = TC.getConnection();
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY); 
			rs = stmt.executeQuery(sql);   //ִ��SQL��䲢��ȡ����� 
			rs.last();    //��ȡ��¼����  
			intRowCount = rs.getRow(); 
			intPageCount = (intRowCount+intPageSize-1)/intPageSize;   //������ҳ�� 			   
			if(intPage>intPageCount)  intPage = intPageCount;   //��������ʾ��ҳ��  
			 if(intPageCount>0){			     
			     rs.absolute((intPage-1)*intPageSize+1);//����¼ָ�붨λ������ʾҳ�ĵ�һ����¼�� 
			     int i = 0; //��ʾ����    		
			     
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
		  int intRowCount; //��¼����  
		  int intPageCount = 0;//��ҳ��  
		try{
			Connection con = TC.getConnection();
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY); 
			rs = stmt.executeQuery(sql);   //ִ��SQL��䲢��ȡ����� 
			rs.last();    //��ȡ��¼����  
			intRowCount = rs.getRow(); 
			intPageCount = (intRowCount+intPageSize-1)/intPageSize;   //������ҳ�� 
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
