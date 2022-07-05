<%@ page contentType="text/html; charset=UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>패스워드 찾기</title>
<meta charset="utf-8">
<script type="text/javascript">

$(function() {
	$("#findPw").click(function() {
		
		let id = document.getElementById("id").value;
		let email = document.getElementById("email").value;
		//alert("hi");

		let url = "http://localhost:8000/member/pwFind?id="+id+"&email="+email;
		 fetch(url)
		.then((response)=>response.json())
		.then((data)=>{
			alert(data.mname+"님의 패스워드는 " + data.passwd + " 입니다.");
		})
		.catch(err => {
			alert("일치하는 정보를 찾을 수 없습니다.", err);
		})
	})
});
		
  </script>
</head>
<body>
	<div class="container">

		<h1 class="col-sm-offset-2 col-sm-10">패스워드찾기</h1>
		<form class="form-horizontal" action="/member/findPw">

			<div class="form-group">
				<label class="control-label col-sm-2" for="id">아이디</label>
				<div class="col-sm-4">
					<input type="text" class="form-control" id="id"
						placeholder="Enter id" name="id" required="required"
						value='${c_id_val}'>
				</div>
			</div>
			<div class="form-group">
				<label class="control-label col-sm-2" for="email">이메일</label>
				<div class="col-sm-4">
					<input type="text" class="form-control" id="email"
						placeholder="Enter email" name="email" required="required">
				</div>
			</div>

			<div class="form-group">
				<div class="col-sm-offset-2 col-sm-8">
					<button type="button" class="btn btn-default" id="findPw">찾기</button>
					<button type="button" class="btn btn-default" onclick="location.href='/member/findId'">아이디 찾기</button>
				</div>
			</div>
		</form>

	</div>
</body>
</html>