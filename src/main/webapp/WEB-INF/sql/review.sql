use webtest;

 create table review(
   rnum int not null auto_increment primary key,
   content varchar(500) not null,
   regdate date not null,
   id varchar(10) not null,
   contentsno int(7) not null,
   foreign key (contentsno) references contents(contentsno)
);

insert into review(content, regdate, id, contentsno)
values("상품이 좋아요", "2022-06-21", "user1", 13);

select * from review;