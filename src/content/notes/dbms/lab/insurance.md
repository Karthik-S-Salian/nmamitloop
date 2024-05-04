---
title: Insurance Database
branches: ["cs","is","aiml","aids","cce"]
subject : dbms
sem: 4
type: program
---

<pre>
I. Insurance Database
Consider the Insurance database given below. 

PERSON (driver – id #: String, name: string, address: string)
CAR (regno: string, model: string, year: int)
ACCIDENT (report-number: int, accd-date: date, location: string)
OWNS (driver-id #: string, regno: string)
PARTICIPATED (driver-id: string, Regno: string, report-number: int, damage amount: int)

1. Find the total number of people who owned cars that were involved in accidents in 1989.
2. Find the number of accidents in which the cars belonging to “John Smith” were involved.
3. Update the damage amount for the car with reg number “KA-12” in the accident with report number “1” to $3000.

</pre>


```sql
create Database Insuranc

use Insuranc



CREATE TABLE PERSON (
			driverid varchar(10),
			fname char(15) not null,
			address varchar(30),
			primary key (driverid)  
			)


insert into  PERSON values ('111','John Smith' , 'SP Road, Bangalore-12')
insert into  PERSON values ('112','Ramesh Babu' , 'KP Nagar, Udupi -13')
insert into  PERSON values ('113','Raju SK' , 'KS Circle, Mangalore-12')
insert into  PERSON values ('114','Ramesh Babu' , 'AS Road, Bangalore-14')
insert into  PERSON values ('115','Alica wallace' , 'SS Road, Karkala-16')



select * from PERSON



CREATE TABLE CAR (
			regno varchar(10),
			model varchar(10)not null,
			cyear int,
			primary key(regno) 
		)

insert into  CAR values ('KA-12','FORD' ,1980)
insert into  CAR values ('KA-13','SWIFT' ,1990)
insert into  CAR values ('MH-11','INDIGO' ,1998)
insert into  CAR values ('AP-10','SWIFT' ,1988)
insert into  CAR values ('TN-11','FORD' ,2001)
insert into  CAR values ('TN-12','TOYATA' ,2001)
insert into  CAR values ('MH-14','SWIFT' ,2001)
insert into  CAR values ('KL-15','TOYATA' ,2001)
insert into  CAR values ('KL-4','INDIGO' ,2001)
insert into  CAR values ('AP-05','SANTRO' ,2001)

select * from CAR

CREATE TABLE ACCIDENT  (
			reportno int ,
			accdate datetime,
			location varchar(20),
			primary key(reportno)
			)

insert into  ACCIDENT values (1,'1998-07-22' ,'Nitte')
insert into  ACCIDENT values (2,'1998-07-22','Karkala')
insert into  ACCIDENT values (12,'1998-07-22' ,'Mangalore')
insert into  ACCIDENT values (3,'1998-07-23','Mangalore')
insert into  ACCIDENT values (4,'1990-09-09','Bhatkal')
insert into  ACCIDENT values (5,'2001-02-22' ,'Udupi')
insert into  ACCIDENT values (6,'1990-09-09','Udupi')
insert into  ACCIDENT values (15,'1981-07-22' ,'Udupi')

select * from ACCIDENT
delete from ACCIDENT

insert into  ACCIDENT values (7,'1981-09-09','Karkala')
insert into  ACCIDENT values (8,'1990-09-09','Bhatkal')
insert into  ACCIDENT values (9,'2001-02-22' ,'Udupi')
insert into  ACCIDENT values (10,'1998-02-02','Udupi')
insert into  ACCIDENT values (11,'1998-01-02','Bhatkal')
insert into  ACCIDENT values (13,'1998-07-22','Udupi')
insert into  ACCIDENT values (14,'1998-07-22','Karkala')


delete from ACCIDENT

CREATE TABLE OWNS    (
			driverid varchar(10) ,
			regno varchar(10)
			primary key(driverid,regno) 
			foreign key(driverid) references PERSON(driverid)on delete cascade on update cascade,
			foreign key(regno) references CAR(regno)on delete cascade on update cascade,
			unique(regno)
		    )


drop table OWNS

select * from PERSON
select * from car

insert into  OWNS values ('111','KA-13')
insert into  OWNS values ('111','KA-12')
insert into  OWNS values ('111','MH-11')

insert into  OWNS values ('112','AP-10')
insert into  OWNS values ('112','TN-11')

insert into  OWNS values ('113','TN-12')
insert into  OWNS values ('113','KL-15')

insert into  OWNS values ('114','AP-05')
insert into  OWNS values ('114','KL-4')

insert into  OWNS values ('115','MH-14')


select * from OWNS

delete from OWNS

drop table PARTCIPATED
CREATE TABLE PARTCIPATED (
			   driverid varchar(10) ,
			   regno varchar(10),
			   reportno  int,
			   dmgamt int,
			   primary key(driverid,regno,reportno) ,
			   foreign key(driverid) references PERSON(driverid)on delete cascade on update cascade,
			   foreign key(regno) references CAR(regno)on delete cascade on update cascade,
			   foreign key(reportno) references ACCIDENT(reportno)  on delete cascade on update cascade,
			   foreign key(driverid,regno) references OWNS(driverid,regno),
			   unique(reportno) 
			 )


drop table  PARTCIPATED

select * from accident

insert into  PARTCIPATED values ('111','KA-12',1,20000)
insert into  PARTCIPATED values ('111','KA-13',2,10000)
insert into  PARTCIPATED values ('111','KA-12',3,60000)
insert into  PARTCIPATED values ('111','KA-12',4,60000)
insert into  PARTCIPATED values ('111','KA-12',5,60000)
insert into  PARTCIPATED values ('111','KA-12',15,40000)
insert into  PARTCIPATED values ('111','KA-13',6,10000)
insert into  PARTCIPATED values ('111','MH-11',12,20000)
 
insert into  PARTCIPATED values ('112','AP-10',7,30000)
insert into  PARTCIPATED values ('112','TN-11',8,40000)
insert into  PARTCIPATED values ('112','AP-10',13,20000)
insert into  PARTCIPATED values ('112','TN-11',14,10000)

insert into  PARTCIPATED values ('113','TN-12',9,40000)
insert into  PARTCIPATED values ('113','KL-15',10,50000)
insert into  PARTCIPATED values ('113','TN-12',11,20000)



select * from PERSON
select * from CAR 
select * from ACCIDENT
select * from OWNS
select * from PARTCIPATED 



************************Lab Queries***********************
--1. Find the total number of people who
--owned cars 
--that were involved in accidents in 1998.

select *from partcipated
select * from accident

select count ( P.driverid)
from accident A, partcipated P
where A.reportno = P.reportno 
and A.accdate between 
'1998-01-01' and  '1998-12-31'

select count (distinct P.driverid)
from accident A, partcipated P
where A.reportno = P.reportno 
and year(A.accdate) = '1998'  

select *
from accident A, partcipated P
where A.reportno = P.reportno 
and year(A.accdate) = '1998'


select count (distinct P.driverid)
from  partcipated P 
where P.reportno  in ( select reportno 
					from accident 
	where year(accdate)  ='1998')

--2a.  Find the number of accidents in which the cars 
--belonging to “John Smith” were involved.
select  count (P.reportno) as NO_OF_ACC
from   partcipated P,  person PN
where P.driverid =  PN.driverid 
and   PN.fname = 'John Smith'   
  

--3 Update the damage amount for the car
--with reg number “KA-12” in
--the accident with report number
--“1” to $3000.

select * from partcipated

update PARTCIPATED  set dmgamt = 15000 
where reportno = 1 and regno = 'KA-12'

select * from partcipated



***********************EXTRA PRACTICE QUERIES******************

2b. Find the number of accidents in which the cars belonging to specific model were involved.

select  count (P.reportno) as NO_OF_ACC
from   partcipated P,  car C
where P.regno =  C.regno 
and   C.model  = 'SWIFT'
 


3. Add a new accident to the database; assume any values for required attributes.
 
We assume the driver was “Ramesh Babu,” although it could be someone else.
Also, we assume “Ramesh Babu” owns one Toyota. First we must find the license of the given car. Then the participated and accident relations must be updated in order to both record the accident and tie it to the given car. 
We assume values “Berkeley” for location, ’2001-09-01’ for date and date, 4007 for reportnumber and 3000 for damage amount.

insert into accident values (7, '2001-09-01', 'Karkala')

insert into partcipated
select O.driverid, C.regno, 7, 100000
from person P, owns O, car C
where P.fname = 'Ramesh Babu'    
and P.driverid = O.driverid 
and O.regno = C.regno 
and C.model = 'SWIFT'
  
select * from partcipated
select * from accident

4. Delete the Mazda belonging to “John Smith”.

delete from  car
where model = 'INDIGO' and regno in
(select regno
from person P, owns O
where P.fname = 'John Smith' and P.driverid = O.driverid)



select * from person
select * from car
select * from accident
select * from PARTCIPATED 
select * from OWNS  

delete from  PARTCIPATED

create view  veiw1  as 
select distinct(driverid)
from (
select driverid,regno from OWNS  as T
where not exists
              (
                      select distinct (location) from accident  A  
                      where  location not in 
                           (
                                select location from accident A1,PARTCIPATED P1 
								where A1.reportno = P1.reportno and P1.driverid = T.driverid 
                                and P1.regno=T.regno 
                                
					      )
               )     
                          
      )   as T




select driverid ,fname  from  person P
where  exists
 (
	select regno from car  where not exists
              (
                      select distinct (location) from accident 
                      where  location not in 
                           (
                                select location from accident A,PARTCIPATED PT 
								where A.reportno = PT.reportno and PT.driverid = P.driverid       
					       )
              )                       
 )   



select P.driverid , P.regno , count(*) as no_of_accidents from PARTCIPATED P
where P.driverid  in ( select driverid from OWNS group by driverid having count(*) >= 2)

                 and 
	  P.regno  in  ( select regno from  PARTCIPATED where driverid = P.driverid group by regno
                     having sum(dmgamt) >= all ( select  sum(dmgamt) from  PARTCIPATED 
												  where driverid = P.driverid group by regno))
                  
 group by P.driverid , P.regno

 
select driverid,count(*) from OWNS  group by driverid
select driverid,regno from OWNS   where driverid =112
select * from person 
	
1.	List the names of   people who owned cars that were involved in accidents in 2008.

select distinct fname 
from PERSON P,PARTCIPATED R,ACCIDENT A
where P.driverid=R.driverid and R.reportno=A.reportno and year(A.accdate)='1998'

2.	Find the name of  owner and his car that has maximum number of accidents in 2008

select distinct P.fname,O.regno
from PERSON P,OWNS O,ACCIDENT A,PARTCIPATED R
where P.driverid=R.driverid and O.regno=R.regno and R.reportno=A.reportno and year(A.accdate)='1998' 
group by P.fname,O.regno
having count(*) >= all ( select count(distinct A1.reportno) 
                        from OWNS O1,PERSON P1,ACCIDENT A1,PARTCIPATED R1
                        where P1.driverid=R1.driverid and O1.regno=R1.regno and R1.reportno=A1.reportno and year(A1.accdate)='1998' 
                        group by P1.fname,O1.regno)

3.	List the name of owners who own atleast two TOYOTA cars.

select P.fname
from PERSON P,OWNS O,CAR C
where P.driverid=O.driverid and C.regno=O.regno and C.model='TOYATA'
group by P.fname
having count(C.regno)>=2

4.	List the name of owner who owns maximum TOYOTA cars.

select P.fname
from PERSON P,CAR C,OWNS O
where P.driverid=O.driverid and C.regno=O.regno and C.model='TOYATA'
group by P.fname
having count(C.regno)>=all(select count(distinct C.regno)
                           from PERSON P1,CAR C1,OWNS O1
                           where P1.driverid=O1.driverid and C1.regno=O1.regno and C1.model='TOYATA'
                           group by P1.fname)
                          
5.	Find  the name of  owner who owns cars  having  minimum damage amount for  accidents in 2008

select P.fname,R.dmgamt
from PERSON P,OWNS C,PARTCIPATED R,ACCIDENT A
where P.driverid=R.driverid and C.regno=R.regno and R.reportno=A.reportno and year(A.accdate)='1998'
group by P.fname,R.dmgamt
having R.dmgamt in (select min(dmgamt)
                    from PARTCIPATED B,ACCIDENT C
                    where B.reportno=C.reportno and year(C.accdate)='1998')
                    
6.	List the names of   owners whose every car is involved in accidents in 2008

select P.fname
from PERSON P
where not exists(
                  select Z.regno from OWNS Z
                  where P.driverid=Z.driverid and
                   Z.regno not in 
                  (select C.regno 
                   from CAR C,ACCIDENT A,PARTCIPATED R
                   where P.driverid=R.driverid and C.regno=R.regno
                   and A.reportno=R.reportno and year(A.accdate)='1998'))
                   
7.	List the names of   owners whose every car is involved in accidents on a specific day.
 
select P.fname
from PERSON P
where not exists( select O.regno
                  from OWNS O
                  where O.driverid=P.driverid
                  and O.regno not in( select R.regno
                                      from PARTCIPATED R,CAR C,ACCIDENT A
                                      where R.driverid=P.driverid and C.regno=R.regno
                                      and A.reportno=R.reportno and A.accdate='22 july 1998'))
                                      
8.	List the names of people who owned cars that were involved in accidents on a specific day and 
 atleast two cars of each owner are involved.
 
 select P.fname
 from PERSON P,OWNS C,PARTCIPATED R,ACCIDENT A
 where P.driverid=R.driverid and C.regno=R.regno and R.reportno=A.reportno
 and A.accdate='22 july 1998'
 group by P.fname
 having count(C.regno)>=2
 
 9.	List Owner-Name, Car Regno, Number of accidents, and average damage amount for the year 2008.
 
 select P.fname,C.regno,count(A.reportno),avg(R.dmgamt)
 from PERSON P,OWNS C,PARTCIPATED R,ACCIDENT A
 where P.driverid=R.driverid and C.regno=R.regno and A.reportno=R.reportno and year(A.accdate)='1998'
 group by P.fname,C.regno

11.Find the total number of people who owned cars that were involved in accidents in 2008

select count(distinct O.driverid)
from OWNS O,PARTCIPATED P,ACCIDENT A
where O.driverid=P.driverid and P.reportno=A.reportno and year(A.accdate)='2001'

12.	Find the number of accidents in which cars belonging to a specific model were involved

select count(P.reportno)
from CAR C,PARTCIPATED P
where C.regno=P.regno and C.model='TOYATA'

13.	 Find the location at which maximum accidents occur in 2008

select A.location
from ACCIDENT A,PARTCIPATED P
where A.reportno=P.reportno and year(A.accdate)='1998'
group by A.location
having count(A.reportno)>=ALL( select count(A1.reportno)
                               from ACCIDENT A1,PARTCIPATED P1
                               where A1.reportno=P1.reportno and year(A1.accdate)='1998'
                               group by A1.location) 
                               
14.	 Find the people who owned cars that were involved in accidents at every location.

select P.fname
from PERSON P
where not exists( select distinct A.location  
                  from ACCIDENT A
                  where A.location not in( select A1.location
                                         from ACCIDENT A1,PARTCIPATED P1,OWNS O
                                         where A1.reportno=P1.reportno and P1.driverid=P.driverid
                                         and P1.regno=O.regno))
                                         
15.	Find the number of  owners whose every car is involved in accidents in 2008.

select count(distinct O.driverid) as No_of_Owners
from OWNS O
where not exists( select C.regno
                  from CAR C
                  where C.regno=O.regno
                  and C.regno not in( select distinct P.regno
                                      from ACCIDENT A,PARTCIPATED P
                                      where P.regno=O.regno and A.reportno=P.reportno 
                                      and year(A.accdate)='1998'))
                                      
16.	Find the location at which maximum number of Mazda cars are involved in accidents
             
 select A.location 
 from ACCIDENT A,PARTCIPATED P,CAR C
 where A.reportno=P.reportno and C.regno=P.regno and C.model='SWIFT'
 group by A.location
 having count(distinct C.regno)>=ALL( select count(distinct C1.regno)
                                     from CAR C1,ACCIDENT A1,PARTCIPATED P1
                                     where C1.regno=P1.regno and A1.reportno=P1.reportno and C1.model='SWIFT'
                                     group by A1.location)
                                     
                      
1)list the damage amount for each car

select C.regno,C.model,sum(P.dmgamt)
from CAR C,PARTCIPATED P
where C.regno=P.regno 
group by C.regno,C.model

2)list the owner/owners of the car with the maximum damage amount

select P.fname,R.dmgamt
from OWNS O,PERSON P,PARTCIPATED R
where P.driverid=O.driverid and R.driverid=O.driverid and R.regno=O.regno
group by P.fname,R.dmgamt
having R.dmgamt=(select max(dmgamt) from PARTCIPATED)

3)give the details of all the owners(ownerid,name,regno,model)

select O.driverid,P.fname,C.regno,C.model
from OWNS O,PERSON P,CAR C
where P.driverid=O.driverid and O.regno=C.regno

4)find the no.of cars owned by each owner

select O.driverid,P.fname,count(C.regno)
from PERSON P,OWNS O,CAR C
where O.driverid=P.driverid and C.regno=O.regno
group by O.driverid,P.fname

5)Give the details of each car showing the regno,model, no. of accident    

select C.regno,C.model,count(P.reportno)
from CAR C,PARTCIPATED P
where C.regno=P.regno 
group by C.regno,C.model

6)Give the details of the owners who owned 2 or more cars and registered after 2000
    and total damage amount for a car is between 10,000 and 25,000
    
select P.driverid,P.fname
from PERSON P,PARTCIPATED R,CAR C
where C.cyear > 1979 and R.driverid=P.driverid  and C.regno=R.regno
group by P.driverid,P.fname
having (sum(R.dmgamt)>=10000 and sum(dmgamt)<=210000)and count(C.regno)>=2 

7)Give the owners details which include ownerid,name,car model,no.of cars owned.

select P.driverid,P.fname,C.model,count(C.regno)
from OWNS O,CAR C,PERSON P
where P.driverid=O.driverid and C.regno=O.regno
group by P.driverid,P.fname,C.model
 
4.	Find the names of owners whose atleast one car is involved in accidents every year.

select P.fname
from PERSON P
where not exists( select distinct year(A.accdate)
                  from ACCIDENT A
                  where year(A.accdate) not in( select distinct year(A1.accdate)
                                                from ACCIDENT A1,PARTCIPATED P1,OWNS O
                                                where A1.reportno=P1.reportno and O.driverid=P.driverid
                                                and P1.driverid=O.driverid))
                                              

```