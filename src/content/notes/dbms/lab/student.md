---
title: Student DB
branches: ["cs","is","aiml","aids","cce"]
subject : dbms
sem: 4
type: program
---

<pre>
III. Consider the following database of student enrollment in courses & books adopted for each course:

STUDENT (regno: string, name: string, major: string, bdate: date)
COURSE (course #: int, cname: string, dept: string)
ENROLL (regno: string, course#: int, sem: int marks: int)
BOOK _ ADOPTION (course#: int, sem: int, book-ISBN: int)
TEXT (book-ISBN: int, book-title: string, publisher: string, author: string)

1. Produce a list of text books (include Course #, Book-ISBN,Book-title) in the 
alphabetical order for courses offered by th ‘CS’ department that use more than two books.
2. List any department that has all its adopted books published by a specific publisher
3. List the bookISBNs and book titles of the department that has maximum number of students
</pre>


```sql
Consider the following database of student enrollment in courses & books adopted for each course:

STUDENT (regno: string, name: string, major: string, bdate: date)
COURSE (course #: int, cname: string, dept: string)
ENROLL (regno: string, course#: int, sem: int marks: int)
BOOK _ ADOPTION (course#: int, sem: int, book-ISBN: int)
TEXT (book-ISBN: int, book-title: string, publisher: string, author: string)

1.	Produce a list of text books (include Course #, Book-ISBN,Book-title) 
	in the alphabetical order for courses offered by th ‘CS’ 
	department that use more than two books.
2.	List any department that has all its adopted books 
	published by a specific publisher.
3.	List the bookISBNs and book titles of the department that 
	has maximum number of students


create database student

use student

create table STUDENT (
			regno varchar(10),
			fname char(15),
			major char (20),
			bdate datetime
			primary key(regno)
		    )

insert into STUDENT values ('111','ravi','academic','1989-11-09')
insert into STUDENT values ('112','sudha','academic','1979-07-04')
insert into STUDENT values ('113','kumar','academic','1979-01-06')
insert into STUDENT values ('114','raju','academic','1999-10-02')
insert into STUDENT values ('115','hemanth','academic','1988-11-04')

select * from student

create table COURSE 
(
		course int,
		cname varchar(15),
		dept  char (20),
		primary key(course)
)

insert into COURSE values (1,'DBMS','CS')
insert into COURSE values (2,'COMPILER','CS')
insert into COURSE values (3,'JAVA','CS')
insert into COURSE values (4,'SIG PROCESSING','ENC')
insert into COURSE values (5,'DIGTAL CIRCUITS','ENC')
insert into COURSE values (6,'MACHINE DESIGN','MECH')
insert into COURSE values (7,'THEMODYNAICS','MECH')
insert into COURSE values (8,'AUTOCAD','MECH')


select * from COURSE


create table TEXTBOOK (
			bookISBN int,
			title varchar(50),
			publisher  varchar(20),
			author  char(20),
			primary key (bookISBN)
		     )

insert into TEXTBOOK  values (201,'Fundamentals of DBMS','McGraw','NAVATHE')
insert into TEXTBOOK  values (202,'Database Design','McGraw','Raghu Rama')
insert into TEXTBOOK  values (203,'Compiler design','Pearson','Ulman')
insert into TEXTBOOK  values (204,'JAVA complete Reference','McGraw','BALAGURU')
insert into TEXTBOOK  values (205,'Singals and Fundumentals','McGraw','NITHIN')
insert into TEXTBOOK  values (206,'Machine Theory','McGraw','Ragavan')
insert into TEXTBOOK  values (208,'Circuit design','McGraw','Rajkamal')
insert into TEXTBOOK  values (207,'Thermodynamics','McGraw','Alfred')
insert into TEXTBOOK  values (209,'Electronic Circuits','McGraw','Alfred')
insert into TEXTBOOK  values (210,'Circuits Theory','McGraw','Alfred')

select * from TEXTBOOK

create table BOOKADAPTION (
			course int,
			sem int,
			bookISBN int,
			primary key(course, sem,bookISBN),
			foreign key(course) references COURSE(course) on delete cascade on update cascade,
			foreign key(bookISBN) references TEXTBOOK (bookISBN) on delete cascade on update cascade,
		    )

insert into BOOKADAPTION  values (1,5,201)
insert into BOOKADAPTION  values (1,7,202)
insert into BOOKADAPTION  values (2,5,203)
insert into BOOKADAPTION  values (2,6,203)
insert into BOOKADAPTION  values (3,7,204)
insert into BOOKADAPTION  values (4,3,205)
insert into BOOKADAPTION  values (4,5,209)
insert into BOOKADAPTION  values (5,5,205)
insert into BOOKADAPTION  values (5,6,208)
insert into BOOKADAPTION  values (5,2,210)
insert into BOOKADAPTION  values (6,7,206)
insert into BOOKADAPTION  values (7,3,207)
insert into BOOKADAPTION  values (7,3,206)
insert into BOOKADAPTION  values (8,3,207)
insert into BOOKADAPTION values(8,8,210)
insert into BOOKADAPTION values(8,5,209)



create table ENROLL (
			regno varchar(10),
			course  int,
			sem int ,
			marks int,
			primary key(regno,course,sem),
			foreign key(regno) references STUDENT(regno)on delete cascade on update cascade,
			foreign key(course) references COURSE(course)on delete cascade on update cascade,
		    )

insert into ENROLL  values (111,1,5,59)
insert into ENROLL  values (111,2,5,70)
insert into ENROLL  values (111,3,5,75)
insert into ENROLL  values (112,1,5,49)
insert into ENROLL  values (113,2,5,80)
insert into ENROLL  values (114,3,7,79)
insert into ENROLL  values (115,4,3,79)

--ORDER OF TEABLE CREATION--

select * from STUDENT
select * from COURSE
select * from TEXTBOOK
select * from BOOKADAPTION
select * from ENROLL


1. Produce a list of text books 
(include Course #, Book-ISBN,
   Book-title) in the alphabetical 
   order for courses offered by the    
   ‘CS’ department that use more than two books.

   	  
select A.bookISBN, A.title,B.course,B.cname  
from TEXTBOOK A,COURSE B,BOOKADAPTION C 
where  A.bookISBN = C.bookISBN and B.course=C.course  
and B.dept='CS' 
and B.course in (select course
					from BOOKADAPTION 
					group by course having
					count(*)>=2)
order by A.title;




select * from BOOKADAPTION

                    select course,COUNT(bookISBN)
					from BOOKADAPTION 
					group by course 
					having
					count(bookISBN)>=2

-
select * from COURSE
select * from BOOKADAPTION
-2. List any department that has all its 
--adopted books published by a specific publisher.


select * from COURSE
select * from BOOKADAPTION

  
select distinct(C.dept) 
from course C
where not exists (select bookISBN 
                  from  BOOKADAPTION 
                  where  course in(select course 
                                   from  course 
                                    where dept = C.dept 
                                    and bookISBN 
									not in                                                                                                       
                                     (select bookISBN
							 from TEXTBOOK where 
							 publisher='McGraw')   
		  ) 


OR

select distinct(C1.dept) 
from course C1
where not exists(select B.bookISBN 
                 from  BOOK_ADAPTION B , COURSE C
                 where  B.course = C.course 
                         and C.dept = C1.dept   
                         and bookISBN not in (select bookISBN
                                              from TEXTBOOK 
                                              where  
                                             publisher='McGraw')) 

/*3 List the bookISBNs and book
titles of the department 
that has maximum number of students*/


SELECT T.bookISBN, T.title
FROM TEXTBOOK T, COURSE C, BOOKADAPTION B
where B.course=C.course and T.bookISBN=B.bookISBN
and C.dept in(	select C.dept
from COURSE C,ENROLL E
where C.course=E.course
group by C.dept
having COUNT(distinct E.regno)>=ALL 
					(  select COUNT(distinct F.regno)                  
                        from ENROLL F,COURSE D
                        where F.course=D.course
						group by D.dept));




#############  PRACTICE QUERIES   #############



select course,count(bookISBN)
					from BOOKADAPTION 
					group by course having
					count(bookISBN)>=2
***SQL NESTED QUERIES***
####  List title of books adopted by course 1

select title 
from TEXTBOOK 
where bookISBN in(select bookISBN
                   from BOOKADAPTION
				   where course=1)


#### List title of books adopted by 'DBMS' course 

select title 
from TEXTBOOK 
where bookISBN in(select bookISBN
                   from BOOKADAPTION
				   where course in(select course 
				                   from course
								   where cname like 'DBMS'))

*****COMBINING MULTIPLE TABLE= CARTISIAN PRODUCT+ SELECT ******

#### List the Course name and Book title adopted  by CS department
	
select dept AS DEPT, title AS BOOK_TITLE
from course AS C, BOOKADAPTION AS B, TEXTBOOK  AS T
where C.course= B.course and B.bookISBN=T.bookISBN and
dept like 'CS'

*******GROUP BY - HAVING *********

#### Display the number of courses offered by each Department

select dept AS DEPT, count(course) AS NO_OF_COURSES
from course
group by dept

#### Display the number of courses offered by each Department 
having number of courses more than 2

select dept AS DEPT, count(course) AS NO_OF_COURSES
from course
group by dept
having count(course)>2


*********SQL JOIN *********
##### List the title sof the bokks adapoted by each course

select course,title
from BOOKADAPTION AS B join TEXTBOOK AS T on B.bookISBN =T.bookISBN

******** JOIN v/s COMBINING TABLES

select course,title
from BOOKADAPTION AS B,TEXTBOOK  AS T
where B.bookISBN =T.bookISBN

NOTE: JOIN = CARTISIAN PRODUCT follwed by select based on where condition



****** EXISTS/ NOT EXISTS*******
#### Dsiplay student deatils id there is a course offered by CS

select *
from student
where exists( select course
              from course
			  where dept like 'CS')

#### Dsiplay student deatils if there is a course offered by CIVIL
select *
from student
where exists( select course
              from course
			  where dept like 'CIVIL')

#### Dsiplay student deatils if no course is offered by CIVIL

select *
from student
where not exists( select course
              from course
			  where dept like 'CIVIL')


********** IN / NOT IN *******
Display course details to which students have enrolled.

select * 
from course
where course in(select course 
                from enroll)

#### Display course details to which students have not enrolled.

select * 
from course
where course not in(select course 
                from enroll)

****** CO-RELATED QUERIES**********
Inner query executes for each outer table tuple.

###Display course details to which  no students have  enrolled.

select * 
from course C
where not exists( select regno
                  from ENROLL E
				  where E.course=C.course)


*********EXCEPT = SET MINUS OPERATION*******

###Display course to which  no students have  enrolled.

select course
from course
except
select course
from ENROLL

select * from TEXTBOOK
********** NOT IN + NOT EXISTS ********
#### List the course names if all of their adopted book is from McGraw publisher


select cname from course
select * from TEXTBOOK
select * from BOOKADAPTION
insert into BOOKADAPTION values(8,8,210)
insert into BOOKADAPTION values(8,5,209)



select course, cname
from course C
where not exists(select bookISBN
				from BOOKADAPTION B
				where B.course=C.course
				and bookISBN not in(select bookISBN 
                                   from TEXTBOOK
                                   where author  like 'Alfred'))

*****UPDATE*********
Update the marks of all students who have opted COMPILER COURSE

update  ENROLL
set marks=90 where course in(select course     
                            from course    
							where cname like 'COMPILER')

select * from TEXTBOOK
select * from BOOKADAPTION
select * from COURSE
select * from ENROLL

```
