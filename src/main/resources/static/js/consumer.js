$(function() {//페이지가 로딩될때
	showList();
	showPage();
}); //page loading function end  

let reviewUL = $(".chat");  // 클래스가 chat인거를 찾는다.(read.jsp에 있음)
let reviewPageFooter = $(".panel-footer");

function showList() {
	// 비동기 통신인데 파라미터 형식이 json. 값은 read.jsp에 ${}있음
	getList({ contentsno: contentsno, sno: sno, eno: eno })
		.then(list => {  // 프로미스
			let str = ""

			for (var i = 0; i < list.length; i++) {
				str += "<li class='list-group-item' data-rnum='" + list[i].rnum + "'>";
				str += "<div><div class='header'><strong class='primary-font'>" + list[i].id + "</strong>";
				str += "<small class='pull-right text-muted'>" + list[i].regdate + "</small></div>";
				str += replaceAll(list[i].content, '\n', '<br>') + "</div></li>";
			}

			reviewUL.html(str);
		});

}//showList() end

function replaceAll(str, searchStr, replaceStr) { // replaceAll 함수 
	return str.split(searchStr).join(replaceStr); // split으로 나눠서 배열로 만들고 join으로 하나의 문자열로 만듦
}

let param = '';
param = "nPage=" + nPage;  //변수에 값을 넣음
param += "&contentsno=" + contentsno;  //detail.jsp 에서 선언한 변수를 가져다가 씀

function showPage() {
	getPage(param)
		.then(paging => {
			console.log(paging);
			let str = "<div><small class='text-muted'>" + paging + "</small></div>";

			reviewPageFooter.html(str);
		});
}

let modal = $(".modal");
let modalInputContent = modal.find("textarea[name='content']");

let modalModBtn = $("#modalModBtn");
let modalRemoveBtn = $("#modalRemoveBtn");
let modalRegisterBtn = $("#modalRegisterBtn");

$("#modalCloseBtn").on("click", function(e) {
	modal.modal('hide');
});

$("#addReviewBtn").on("click", function(e) {
	modalInputContent.val("");
	modal.find("button[id !='modalCloseBtn']").hide();
	
	modalRegisterBtn.show();
	$(".modal").modal("show");

});

// 댓글 생성
modalRegisterBtn.on("click", function(e) {

	if (id==""){
		alert("로그인후 이용해주세요")
		return;
	}
	
	if (modalInputContent.val() == '') {
		alert("리뷰를 입력하세요")
		return;
	}

	let review = {   // json 객체로 만듦
		content: modalInputContent.val(),
		id: id,
		contentsno: contentsno
	};
	add(review)
		.then(result => {
			modal.find("input").val("");
			modal.modal("hide");

			showList();  //목록 불러오고
			showPage();  // 페이지를 보여줌

		}); //end add

}); //end modalRegisterBtn.on

//댓글 조회 클릭 이벤트 처리 
$(".chat").on("click", "li", function(e) {  //클릭한 li의 값을 가져옴

	let rnum = $(this).data("rnum");

	get(rnum)  // 비동기통신 요청, 결과를 get으로 뽑아옴
		.then(review => {

			modalInputContent.val(review.content);
			modal.data("rnum", review.rnum);

			modal.find("button[id !='modalCloseBtn']").hide();
			
			if(id==review.id){
				
			modalModBtn.show();
			modalRemoveBtn.show();
}
			$(".modal").modal("show");

		});
});

// 댓글 수정
modalModBtn.on("click", function(e) {  //수정
	
	if (id==""){
		alert("로그인후 이용해주세요")
		return;
	}

	let review = { rnum: modal.data("rnum"), content: modalInputContent.val() }; //자바 스크립트 객체
	update(review)
		.then(result => {
			modal.modal("hide");
			showList();
			showPage();
		});
});//modify

//댓글 삭제
modalRemoveBtn.on("click", function(e) {
	
	if (id==""){
		alert("로그인후 이용해주세요")
		return;
	}

	let rnum = modal.data("rnum");
	remove(rnum)
		.then(result => {
			modal.modal("hide");
			showList();
			showPage();
		});

});//remove

