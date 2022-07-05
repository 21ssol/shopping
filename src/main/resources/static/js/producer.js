console.log("*****Review Module........");
function getList(param) {  // 댓글 목록을 비동기 통신으로
	let contentsno = param.contentsno;
	let sno = param.sno;
	let eno = param.eno;
	return fetch(`/review/list/${contentsno}/${sno}/${eno}`, { method: 'get' })
		.then(response => response.json())  // 리턴되어지는 값(결과값)을 json으로 받는다.
		.catch(console.log)  // 문제시 출력. 프로미스로 받는다.(.then)
}

function getPage(param) {  // 댓글 페이징을 비동기 통신으로
	let url = `/review/page?${param}`;
	console.log(url);
	return fetch(url, { method: 'get' })
		.then(response => response.text())
		.catch(console.log)
}

function add(review) {
	return fetch('/review/create', {
		method: 'post',
		body: JSON.stringify(review),
		headers: { 'Content-Type': "application/json; charset=utf-8" }
	})
		.then(response => response.json())
		.catch(console.log);
}

function get(rnum) {
	return fetch(`/review/${rnum}`, { method: 'get' })
		.then(response => response.json())
		.catch(console.log);
}

function update(review) {
	return fetch(`/review/`, {
		method: 'put',
		body: JSON.stringify(review),
		headers: { 'Content-Type': "application/json; charset=utf-8" }
	})
		.then(response => response.text())
		.catch(console.log);
}
// 요청 uri이 같아도 review 방식이 다르기 때문에 괜찮다(method=delete)
function remove(rnum) {
	return fetch(`/review/${rnum}`, { method: 'delete' })
		.then(response => response.text())
		.catch(console.log);
}