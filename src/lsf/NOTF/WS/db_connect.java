package lsf.NOTF.WS;

import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.json.JSONArray;
import org.json.JSONObject;

import com.mysql.jdbc.Connection;
import com.mysql.jdbc.Statement;

public class db_connect {
	
	 // JDBC driver name and database URL
	   String JDBC_DRIVER = "com.mysql.jdbc.Driver";  
	   String DB_URL = "jdbc:mysql://localhost/lm-notf";

	   // Database credentials
	   String USER = "root";
	   String PASS = "";
	   JSONArray jsonArray = new JSONArray();
	   public JSONArray db_con(String table) {
		   java.sql.Connection conn = null;
		   java.sql.Statement stmt = null;
		   try{
		      //STEP 2: Register JDBC driver
		      Class.forName("com.mysql.jdbc.Driver");

		      //STEP 3: Open a connection
		      System.out.println("Connecting to database...");
		      conn = DriverManager.getConnection(DB_URL,USER,PASS);

		      //STEP 4: Execute a query
		      System.out.println("Creating statement...");
		      stmt = conn.createStatement();
		      String sql;
		      sql = "SELECT * from "+table+" where not value = 0;";
		      ResultSet rs = stmt.executeQuery(sql);
		      
		      
		      //STEP 5: Extract data from result set
		      while(rs.next()){
		         //Retrieve by column name
		    	 JSONObject jsonObject = new JSONObject();
		    	 
		    	 jsonObject.put("row_id",Integer.parseInt(rs.getString("row_id")));
		    	 jsonObject.put("fact_id",Integer.parseInt(rs.getString("fact_id")));
		    	 jsonObject.put("value",Double.parseDouble(rs.getString("value")));
		    	 jsonArray.put(jsonObject);
		         		         
		        // System.out.println(row+" : "+col+" : "+value);
		      }
		      //STEP 6: Clean-up environment
		      rs.close();
		      stmt.close();
		      conn.close();
		   }catch(SQLException se){
		      //Handle errors for JDBC
		      se.printStackTrace();
		   }catch(Exception e){
		      //Handle errors for Class.forName
		      e.printStackTrace();
		   }finally{
		      //finally block used to close resources
		      try{
		         if(stmt!=null)
		            stmt.close();
		      }catch(SQLException se2){
		      }// nothing we can do
		      try{
		         if(conn!=null)
		            conn.close();
		      }catch(SQLException se){
		         se.printStackTrace();
		      }//end finally try
		   }//end try
		   System.out.println("Goodbye!");
		   
		   return jsonArray;
		   
	   }
		
	}
	   
	   
		

	

