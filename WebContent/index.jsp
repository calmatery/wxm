<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html>
<html>
<head>
<base href="<%=basePath%>">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<style type="text/css">
	div{
		margin: 5px;
		padding:5px;
		border: 1px red solid;
	}
</style>
<jsp:include page="wxm/_wxm.jsp"></jsp:include>
<jsp:include page="Project/_Project.jsp"></jsp:include>
<title>首页</title>
</head>
<body>

</body>
</html>