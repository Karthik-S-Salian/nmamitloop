---
title: Bookshop DB
branches: ["cs","is","aiml","aids","cce"]
subject : dbms
sem: 4
type: program
---

<pre>
VI. The following tables are maintained by a book dealer:

AUTHOR (author-id: int, name: string, city: string, country: string)
PUBLISHER (publisher-id: int, name: string, city: string, country: string)
CATALOG (book-id: int, title: string, author-id: int, publisher-id: int, category-id: int, year: 
int, price: int)
CATEGORY (category-id: int, description: string)
ORDER-DETAILS (order-no: int, book-id: int, quantity: int)

1. Find the author of the book which has maximum sales.
2. Increase the price of the books published by a specific publisher by 10%
3. Find the number of orders for the book that has minimum sales. 
</pre>


```sql
use bookshop

create table AUTHOR
		(
			authorid int primary key,
			aname  varchar(20),
			city	varchar(20),
			country	varchar(20)
		)


insert into AUTHOR values(110,'Elmasri','Houston','Canada')
insert into AUTHOR values(111,'sebesta','mangalore','India')
insert into AUTHOR values(112,'Elmasri','Houston','Canada')
insert into AUTHOR values(113,'Bharath K','Bangalore','India')
insert into AUTHOR values(114,'Willy Z','California','USA')
insert into AUTHOR values(115,'Salma','Dakha','Bangladesh')



create table PUBLISHER
		(
			pubid int primary key,
			pname  varchar(20),
			city	varchar(20),
			country	varchar(20)
		)	


insert into PUBLISHER values(201,'McGRAW','mangalore','India')
insert into PUBLISHER values(202,'Pearson','Bangalore','India')
insert into PUBLISHER values(203,'GKP','Bangalore','India')
insert into PUBLISHER values(204,'MediTech','Delhi','India')
insert into PUBLISHER values(205,'Sun','Ahmadbad','India')



create table CATEGORY
		(
			catid int primary key ,
	      	descript varchar(30),				
		)	


insert into CATEGORY values(1,'All children Books')
insert into CATEGORY values(2,'Cooking Books')
insert into CATEGORY values(3,'Popular Novels')
insert into CATEGORY values(4,'Small Story Books')
insert into CATEGORY values(5,'Medical Books')



create table CATALOGUE
		(
			bookid int primary key,
			title  varchar(20),
			pubid int,
			authorid int,
			catid int, 
			yr int,
			price int,
			foreign key(pubid) references PUBLISHER(pubid) on delete cascade on update cascade,
			foreign key(authorid) references AUTHOR(authorid) on delete cascade on update cascade,
			foreign key(catid) references CATEGORY(catid) on delete cascade on update cascade
		)	


select * from PUBLISHER

insert into CATALOGUE values(301,'Panchatantra',201,111,1,2000,300)
insert into CATALOGUE values(302,'Vegetables',202,111,2,2000,400)
insert into CATALOGUE values(303,'Yogasana',203,112,5,2002,600)
insert into CATALOGUE values(304,'Stories of Village',204,113,4,2005,100)
insert into CATALOGUE values(305,'Triangle',205,114,3,2008,1000)
insert into CATALOGUE values(306,'Naughtiest Girl',201,110,3,2007,1500)
insert into CATALOGUE values(307,'Cookery',205,115,2,2006,100)


select * from CATALOGUE

create table ORDER_DET
		(
			ordno int ,
			bookid int,
			qty int,
			primary key (ordno,bookid),
			foreign key(bookid) references CATALOGUE(bookid) on delete cascade on update cascade,			
		)	
		

insert into ORDER_DET values(1,301,10)
insert into ORDER_DET values(1,302,6)
insert into ORDER_DET values(1,307,23)

insert into ORDER_DET values(2,301,15)
insert into ORDER_DET values(2,304,11)

insert into ORDER_DET values(3,304,15)

insert into ORDER_DET values(4,301,3)
insert into ORDER_DET values(4,305,8)

insert into ORDER_DET values(5,303,20)
insert into ORDER_DET values(5,306,6)
insert into ORDER_DET values(5,305,7)


select * from AUTHOR
select * from CATALOGUE
select * from CATEGORY
select * from ORDER_DET
select * from PUBLISHER

**********************LAB Queries******************************

--1.  Find the author of the book which has maximum sales.

--Solution 1: 
select A.authorid ,A.aname  ,A.city ,C.bookid,
sum(O.qty) as QTY_SUM   
from author A, CATALOGUE C,order_det O 
where A.authorid  =  C.authorid 
and C.bookid = O.bookid  
group by A.authorid, A.aname,A.city,C.bookid
having sum(qty) >= all (select sum(qty)  
						from order_det 
						group by bookid)


--Solution 2:
create view V1 as 
select A.authorid ,A.aname  ,A.city ,C.bookid,sum(O.qty) 
as QTY_SUM  from author A, CATALOGUE C,order_det O 
where A.authorid  =  C.authorid 
and C.bookid = O.bookid 
group by A.authorid, A.aname,A.city,C.bookid

select * from  V1   where QTY_SUM = (select max(QTY_SUM) from temp)


--Solution 3:
select A.authorid ,A.aname  ,A.city ,C.bookid,sum(O.qty)
as QTY_SUM into tb_auth1  
from AUTHOR A, CATALOGUE C,ORDER_DET O 
where A.authorid  =  C.authorid 
and C.bookid = O.bookid  
group by A.authorid, A.aname,A.city,C.bookid

select * from  tb_auth   where QTY_SUM in (select max(QTY_SUM) from tb_auth)



--2. Increase the price of the books published by a specific publisher by 10%

update  CATALOGUE set price = price * 1.1 
where pubid in ( select pubid from publisher where pname ='Pearson')

--3.	Find the number of orders for the book that has minimum sales. 

select bookid, sum(ordno) as NoOfOrders
from ORDER_DET
group by ordno,bookid having sum(qty)<=ALL(select  sum(qty)
                                            from ORDER_DET
                                            group by bookid)


*************************EXTRA PRACTICE QUERIES*********************
1. Give the details of the authors who have 2 or more books in the
catalog and the price of the books is greater than the average
price of the books in the catalog and the year of publication is
after 2000.

select A.authorid,A.aname,A.city from AUTHOR A, CATALOGUE C
where A.authorid  =  C.authorid group by A.authorid, A.aname,A.city
having sum(C.price) > (select avg(price) from CATALOGUE)
and count(*)>=2
 

select A.authorid ,A.aname  ,A.city ,sum(O.qty) as QTY_SUM   from author A, catalog C,order_det O 
where A.authorid  =  C.authorid 
and C.bookid = O.bookid  group by A.authorid, A.aname,A.city,C.bookid
having sum(qty) >= all (select sum(qty)  from order_det group by bookid)

(select A.authorid ,A.aname  ,A.city ,C.bookid,sum(O.qty)  from author A, catalog C,order_det O
where A.authorid  =  C.authorid 
and C.bookid = O.bookid)   group by A.authorid, A.aname,A.city,C.bookid 
having sum(qty) = (select max(qty)  from temp1 )

create view temp as 
select A.authorid ,A.aname  ,A.city ,C.bookid,sum(O.qty) as QTY_SUM  from author A, catalog C,order_det O 
where A.authorid  =  C.authorid 
and C.bookid = O.bookid  group by A.authorid, A.aname,A.city,C.bookid

select * from  temp   where QTY_SUM = (select max(QTY_SUM) from temp)


select * from  tb_auth   where QTY_SUM in (select max(QTY_SUM) from tb_auth)




select count(*) as no_of_orders from order_det
where bookid in (

	select bookid  from order_det  group by bookid
	having sum(qty) >= all (select sum(qty)  from order_det group by bookid)
    )
group by bookid


1.	Give the details of the authors who have 2 or more books in the catalog and the price of the 
books is greater than the average price of the books in the catalog and the year of publication 
is after 2000.(*)

select A.authorid,A.aname,A.city,A.country
from AUTHOR A,CATALOGUE C
where C.authorid=A.authorid and C.yr=2000
group by A.authorid,A.aname,A.city,A.country
having count(distinct C.bookid)>=2 and sum(C.price) >(select AVG(price) from CATALOGUE)

2.	Find the author of the book which has maximum sales.(*)

select A.authorid,A.aname
from AUTHOR A,CATALOGUE C,ORDER_DET O
where A.authorid=C.authorid and C.bookid=O.bookid
group by A.authorid,A.aname,C.bookid
having SUM(O.qty)>=ALL( select SUM(O1.qty)
                        from AUTHOR A1,CATALOGUE C1,ORDER_DET O1
                        where A1.authorid=C1.authorid and C1.bookid=O1.bookid
                        group by A1.authorid,A1.aname,C1.bookid)
                      
3.	List the order-no# for orders that were ordered for every book of a specific author.

select distinct O.ordno
from ORDER_DET O
where not exists( select C.bookid
                  from CATALOGUE C,AUTHOR A
                  where A.authorid=C.authorid and A.aname='Elmasri'
                  and C.bookid not in( select O1.bookid
                                       from ORDER_DET O1
                                       where O.ordno=O1.ordno))
                                       
4.	List the order-no# for orders that were ordered for every book published by a specific 
publisher.

select distinct O.ordno
from ORDER_DET O
where not exists( select C.bookid
                  from CATALOGUE C,PUBLISHER P
                  where C.pubid=P.pubid and P.pname='Pearson'
                  and C.bookid not in( select O1.bookid
                                       from ORDER_DET O1
                                       where O.ordno=O1.ordno))

5.	List the order-no# for orders that were ordered for every book of a specific category. 

select distinct O.ordno
from ORDER_DET O
where not exists( select C.bookid
                  from CATALOGUE C,CATEGORY E
                  where C.catid=E.catid and E.catid=1
                  and C.bookid not in( select O1.bookid 
                                       from ORDER_DET O1
                                       where O1.ordno=O.ordno))
                                       
6.	List names of authors who have written atleast one book in every category.

select A.aname
from AUTHOR A
where not exists( select distinct catid
                  from CATEGORY
                  where catid not in( select distinct C.catid
                                        from CATALOGUE C
                                        where C.authorid=A.authorid))

7.	List names of authors who have written atleast two books in every category.

select A.aname 
from AUTHOR A
where not exists( select distinct catid
                  from CATEGORY 
                  where catid not in( select C.catid 
                                      from CATALOGUE C
                                      where C.authorid=A.authorid
                                      group by C.catid
                                      having count(C.bookid)>=2))
                                      
8.	List the order-no# for orders that were ordered for every book published by a specific 
publisher and written by a specific author.

select distinct O.ordno
from ORDER_DET O
where not exists( select C.bookid
                  from CATALOGUE C,AUTHOR A,PUBLISHER P
                  where C.authorid=A.authorid and C.pubid=P.pubid 
                  and A.aname='sebesta' and P.pname='McGRAW'
                  and C.bookid not in( select bookid
                                       from ORDER_DET
                                       where O.ordno= ordno))
                                       
9.	Find the category of the book which has maximum sales.

select C.catid
from CATEGORY C,ORDER_DET O,CATALOGUE E
where C.catid=E.catid and O.bookid=E.bookid
group by C.catid
having SUM(O.qty) >=ALL( select SUM(O1.qty)
                         from CATEGORY C1,ORDER_DET O1,CATALOGUE E1
                         where C1.catid=E1.catid and O1.bookid=E1.bookid
                         group by C1.catid)

10.	Find the publisher of the book which has maximum sales.

select P.pname,P.pubid
from PUBLISHER P,CATALOGUE C,ORDER_DET O
where C.pubid=P.pubid and O.bookid=C.bookid
group by P.pubid,P.pname
having count(O.qty)>=all( select count(O1.qty)
                          from PUBLISHER P1,CATALOGUE C1,ORDER_DET O1
                          where C1.pubid=P1.pubid and O1.bookid=C1.bookid
                          group by P1.pubid,P1.pname)
                          
11.	Find the price of the book which has maximum sales.

select C.price
from CATALOGUE C,ORDER_DET O
where C.bookid=O.bookid
group by C.bookid,C.price
having sum(O.qty)>=ALL( select SUM(O1.qty)
                        from CATALOGUE C1,ORDER_DET O1
                        where C1.bookid=O1.bookid
                        group by C1.bookid)
                        
13.	Find the average amount earned from the book which has maximum sales.

select avg(C.price*O.qty) as average_amount
from CATALOGUE C,ORDER_DET O
where C.bookid=O.bookid
group by C.bookid
having sum(O.qty)>=ALL( select SUM(O1.qty)
                        from CATALOGUE C1,ORDER_DET O1
                        where C1.bookid=O1.bookid
                        group by C1.bookid)
                        
14.	 Find the number of books that were sold for the book which has maximum sales.

select SUM(O.qty) as max_books
from CATALOGUE C,ORDER_DET O
where C.bookid=O.bookid
group by C.bookid
having sum(O.qty)>=ALL( select SUM(O1.qty)
                        from CATALOGUE C1,ORDER_DET O1
                        where C1.bookid=O1.bookid
                        group by C1.bookid)
                        
15.	Find the publication year of the book which has maximum sales.

select C.yr
from CATALOGUE C,ORDER_DET O
where C.bookid=O.bookid
group by C.bookid,C.yr
having SUM(O.qty) >=ALL( select SUM(O1.qty)
                         from CATALOGUE C1,ORDER_DET O1
                         where C1.bookid=O1.bookid
                         group by C1.bookid)
                   
16.	List CATEGORY, #BOOKID, #OFBOOKS, #OFPRICE where   #OFBOOKS is the total number of books ordered and #OFPRICE is the total amount 
earned by selling that book

select C.catid,C1.bookid,SUM(O.qty) as total_no_of_books, SUM(O.qty*C1.price) as Total_amt
from CATEGORY C,CATALOGUE C1,ORDER_DET O
where C.catid=C1.catid and C1.bookid=O.bookid
group by C.catid,C1.bookid

17.	List the details of publishers (include name, city, country) for publishers who have published at least 2 books in every category

select P.pname,P.city,P.country
from PUBLISHER P
where not exists( select catid
                  from CATEGORY 
                  where catid not in (select C.catid
                                      from CATALOGUE C,CATEGORY C1
                                      where C.catid=C1.catid
                                      and C.pubid=P.pubid
                                      group by C.catid,C.pubid
                                      having count(C.bookid)>=1))
                                      
a)Give   the details of  available books  in   each   category.

select C.catid,C.bookid,A.aname,P.pname,C.title
from AUTHOR A,CATALOGUE C,PUBLISHER P,CATEGORY B
where C.catid=B.catid and C.authorid=A.authorid and C.pubid=P.pubid
group by C.catid,C.bookid,A.aname,P.pname,C.title

b)Give the  details of total quantity   for  each   book.
( Details include orderno , bookid, title, authored ,author name, total qnty).

select O.ordno,C.bookid,C.authorid,A.aname,O.qty
from ORDER_DET O,AUTHOR A,CATALOGUE C
where O.bookid=C.bookid and A.authorid=C.authorid
group by O.ordno,C.bookid,C.authorid,A.aname,O.qty

c) Give the details the book having maximum orders

select C.bookid,A.aname,P.pname,C.title
from AUTHOR A,CATALOGUE C,PUBLISHER P,ORDER_DET O
where P.pubid=C.pubid and A.authorid=C.authorid and O.bookid=C.bookid
group by C.bookid,A.aname,P.pname,C.title
having count(O.ordno)>=ALL ( select count(O1.ordno)
                           from AUTHOR A1,CATALOGUE C1,PUBLISHER P1,ORDER_DET O1
                           where P1.pubid=C1.pubid and A1.authorid=C1.authorid 
                           and O1.bookid=C1.bookid
                           group by C1.bookid,A1.aname,P1.pname,C1.title)
                                        
d)Find the category of the book which has maximum sales

select C.catid,C.descript
from CATEGORY C,CATALOGUE C1,ORDER_DET O
where C.catid=C1.catid and O.bookid=C1.bookid
group by C1.bookid,C.catid,C.descript
having SUM(O.qty)>=ALL( select SUM(O1.qty)
                        from CATEGORY C3,CATALOGUE C2,ORDER_DET O1
                        where C3.catid=C2.catid and O1.bookid=C2.bookid
                        group by C2.bookid)
                        
e)Find the category/author of the book which has minimum orders.

select C.descript
from CATEGORY C,CATALOGUE B,ORDER_DET O
where C.catid=B.catid and O.bookid=B.bookid
group by B.bookid,C.descript
having count(O.ordno)<=ALL( select count(O1.ordno)
                        from CATEGORY C1,CATALOGUE B1,ORDER_DET O1
                        where C1.catid=B1.catid and O1.bookid=B1.bookid
                        group by B1.bookid)
                        
f)What is the total amount earned by the dealer from the book having
maximum sales.

select SUM(O.qty*C.price) as total_profit
from CATALOGUE C,ORDER_DET O
where C.bookid=O.bookid
group by C.bookid
having SUM(O.qty)>= ALL( select SUM(O1.qty)
                         from CATALOGUE C1,ORDER_DET O1
                         where C1.bookid=O1.bookid
                         group by C1.bookid)
                         
h) Find the category(if any)  having all its books ordered.

select C.catid
from CATEGORY C
where not exists( select B.bookid
                  from CATALOGUE B
                  where B.catid=C.catid and B.bookid not in( select distinct bookid
                                                             from ORDER_DET))


```