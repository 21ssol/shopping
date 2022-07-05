<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <link rel="stylesheet" href="/css/style.css">
  <script type="text/javascript">
  </script>
</head>
<body>
<div class="container">
		<div class="row">
			<div class="col-sm-3">
				<h4>
					<img src="/svg/box2-heart.svg"> 상품 정보
				</h4>
				<img class="img-rounded" src="/contents/storage/${dto.filename}"
					style="width: 250px">
			</div>
			<div class="col-sm-6">
				<h4>
					<img src="/svg/rulers.svg"> 사이즈 및 수량
				</h4>
				<ul class="list-group">
					<li class="list-group-item">가격 : ${dto.price }
					<li class="list-group-item">재고 : ${dto.stock }
					<li class="list-group-item">수량 : 
					<input type="number" name="quantity" min=0 max=20 value="1">
					<li class="list-group-item">
					<a href="javascript:cart()"> 
					<img class='btn' src="/svg/cart4.svg" /></a> 
					<a href="javascript:order()">
					<img class='btn' src="/svg/bag-heart-fill.svg" /></a> 
					<a href="javascript:history.back()">
					<img class='btn' src="/svg/arrow-return-left.svg" /></a>
					<li class="list-group-item">
					<h3>상품정보</h3>
					${dto.pname }<br>
					${dto.detail }
<div class='row'>
<div class="col-lg-12">
</div>
</div>
</div>
 
</body>
</html>