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
<script type="text/javascript" src="wxm/url/Fragment.js"></script>
<script type="text/javascript" src="wxm/url/Route.js"></script>
<script type="text/javascript" src="test/wxm/url/Route.js"></script>
<title>URL验证</title>
</head>
<body>
<div id="qunit"></div>
</body>
</html>