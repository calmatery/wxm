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
<jsp:include page="../../../wxm/_wxm.jsp"></jsp:include>
<script type="text/javascript" src="test/wxm/route/RouteFragment.js"></script>
<title>URL验证</title>
</head>
<body>
<div id="qunit"></div>
</body>
</html>