---
title: Order DB
branches: ["cs","is"]
subject : dbms
sem: 4
type: program
---

<pre>
II. Consider the following relations for an order processing database application in a company:

CUSTOMER (cust #: int, cname: string, city: string)
ORDER (order #: int, odate: date, cust #: int, ord-Amt: int)
ORDER – ITEM (order #: int, item #: int, qty: int)
ITEM (item #: int, unit price: int)
SHIPMENT (order #: int, warehouse#: int, ship-date: date)
WAREHOUSE (warehouse #: int, city: string)

1. Produce a listing: CUSTNAME, #oforders, AVG_ORDER_AMT, where the middle column is the total numbers of orders by the customer and the last column is the average order amount for that customer.
2. For each item that has more than two orders , list the item, number of orders that are shipped from atleast two warehouses and total quantity of items shipped
3. List the customers who have ordered for every item that the company produces
</pre>


```sql

create database orderdb
use orderdb
CREATE TABLE CUSTOMER (
			custid int,
			cname char(15) not null,
			city varchar(30),
			primary key (custid)  
			)

insert into CUSTOMER values (111,'John Smith', 'Karkala')
insert into CUSTOMER values (112,'Ramesh N', 'Nitte')			
insert into CUSTOMER values (113,'Franklin', 'Karkala')
insert into CUSTOMER values (114,'Alica', 'mangalore')
insert into CUSTOMER values (115,'Raju', 'Udupi')

CREATE TABLE C_ORDER (
			orderid int,
			odate datetime,
			custid int,
			ordamt int,
			primary key (orderid)  ,
			foreign key(custid) references CUSTOMER(custid)on delete cascade on update cascade
			)

insert into C_ORDER values (201,'2001-08-03', 111,null)
insert into C_ORDER values (202,'2002-08-03', 111,null)
insert into C_ORDER values (203,'2001-08-04', 112,null)
insert into C_ORDER values (204,'2004-02-01', 113,null)
insert into C_ORDER values (205,'2001-04-02', 114,null)
insert into C_ORDER values (206,'2005-02-01', 115,null)
insert into C_ORDER values (207,'2008-04-01', 115,null)
insert into C_ORDER values (209,'2008-02-01', 114,null)
insert into C_ORDER values (208,'2008-12-01', 111,null)
insert into C_ORDER values (200,'2008-11-01', 111,null)
insert into C_ORDER values (210,'2008-10-01', 111,null)


delete from C_ORDER where orderid=211
select * from C_ORDER

CREATE TABLE ITEM (
			itemid  int,
			price int,
			primary key (itemid)
		  )

insert into ITEM values (301,2000)
insert into ITEM values (302,2000)
insert into ITEM values (303,1000)
insert into ITEM values (304,5000)
insert into ITEM values (305,4000)



CREATE TABLE ORDER_ITEM (
			orderid int,
			itemid int,
			qty int,
			primary key (orderid,itemid),
			foreign key(orderid) references C_ORDER(orderid) on delete cascade on update cascade,
			foreign key(itemid) references ITEM(itemid) on delete cascade on update cascade
			)
insert into ORDER_ITEM values (200,301,1)
insert into ORDER_ITEM values (200,305,2)


insert into ORDER_ITEM values (201,301,2)
insert into ORDER_ITEM values (201,302,4)
insert into ORDER_ITEM values (201,303,4)
insert into ORDER_ITEM values (201,304,4)
insert into ORDER_ITEM values (201,305,3)
insert into ORDER_ITEM values (202,303,2)
insert into ORDER_ITEM values (202,305,4)
insert into ORDER_ITEM values (203,302,1)
insert into ORDER_ITEM values (204,305,2)
insert into ORDER_ITEM values (205,301,3)
insert into ORDER_ITEM values (206,301,5)


select * from C_ORDER
select * from ORDER_ITEM
select * from ITEM
update C_ORDER set ordamt = (select sum(O.qty * T.price) 
                             from ORDER_ITEM O, ITEM T
                             where O.itemid = T.itemid 
							 and O.orderid = 200)
where orderid = 200

select * from ORDER_ITEM O, ITEM T
       where O.itemid = T.itemid 



CREATE TABLE WAREHOUSE (
			warehouseid int,
			city varchar(20)not null,
			primary key (warehouseid)
		   )


insert into WAREHOUSE values (1,'MAGALORE')
insert into WAREHOUSE values (2,'MAGALORE')
insert into WAREHOUSE values (3,'MAGALORE')
insert into WAREHOUSE values (4,'UDUPI')
insert into WAREHOUSE values (5,'UDUPI')
CREATE TABLE SHIPMENT (
			orderid int,
			warehouseid int,
			ship_dt datetime,
			primary key (orderid,warehouseid)  ,
			foreign key(orderid) references C_ORDER(orderid) on delete cascade on update cascade,
			foreign key(warehouseid) references WAREHOUSE(warehouseid) on delete cascade on update cascade
		   )

insert into SHIPMENT values (201,1,'2001-04-02')
insert into SHIPMENT values (201,2,'2001-04-04')
insert into SHIPMENT values (201,4,'2001-04-04')
insert into SHIPMENT values (202,1,'2001-05-02')
insert into SHIPMENT values (202,2,'2002-05-12')
insert into SHIPMENT values (202,3,'2003-06-01')
insert into SHIPMENT values (202,4,'2003-06-01')
insert into SHIPMENT values (203,1,'2004-02-01')
insert into SHIPMENT values (203,2,'2004-02-01')
insert into SHIPMENT values (203,3,'2004-02-01')
insert into SHIPMENT values (204,4,'2004-06-02')
insert into SHIPMENT values (204,2,'2004-06-02')

insert into WAREHOUSE values (6,'KARKALA')


select * from C_ORDER
select * from CUSTOMER
select * from ITEM
select * from ORDER_ITEM
select * from WAREHOUSE
SELECT * FROM SHIPMENT

/*1.	Produce a listing: CUSTNAME, #oforders, 
AVG_ORDER_AMT, where the middle column is the 
total numbers of orders by the customer and 
the last column is the average order amount 
for that customer.*/
select * from C_ORDER

select C.custid ,count(O.orderid) as NO_OF_ORDR, 
avg(O.ordamt) as AVG_ORD_AMT, 
sum(O.ordamt) AS Total_Amt
from CUSTOMER C, C_ORDER O
where C.custid = O.custid group  by C.custid

SELECT C.cname AS CUSTNAME, 
       COUNT(O.orderid) AS #oforders, 
       AVG(O.ordamt) AS AVG_ORDER_AMT
FROM CUSTOMER C
JOIN C_ORDER O ON C.custid = O.custid
GROUP BY C.cname;

/*2.	For each item that has more than two 
orders , list the item, number of orders that are  
shipped from atleast 3 warehouses and total  
quantity of items shipped.*/
select * from ORDER_ITEM
select * from SHIPMENT

SELECT OI.itemid AS item, 
       COUNT(DISTINCT OI.orderid) AS num_orders, 
       SUM(OI.qty) AS total_qty_shipped
FROM ORDER_ITEM OI
JOIN SHIPMENT S ON OI.orderid = S.orderid
GROUP BY OI.itemid
HAVING COUNT(DISTINCT S.warehouseid) >= 2
ORDER BY OI.itemid;


3 	List the customers who have ordered 
for every item that the company produces

SELECT C.cname AS CUSTNAME
FROM CUSTOMER C
WHERE NOT EXISTS (
    SELECT I.itemid
    FROM ITEM I
    WHERE NOT EXISTS (
        SELECT OI.orderid
        FROM ORDER_ITEM OI
        JOIN C_ORDER O ON OI.orderid = O.orderid
        WHERE O.custid = C.custid
        AND OI.itemid = I.itemid
    )
);
select * from ORDER_ITEM

select cname
from CUSTOMER
where exists (select orderid 
              from C_ORDER O
			  where O.custid=C.custid)

select itemid, sum(qty)
from ORDER_ITEM
group by itemid

select orderid, count(itemid)
from ORDER_ITEM
group by orderid

select orderid, sum(qty)
from ORDER_ITEM
group by orderid

select * from ORDER_ITEM
***********************EXTRA QUEIRES***********************
/*Display each items present in more than two orders*/
select itemid,count(orderid) as No_Orders
from ORDER_ITEM
group by itemid
having count(orderid)>2


select * from ORDER_ITEM
select * from SHIPMENT
select itemid, count(*) as No_of_Orders, sum(qty) as Total_Qty 
from ORDER_ITEM 
where orderid in (select orderid 
                  from SHIPMENT
				  group by orderid
				  having count(*)>=3)
 group by itemid
 having count(*)>=2

 select  *
 from ORDER_ITEM O, SHIPMENT S
 where O.orderid= S.orderid
 group by O.orderid
having count(*)>=3

 select itemid, count(*) as No_of_Orders, sum(qty) as Total_Qty 
from ORDER_ITEM 
group by itemid
 having count(*)>=2


				  	select * from SHIPMENT				
/*3.	List the customers who have ordered for 
every item that the company produces*/

2.List the order# for orders that were shipped from all the warehouses that the company has in a specific city.

using not in
------------
select O.orderid from C_ORDER O
where not exists (select warehouseid from WAREHOUSE where city = 'MAGALORE' and warehouseid not in 
							(select warehouseid from SHIPMENT  where orderid = O.orderid) 
                 )



select O.orderid from C_ORDER O
where not exists (
                        (select warehouseid from WAREHOUSE where city = 'MAGALORE' and warehouseid not in 
							(select warehouseid from SHIPMENT  where orderid = O.orderid))
                                         union

			(select warehouseid from SHIPMENT  where orderid = O.orderid and   warehouseid not in 
							(select warehouseid from WAREHOUSE where city = 'MAGALORE'))
                         
                 )




select O.orderid from C_ORDER O
where not exists (select warehouseid from WAREHOUSE where city = 'MAGALORE' and warehouseid not in 
							(select warehouseid from SHIPMENT  where orderid = O.orderid) 
                             
                 )


using count
-----------

select A.orderid from shipment A,warehouse B  
where A.warehouseid = B.warehouseid and B.city='MAGALORE' group by A.orderid 
having count(*) = (select count(*) from warehouse where city='MAGALORE')


using left outer join
----------------------

select O.orderid from C_ORDER O
where not exists (select orderid  from (
                    (select warehouseid from WAREHOUSE where city = 'MAGALORE') as R1
                        left outer join
                     (select warehouseid, orderid  
					  from SHIPMENT 
					  where orderid = O.orderid) as R2 on  R1.warehouseid = R2.warehouseid)
                  where orderid is null
                 )


3. Demonstrate the deletion of an item from the ITEM table and
demonstrate a method of handling the rows in the
ORDER_ITEM table that contain this particular item.


/*Display each order that has more than two items*/
select orderid,count(itemid) as No_Items
from ORDER_ITEM
group by orderid
having count(itemid)>2

/*Display each items present in more than two orders*/
select itemid,count(orderid) as No_Orders
from ORDER_ITEM
group by itemid
having count(orderid)>2


1.	Produce a listing: CUSTNAME, #oforders,   AVG_ORDER_AMT, where the middle column is the total
 numbers of orders by the customer and the last column is the average order amount for that customer. 

select C.cname,count(O.orderid),avg(O.ordamt)
from CUSTOMER C,C_ORDER O
where C.custid=O.custid
group by C.cname

2.	List the order# for orders that were shipped from all the warehouses that the company has 
in a specific city. 

select distinct O.orderid
from C_ORDER O
where not exists( select warehouseid  from WAREHOUSE
                  where city='MAGALORE'
                  and warehouseid not in( select W.warehouseid 
                                          from WAREHOUSE W,SHIPMENT S
                                          where W.warehouseid=S.warehouseid
                                          and S.orderid=O.orderid))
                                          
3.	Retrieve the details of customer whose average order amount for the year 2008 exceeds the 
average order amount of the same customer for the year 2007.  

select C.cname,C.custid,C.city,AVG(O.ordamt) as avg_amt into tb1
from CUSTOMER C,C_ORDER O
where C.custid=O.custid and YEAR(O.odate)='2001'
group by C.cname,C.custid,C.city                                     
 
 select * from tb1     
 
 select C.cname,C.custid,C.city,AVG(O.ordamt) as avg_amt into tb2
from CUSTOMER C,C_ORDER O
where C.custid=O.custid and YEAR(O.odate)='2002'
group by C.cname,C.custid,C.city
     
select * from tb2   

select T.cname,T.custid,T.city,T.avg_amt
from tb1 T
group by T.cname,T.custid,T.city,T.avg_amt
having T.avg_amt > ( select avg_amt from tb2
                     where T.custid=custid)
                   
4.	Find the customer with maximum  order amount for the year 2008

select C.cname,O.ordamt
from CUSTOMER C,C_ORDER O
where C.custid=O.custid and YEAR(O.odate)='2008'

group by C.cname,O.ordamt
having O.ordamt in ( select max(A.ordamt)
                     from C_ORDER A
                     where YEAR(A.odate)='2008')
                     

5.	Find the customer who has ordered least number of items.

select C.cname,I.qty
from CUSTOMER C,C_ORDER O,ORDER_ITEM I
where C.custid=O.custid and O.orderid=I.orderid 
group by C.cname,I.qty
having I.qty in( select MIN(qty)
                 from ORDER_ITEM)
                                                              
6.  Find the item on which the company makes highest profit for the year 2008

select I.itemid,T.qty,I.price
from ITEM I,C_ORDER O,ORDER_ITEM T
where I.itemid=T.itemid and O.orderid=T.orderid and YEAR(O.odate)='2008'
group by I.itemid,T.qty,I.price
having T.qty*I.price in ( select max(B.qty*A.price)
                          from  ITEM A,ORDER_ITEM B,C_ORDER C
                          where A.itemid=B.itemid and C.orderid=B.orderid and YEAR(odate)='2008')
 
 OR
 
 select I.itemid
from ITEM I,C_ORDER O,ORDER_ITEM T
where I.itemid=T.itemid and O.orderid=T.orderid and YEAR(O.odate)='2001'
group by I.itemid
having sum(T.qty*I.price)>=ALL ( select sum(B.qty*A.price)
                          from  ITEM A,ORDER_ITEM B,C_ORDER C
                          where A.itemid=B.itemid and C.orderid=B.orderid and YEAR(odate)='2001'
                          group by A.itemid)
                                                   
7.	List the order# for orders that have been ordered for every item that the company produces.

select C.orderid
from C_ORDER C
where not exists( select itemid 
                  from ITEM 
                  where itemid not in( select itemid
                                       from ORDER_ITEM I
                                       where C.orderid=I.orderid))

8.	Find the year of maximum items sales.

select YEAR(O.odate)as max_sales_year
from C_ORDER O,ORDER_ITEM I
where O.orderid=I.orderid
group by YEAR(O.odate)
having sum(I.qty) >=ALL ( select sum(qty)
                           from C_ORDER O1,ORDER_ITEM I1
                           where O1.orderid=I1.orderid
                           group by YEAR(O1.odate))
                           
9.	Find the city which ships  maximum number of items

select W.city
from WAREHOUSE W,SHIPMENT S,ORDER_ITEM I
where W.warehouseid=S.warehouseid and S.orderid=I.orderid
group by W.city
having SUM(I.qty) >=ALL ( select SUM(C.qty)
                          from WAREHOUSE A,SHIPMENT B,ORDER_ITEM C
                          where A.warehouseid=B.warehouseid and B.orderid=C.orderid
                          group by A.city )
                          
10.	List the order# for orders that were shipped from atmost two warehouses that the company has 
in a specific city

select S.orderid
from SHIPMENT S,WAREHOUSE W
where S.warehouseid=W.warehouseid and W.city='UDUPI'
group by S.orderid 
having count(W.warehouseid)<=2

a)List all the items that were ordered  by  each customer.(Details include custid,name,itemno)

select C.custid,C.cname,I.itemid
from C_ORDER O,CUSTOMER C,ORDER_ITEM I
where C.custid=O.custid and O.orderid=I.orderid
group by C.custid,C.cname,I.itemid

b) Give the details of the customer who has maximum orders

select C.cname,C.custid,C.city
from CUSTOMER C,C_ORDER O
where C.custid=O.custid
group by C.cname,C.custid,C.city
having COUNT(O.orderid) >=ALL ( select COUNT(orderid)
                                from CUSTOMER A,C_ORDER B
                                where A.custid=B.custid
                                group by A.custid)
                                
c) Find the item which has  maximum orders.

select I.itemid
from ORDER_ITEM O,ITEM I
where I.itemid=O.itemid
group by I.itemid
having COUNT(O.orderid) >=ALL ( select COUNT(O.orderid)
                                from ORDER_ITEM O,ITEM I
                                where I.itemid=O.itemid
                                group by I.itemid)
                                
d)Find the item which has maximum sales.

select I.itemid
from ORDER_ITEM O,ITEM I
where I.itemid=O.itemid
group by I.itemid
having sum(O.qty) >=ALL ( select SUM(A.qty)
                          from ORDER_ITEM A,ITEM B
                          where A.itemid=B.itemid
                          group by B.itemid)
                          
e) Give the  details of warehouses  from which  items  were shipped(include ware house city).

select distinct W.warehouseid,W.city
from WAREHOUSE W,SHIPMENT S
where W.warehouseid=S.warehouseid

f)Give the details of total amount earned for each  item .(itemno, total amount earned)

select I.itemid,SUM(I.price*O.qty)
from ITEM I,ORDER_ITEM O
where I.itemid=O.itemid
group by I.itemid

g) List  any  customer whose   all   ordered items are shipped from a specific warehouse.

select C.cname 
from CUSTOMER C
where not exists( select O.orderid
                  from C_ORDER O
                  where O.custid=C.custid and O.orderid not in(select S.orderid
                                                               from WAREHOUSE W,SHIPMENT S
                                                               where W.warehouseid=S.warehouseid
                                                               and W.warehouseid=2))
                                                               
4.	Find the total price of the items that were shipped between 2005 and 2008

select SUM(I.price*O.qty) as total_amount
from ITEM I,ORDER_ITEM O,SHIPMENT S
where I.itemid=O.itemid and S.orderid=O.orderid and S.ship_dt between '2001-01-01' and '2003-12-31'

2.Find the customer with minimum number of orders but with maximum order amount 

select C.cname into tb1
from CUSTOMER C,C_ORDER O
where C.custid=O.custid
group by C.cname
having COUNT(O.orderid)<= ALL( select COUNT(O1.orderid)
                               from CUSTOMER C1,C_ORDER O1
                               where C1.custid=O1.custid
                               group by C1.cname)
                               
select * from tb1

select T.cname 
from tb1 T,CUSTOMER C,C_ORDER O
where T.cname=C.cname and C.custid=O.orderid
group by T.cname
having SUM(O.ordamt)>=ALL(select SUM(O1.ordamt)
                          from CUSTOMER C1,C_ORDER O1,tb1 T1
                          where T1.cname=C1.cname and C1.custid=O1.orderid
                          group by C1.cname)


```