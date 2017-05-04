<%@ page import="java.io.*,java.util.*,java.sql.*"%>
<%@ page import="javax.servlet.http.*,javax.servlet.*" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>
 
<html>
<head>
<title>SELECT Operation</title>
</head>
<body>
<% String key_request = request.getParameter("key"); %>

<sql:setDataSource var="snapshot" driver="com.mysql.jdbc.Driver"
     url="jdbc:mysql://localhost/notf-viz"
     user="root"  password=""/>
 
<sql:query dataSource="${snapshot}" var="result">
SELECT * from records where hash_key = <%= key_request %> ;
</sql:query>
 
<table border="1" width="100%">
<c:forEach var="row" items="${result.rows}">
<tr>
   <td><c:out value="${row.hash_key}"/></td>
   <td><c:out value="${row.first}"/></td>
   <td><c:out value="${row.last}"/></td>
   <td><c:out value="${row.age}"/></td>
</tr>
</c:forEach>
</table>
 
</body>
</html>