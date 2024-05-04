---
title: Bank DB
branches: ["cs","is","aiml","aids","cce"]
subject : dbms
sem: 4
type: program
---

<pre>
V. Consider the following database for a banking enterprise:

BRANCH (branch-name: string, branch-city: string, assets: real)
ACCOUNT (accno: int, branch-name: string, balance: real)
DEPOSITOR (customer-name: string, accno: int)
CUSTOMER (customer-name: string, customer-street: string, customer-city: string)
LOAN (loan-number: int, branch-name: string, amount: real)
BORROWER (customer-name: string, loan-number: int)

1. Find all the customers who have atleast 2 accounts at all the branches located in a specific city.
2. Find all the customers who have accounts in atleast 1 branch located in all the cities
3. Find all the customers who have accounts in atleast 2 branches located in a specific city.
</pre>


```sql
 

V.  Consider the following database for a banking enterprise:
BRANCH (branch-name: string, branch-city: string, assets: real)
ACCOUNT (accno: int, branch-name: string, balance: real)
DEPOSITOR (customer-name: string, accno: int)
CUSTOMER (customer-name: string, customer-street: string, customer-city: string)
LOAN (loan-number: int, branch-name: string, amount: real)
BORROWER (customer-name: string, loan-number: int)


1.	Find all the customers who have atleast 2  accounts 
    at all the branches located in a specific city.
2.	Find all the customers who have accounts in atleast 
    1 branch located in all the cities
3.	Find all the customers who have accounts in atleast
    2 branches located in a specific city.


create database  bank

use bank

create table BRANCH(
		   	bname varchar(15)primary key,
			bcity varchar(15),
			assets real
		   )

insert into BRANCH values('SBI_Nitte','karkala',200000)
insert into BRANCH values('SBI_Kanthavara','karkala',300000)
insert into BRANCH values('SBI_PortRoad','Mangalore',100000)
insert into BRANCH values('SBI_Kavoor','Mangalore',300000)
insert into BRANCH values('SBI_Kottara','Mangalore',500000)
insert into BRANCH values('SBI_Padubidri','Udupi',500000)
insert into BRANCH values('SBI_Kaup','Udupi',500000)
#insert into BRANCH values('TESTleftjoin','Udupi',500000)

	
delete from BRANCH

select * from BRANCH

create table ACCOUNT(
			accno int, 
			bname varchar(15),
			balance real,
			primary key(accno),
			foreign key(bname) references BRANCH(bname) on delete cascade on update cascade
		    )			
			
select * from BRANCH

insert into ACCOUNT values(111,'SBI_Kanthavara',6000)
insert into ACCOUNT values(222,'SBI_Kaup',10000)
insert into ACCOUNT values(333,'SBI_Kavoor',300000)
insert into ACCOUNT values(444,'SBI_Kottara',17000)
insert into ACCOUNT values(555,'SBI_Padubidri',111000)
insert into ACCOUNT values(666,'SBI_PortRoad',456000)
insert into ACCOUNT values(777,'SBI_Nitte',456000)

insert into ACCOUNT values(1001,'SBI_Kanthavara',6000)
insert into ACCOUNT values(1002,'SBI_Kaup',10000)
insert into ACCOUNT values(1003,'SBI_Kavoor',300000)
insert into ACCOUNT values(1004,'SBI_Kottara',17000)
insert into ACCOUNT values(1005,'SBI_Padubidri',111000)
insert into ACCOUNT values(1006,'SBI_PortRoad',456000)
insert into ACCOUNT values(1007,'SBI_Nitte',456000)


select * from ACCOUNT

create table CUSTOMER(
			cname varchar(20)primary key,
			cstreet varchar(25),
			ccity varchar(20)
		     )


insert into CUSTOMER values('Anvesh','3rd main','karkala')
insert into CUSTOMER values('Bindiya','4th main','karkala')
insert into CUSTOMER values('Charles','4th block','mangalore')
insert into CUSTOMER values('Divya','456 nagar','mangalore')
insert into CUSTOMER values('Sinchan','452 street','Udupi')
insert into CUSTOMER values('Ganya','452 street','Udupi')


select * from CUSTOMER
 

create table DEPOSITOR(
			cname varchar(20),
			accno int,
			primary key(cname,accno),
			foreign key(cname) references CUSTOMER(cname) on delete cascade on update cascade,
			foreign key(accno) references ACCOUNT(accno) on delete cascade on update cascade,
			unique(accno)			
		      )

insert into DEPOSITOR values('Anvesh',111)
insert into DEPOSITOR values('Bindiya',222)
insert into DEPOSITOR values('Bindiya',555)
insert into DEPOSITOR values('Sinchan',333)
insert into DEPOSITOR values('Divya',444)
insert into DEPOSITOR values('Sinchan',666)

insert into DEPOSITOR values('Ganya',1001)
insert into DEPOSITOR values('Ganya',1002)
insert into DEPOSITOR values('Ganya',1003)
insert into DEPOSITOR values('Ganya',1004)
insert into DEPOSITOR values('Ganya',1005)
insert into DEPOSITOR values('Ganya',1006)
insert into DEPOSITOR values('Ganya',1007)

select * from depositor

create table LOAN (
			loanno int, 
			bname varchar(15),
			amount real,
			primary key(loanno),
			foreign key(bname) references BRANCH(bname) on delete cascade on update cascade
			
		 )


insert into LOAN values(11,'SBI_Kanthavara',12000)
insert into LOAN values(22,'SBI_Kaup',11000)
insert into LOAN values(33,'SBI_Kavoor',16000)
insert into LOAN values(44,'SBI_Kottara',13000)
insert into LOAN values(55,'SBI_Nitte',12000)
insert into LOAN values(66,'SBI_Padubidri',10000)
insert into LOAN values(77,'SBI_PortRoad',20000)

select * from LOAN

create table BORROWER(
			cname varchar(20),
			loanno int
			primary key(cname,loanno),
			foreign key(cname) references CUSTOMER(cname) on delete cascade on update cascade,
			foreign key(loanno) references LOAN(loanno) on delete cascade on update cascade,
			unique(loanno)
			)

select * 
from ACCOUNT A, DEPOSITOR D,LOAN L
where A.accno=D.accno and L.bname=A.bname


insert into BORROWER values('Anvesh',11)
insert into BORROWER values('Bindiya',22)
insert into BORROWER values('Sinchan',33)
insert into BORROWER values('Divya',44)
insert into BORROWER values('Bindiya',66)
insert into BORROWER values('Sinchan',77)


select * from BORROWER

*******************Lab Queries******************************

1.	Find all the customers who have atleast 2  accounts 
    at all the branches located in a specific city.

	
SELECT DISTINCT D1.cname
FROM DEPOSITOR D1
JOIN ACCOUNT A1 ON D1.accno = A1.accno
WHERE NOT EXISTS (
    SELECT bname
    FROM BRANCH B
    WHERE B.bcity = 'Udupi'
    AND NOT EXISTS (
        SELECT *
        FROM DEPOSITOR D2
        JOIN ACCOUNT A2 ON D2.accno = A2.accno
        WHERE D2.cname = D1.cname
        AND A2.bname = B.bname
    )
)
GROUP BY D1.cname
HAVING COUNT(DISTINCT A1.bname) >= 2;

2.	Find all the customers who have accounts in atleast 
    1 branch located in all the cities
	
	select cname 
	from CUSTOMER C
	where  not exists(select distinct bcity
	from BRANCH where bcity not in(select B.bcity
	                              from BRANCH B, ACCOUNT A, DEPOSITOR D
								  where D.accno=A.accno 
								  and A.bname= B.bname
								  and D.cname=C.cname))

3.	Find all the customers who have accounts in atleast
    2 branches located in a specific city.

SELECT DISTINCT D.cname
FROM DEPOSITOR D
JOIN ACCOUNT A ON D.accno = A.accno
JOIN BRANCH B ON A.bname = B.bname
WHERE B.bcity = 'Mangalore'
GROUP BY D.cname
HAVING COUNT(DISTINCT B.bname) >= 2;

*********************VIEWS IN SQL**********************

CREATE VIEW HighValueAccounts AS
SELECT accno, bname, balance
FROM ACCOUNT
WHERE balance > 10000;

select * from HighValueAccounts 

VIEW 2: Create a view named "LoanDetails" that shows the loan number, 
customer name, and loan amount for loans greater than $50,000.

CREATE VIEW LoanDetails AS
SELECT l.loanno, b.cname, l.amount
FROM LOAN l JOIN BORROWER b ON l.loanno = b.loanno
WHERE l.amount > 10000;

DROP VIEW IF EXISTS LoanDetails;

select cname,sum(amount) 
from LoanDetails
group by cname

In SQL, a view is a virtual table that is based on the 
result of a SQL query. It does not store any data itself; 
instead, it is a saved SQL query that you can 
as if it were a table.
Views can simplify complex queries, improve security by 
restricting access to certain columns or rows of data, and 
provide a way to encapsulate frequently used queries.

*************************JOINS IN SQL**************************

1. Query to Retrieve Account Details with Customer Information:

SELECT a.accno, a.bname, a.balance, c.cname, c.cstreet, c.ccity
FROM ACCOUNT a JOIN DEPOSITOR d ON a.accno = d.accno
JOIN CUSTOMER c ON d.cname = c.cname;

2.Query to Get Loan Information with Borrower Details:

SELECT l.loanno, l.bname, l.amount, b.cname
FROM LOAN l JOIN BORROWER b ON l.loanno = b.loanno;

3. Query to Retrieve Total Assets for Each Branch:

SELECT b.bname, SUM(a.balance) AS total_assets
FROM BRANCH b LEFT JOIN ACCOUNT a ON b.bname = a.bname
GROUP BY b.bname;

select * 
from BRANCH b LEFT JOIN ACCOUNT a ON b.bname = a.bname


*****************************EXTRA QUERIES***********************


1. Find all the customers who have at least two 
accounts at the Main branch.

select D.cname  from DEPOSITOR D , ACCOUNT A
where D.accno = A.accno and A.bname = 'state_udupi'  group by D.cname having  count(*) >= 2

2A. Find all the customers who have an account at all the branches
located in a specific city.


--select C.cname from CUSTOMER  C
--where not exists(
--	select bname from  BRANCH where bcity  = 'karkala' and bname not in
--
-- 			(select distinct(A.bname) from ACCOUNT A , BRANCH B,DEPOSITOR D
--			 where A.bname = B.bname
--			 and D.accno = A.accno
--			and B.bcity  = 'karkala' 
--			and D.cname = C.cname )
--		)			
--
--

OR

select C.cname from CUSTOMER  C
where not exists(
	select B.bname from  BRANCH B where bcity  = 'karkala' and B.bname not in

 			(select distinct(A.bname) from ACCOUNT A,DEPOSITOR D
			 where D.accno = A.accno 
			 and  A.bname = B.bname
			and D.cname = C.cname )
		)	

OR


--select C.cname from CUSTOMER  C
--where not exists(
--		   select B.bname from  BRANCH B where  B.bcity  = 'karkala'
--		     and not exists(
--				    (select *  from ACCOUNT A ,  DEPOSITOR D
--				     where  D.accno = A.accno
--   				     and A.bname  = B.bname
--				     and D.cname = C.cname ))
--		)			









or 

select * from CUSTOMER

4)Find all the customers who have accounts in atleast 1 branch located in all the cities

select C.cname from CUSTOMER  C
where not exists(
	           select distinct(B.bcity)   from  BRANCH B 
		  where  not exists
                        (
                          
 			 select A.bname from ACCOUNT A ,DEPOSITOR D
			 where  D.accno = A.accno
			 and D.cname =C.cname  and  A.bname  in (select bname from BRANCH where bcity = B.bcity)

			)
		)			

OR


select C.cname from CUSTOMER  C
where  not  exists(   
	       
	     select distinct(B1.bcity)   from  BRANCH B1 
	     where not exists(

	      select  count( distinct B.bname) from BRANCH B, ACCOUNT A ,DEPOSITOR D
               where A.bname = B.bname
	       and D.accno = A.accno
	       and B.bcity  = B1.bcity
	       and D.cname = C.cname   group by B.bcity having count(*) >=1))



select * from customer
select * from branch


3)Find all the customers who have accounts in atleast 2 branches located in a specific city.

select C.cname from CUSTOMER  C
where  exists(   
	       select  count( distinct B.bname) from BRANCH B, ACCOUNT A ,DEPOSITOR D
               where A.bname = B.bname
	       and D.accno = A.accno
	       and B.bcity  = 'karkala'
	       and D.cname = C.cname   group by B.bcity having count(*) >=2)

Find all the customers who have accounts in atleast 2 branches located in all the cities



select C.cname from CUSTOMER  C
where  not  exists(   
	       
	     select distinct(B1.bcity)   from  BRANCH B1 
	     where not exists(

	      select  count( distinct B.bname) from BRANCH B, ACCOUNT A ,DEPOSITOR D
               where A.bname = B.bname
	       and D.accno = A.accno
	       and B.bcity  = B1.bcity
	       and D.cname = C.cname   group by B.bcity having count(*) >=2))



select * from customer
select * from branch

select * from BORROWER

select bname from  BRANCH B where B.bcity  = 'karkala' 

select L.bname from  BORROWER B , LOAN L   where L.loanno = B.loanno and B.cname = 'Rajesh'


Find the branch name that has maximum number of customers in a specific city

select D.cname, A.bname, count(*) from ACCOUNT A, DEPOSITOR D 
where A.accno = D.accno group by D.cname , A.bname


select   A.bname,count(distinct D.cname)   from ACCOUNT A, DEPOSITOR D 
where A.accno = D.accno group by  A.bname
having   count(distinct D.cname) >= all (select   count(distinct D.cname)    from ACCOUNT A, DEPOSITOR D 
where A.accno = D.accno group by  A.bname)

select * from ACCOUNT

1)Give the  details of  all the branches having more than two account . 
select B.bname,B.bcity
from BRANCH B,ACCOUNT A
where B.bname=A.bname
group by B.bname,B.bcity
having count(A.accno)>=2

2)Display  the  loan details of each customer.
(Details include custname,branchname,no of loans , total amount at the branch)
select B.cname,L.bname,COUNT(L.loanno),SUM(L.amount)
from LOAN L,BORROWER B
where L.loanno=B.loanno
group by B.cname,L.bname

1.	Find all the customers who have at least two accounts at the Main branch. (*)

select D.cname
from DEPOSITOR D,ACCOUNT A
where A.accno=D.accno and A.bname='state_udupi'
group by D.cname
having count(*)>=2

2.	Find all the customers who have an account at all the branches located in a specific city(*)

select distinct D.cname
from DEPOSITOR D
where not exists( select B.bname
                  from BRANCH B
                  where B.bcity='karkala'
                  and B.bname not in( select bname
                                      from ACCOUNT A,DEPOSITOR D1
                                      where A.accno=D1.accno
                                      and A.bname=B.bname
                                      and D1.cname=D.cname))
                                      
3.	Find all the customers who have accounts in atleast 2 branches located in a specific city.

select D.cname
from DEPOSITOR D,ACCOUNT A,BRANCH B
where D.accno=A.accno and A.bname=B.bname and B.bcity='karkala'
group by D.cname
having count(*)>=2

4.	Find all the customers who have accounts in atleast 1 branch located in all the cities

select C.cname 
from CUSTOMER  C
where  not  exists(select distinct(B1.bcity)   
                   from  BRANCH B1 
	               where not exists(select  count( distinct B.bname)   
	                                from BRANCH B, ACCOUNT A ,DEPOSITOR D
                                    where A.bname = B.bname
	                                and D.accno =A.accno  and B.bcity  = B1.bcity
	                                and D.cname =C.cname  
	                                group by B.bcity
	                                having count(*) >=1))

5.	Find all the customers who have accounts in atleast 2 branches located in all the cities

select C.cname
from CUSTOMER C
where not exists( select distinct B1.bname
                  from BRANCH B1
                  where not exists( select COUNT(B.bname)
                                    from BRANCH B,DEPOSITOR D,ACCOUNT A
                                    where B.bname=A.bname and D.accno=A.accno
                                    and B.bcity=B1.bcity and D.cname=C.cname
                                    group by B.bcity
                                    having COUNT(*)>=2))
                                    
6.	Find the branch name that has maximum number of customers in a specific city

select B.bname 
from BRANCH B,ACCOUNT A,DEPOSITOR D
where A.accno=D.accno and A.bname=B.bname and B.bcity='karkala'
group by B.bname
having COUNT(distinct D.cname) >=ALL (select COUNT(distinct D1.cname)
                                      from BRANCH B1,ACCOUNT A1,DEPOSITOR D1
                                      where A1.accno=D1.accno and A1.bname=B1.bname
                                      and B1.bcity='karkala'
                                      group by B1.bname)

7.	Find the branch name that has maximum number of accounts in a specific city

select B.bname 
from BRANCH B,ACCOUNT A,DEPOSITOR D
where A.accno=D.accno and A.bname=B.bname and B.bcity='karkala'
group by B.bname
having COUNT(distinct A.accno) >=ALL (select COUNT(A1.accno)
                                      from BRANCH B1,ACCOUNT A1,DEPOSITOR D1
                                      where A1.accno=D1.accno and A1.bname=B1.bname
                                      and B1.bcity='karkala'
                                      group by B1.bname)
                                      
8.	Find the customer name who has deposited maximum amount at branches located in a specific city.
                                      
select D.cname
from DEPOSITOR D,ACCOUNT A,BRANCH B
where A.accno=D.accno and A.bname=B.bname and B.bcity='karkala'
group by D.cname
having SUM(A.balance) >= ALL(select SUM(A1.balance)
                             from DEPOSITOR D1,ACCOUNT A1,BRANCH B1
                             where A1.accno=D1.accno and A1.bname=B1.bname and B1.bcity='karkala'
                             group by D1.cname)
                             
9.List CUSTOMER_NAME,#AMOUNT where #AMOUNT is total amount at a branch located in different cities.

 select D.cname,A.balance,B.bcity
 from ACCOUNT A,DEPOSITOR D,BRANCH B
 where D.accno=A.accno and B.bname=A.bname
 group by B.bcity,D.cname,A.balance
 
10.	Find the customers who have borrowed loan from all the branches located in  a specific city

select distinct B.cname
from BORROWER B
where not exists( select B1.bname
                  from BRANCH B1
                  where B1.bcity='Mangalore'
                  and B1.bname not in( select L.bname 
                                       from BORROWER B2,LOAN L
                                       where B2.loanno=L.loanno and B2.cname=B.cname))
                                       
11.	Find the customers who have borrowed loan from atleast one  branch located in  all the cities

select distinct B.cname
from BORROWER B
where not exists( select distinct B1.bcity
                  from BRANCH B1
                  where not exists( select COUNT(distinct L.bname)
                                    from LOAN L,BORROWER B2,BRANCH C
                                    where L.loanno=B2.loanno and L.bname=C.bname 
                                    and B2.cname=B.cname and C.bcity=B1.bcity
                                    group by C.bcity
                                    having COUNT(*)>=1))
                                    
12.	Find the customers who have borrowed loan from atleast 2  branch located in  all the cities

select distinct B.cname
from BORROWER B
where not exists( select distinct B1.bcity
                  from BRANCH B1
                  where not exists( select count(distinct L.bname)
                                    from LOAN L,BORROWER B2,BRANCH C
                                    where L.loanno=B.loanno and B2.cname=B.cname
                                    and C.bcity=B1.bcity and L.bname=C.bname
                                    group by C.bcity
                                    having COUNT(*)>=2))
                                    
a). Give the  details of  all the branches having more than two account 

select B.bname,B.bcity
from BRANCH B,ACCOUNT A
where B.bname=A.bname
group by B.bname ,B.bcity
having COUNT(distinct A.accno)>=2

b)Display  the  loan details of each customer.

select L.loanno,L.bname,B1.cname
from LOAN L,BRANCH B,BORROWER B1
where L.loanno=B1.loanno and B.bname=L.bname

find the no.of loans in the branch having maximum customers

select B.bname into tb1
from DEPOSITOR D,BRANCH B,ACCOUNT A
where A.bname=B.bname and D.accno=A.accno
group by B.bname
having COUNT(distinct D.cname)>=ALL( select COUNT(distinct D1.cname)
                                     from DEPOSITOR D1,BRANCH B1,ACCOUNT A1
                                     where A1.bname=B1.bname and D1.accno=A1.accno
                                     group by B1.bname)

select * from tb1

select COUNT(distinct L.loanno)
from LOAN L,tb1 T
where L.bname=T.bname

list the customers who have borrowed money from every branch located in a specific city

select C.cname 
from CUSTOMER C
where not exists( select B.bname
                  from BRANCH B
                  where B.bcity='Mangalore'
                  and B.bname not in( select distinct L.bname
                                      from BORROWER B1,LOAN L
                                      where B1.loanno=L.loanno and L.bname=B.bname
                                      and B1.cname=C.cname)) 

list the customer name,NO_OF_LOANS,TOTAL_LOAN_AMOUNT for the customers who have borrowed money from
atleast two branches in their own city

select C.cname into tb
from CUSTOMER C
where exists( select count(distinct B.bname)
              from BRANCH B,LOAN L,BORROWER A
              where L.loanno=A.loanno and B.bname=L.bname
              and A.cname=C.cname and B.bcity=C.ccity
              group by B.bcity
              having count(distinct B.bname)>=2)
              
select * from tb

select T.cname,COUNT(L.loanno) as No_of_loans,sum(L.amount) as Total_Amount
from tb T,LOAN L,BORROWER B
where T.cname=B.cname and L.loanno=B.loanno
group by T.cname

c)Find the customer who is having maximum loans

select C.cname
from BORROWER C,LOAN L
where C.loanno=L.loanno
group by C.cname
having COUNT(distinct L.loanno)>=ALL( select COUNT(distinct L1.loanno)
                                      from LOAN L1,BORROWER B
                                      where L1.loanno=B.loanno
                                      group by B.cname)

d)display the customer�s balance amount at each  branch.

select C.cname,L.bname,sum(L.amount) as total_amount
from BORROWER C,LOAN L     
where L.loanno=C.loanno
group by C.cname,L.bname

e)Give the details of any  branch which has maximum customers.

select B.bname,B.bcity
from BRANCH B,ACCOUNT A,DEPOSITOR D
where B.bname=A.bname and D.accno=A.accno
group by B.bname,B.bcity
having COUNT(distinct D.cname)>=ALL( select COUNT(distinct D1.cname)
                                     from BRANCH B1,ACCOUNT A1,DEPOSITOR D1
                                     where B1.bname=A1.bname and D1.accno=A1.accno
                                     group by B1.bname,B1.bcity)
                                     
g)Find the customer(if any) who does not have an account  at all the  branch located in  
a specific city.

select C.cname 
from CUSTOMER C
where not exists( select B.bname 
                  from BRANCH B
                  where B.bcity='Udupi'
                  and B.bname in( select B1.bname
                                  from ACCOUNT A,BRANCH B1,DEPOSITOR D
                                  where B1.bname=A.bname and D.accno=A.accno
                                  and D.cname=C.cname
                                  group by B1.bname))
                                  
h)Find the customer having maximum accounts.

select D.cname
from ACCOUNT A,DEPOSITOR D
where D.accno=A.accno
group by D.cname
having COUNT(distinct A.accno) >=ALL (select COUNT(distinct A1.accno)
                                      from ACCOUNT A1,DEPOSITOR D1
                                      where A1.accno=D1.accno
                                      group by D1.cname )

```