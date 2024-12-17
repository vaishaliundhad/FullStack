-- 22/11/2024

--for display all databases

show databases;


--creating databases
-- create databases < db-name>;
-- create database test;


-- for activate current working databses
-- use < db-name>
-- ex.use test;


23-11-24

-- (),{},[]



-- mysql> show databases;
-- +--------------------+
-- | Database           |
-- +--------------------+
-- | college            |
-- | information_schema |
-- | mysql              |
-- | performance_schema |
-- | stud               |
-- | sys                |
-- | test               |
-- | world              |
-- +--------------------+
-- 8 rows in set (0.01 sec)

-- syntax:- create table <tb-name> (col datatype (size),.....);

-- example:- create table stud (sid varchar(3), sname varchar(20), sconatact varchar(10));


-- mysql> show tables;
-- +----------------+
-- | Tables_in_stud |
-- +----------------+
-- | stud           |
-- +----------------+
-- 1 row in set (0.01 sec)


-- mysql> desc stud;
-- +-----------+-------------+------+-----+---------+-------+
-- | Field     | Type        | Null | Key | Default | Extra |
-- +-----------+-------------+------+-----+---------+-------+
-- | sid       | varchar(3)  | YES  |     | NULL    |       |
-- | sname     | varchar(20) | YES  |     | NULL    |       |
-- | sconatact | varchar(10) | YES  |     | NULL    |       |
-- +-----------+-------------+------+-----+---------+-------+
-- 3 rows in set (0.01 sec)


-- syntax:- insert into <tb-name> (col1...) values('',......);

-- example:- insert into stud values ('11', 'bansi', 987654321),('12','sonu',987654123),('13','monu',879654321);


-- mysql> select* from stud;
-- +------+-------+-----------+
-- | sid  | sname | sconatact |
-- +------+-------+-----------+
-- | 11   | bansi | 987654321 |
-- | 11   | bansi | 987654321 |
-- | 12   | sonu  | 987654123 |
-- | 13   | monu  | 879654321 |
-- +------+-------+-----------+
-- 4 rows in set (0.00 sec)

-- primary key

-- create table stud1 (sid varchar(3) primary key, sname varchar(20), sconatact varchar(10));


-- insert into stud1 values ('11', 'keval',6789543210);

-- mysql> insert into stud1 values ('11', 'keval',6789543210);
-- ERROR 1062 (23000): Duplicate entry '11' for key 'stud1.PRIMARY'

create table stud2 (sid varchar(3) primary key , sname varchar(20) primary key, sconatact varchar(10));

-- ERROR 1068 (42000): Multiple primary key defined

-- composite primary key

create table stud2(sid varchar(3),sname varchar(20),sconatact varchar(10) primary key (sid , sname));

where caluse 

select * from <tb-name>

 for column data

 mysql> select name from student1;
+--------+
| name   |
+--------+
| bansi  |
| mansi  |
| jensi  |
| sakshi |
| tanvi  |
| priti  |
| payal  |
+--------+
7 rows in set (0.00 sec)


for rows data

mysql> select * from student1 where name="priti";
+----+-------+
| id | name  |
+----+-------+
| 16 | priti |
+----+-------+
1 row in set (0.01 sec)


mysql> select name from student2 where name="bansi";
+-------+
| name  |
+-------+
| bansi |
+-------+
1 row in set (0.00 sec)


delete table

-- mysql> delete from student1;
-- Query OK, 7 rows affected (0.01 sec)

-- mysql> select * from student1;
-- Empty set (0.00 sec)

drop table

-- mysql> drop table stud2;
-- Query OK, 0 rows affected (0.05 sec)

-- mysql> select * from stud2;
-- ERROR 1146 (42S02): Table 'stud.stud2' doesn't exist

truncate table

mysql> truncate table stud1;
Query OK, 0 rows affected (0.05 sec)

mysql> select * from stud1;
Empty set (0.00 sec)




-- like pridicate

like :- %, __
        %:- all charactor
        _:- single charactor



mysql> select * from student2;
+----+--------+
| id | name   |
+----+--------+
| 1  | bansi  |
| 2  | jensi  |
| 3  | sakshi |
| 4  | mansi  |
| 5  | kajal  |
| 6  | dev    |
| 7  | siya   |
+----+--------+
7 rows in set (0.00 sec)

mysql> select * from student2 where name like 'b%';
+----+-------+
| id | name  |
+----+-------+
| 1  | bansi |
+----+-------+
1 row in set (0.01 sec)

mysql> select * from student2 where name like "_a%";
+----+--------+
| id | name   |
+----+--------+
| 1  | bansi  |
| 3  | sakshi |
| 4  | mansi  |
| 5  | kajal  |
+----+--------+
4 rows in set (0.00 sec)

mysql> select * from student2 where name like "%i";
+----+--------+
| id | name   |
+----+--------+
| 1  | bansi  |
| 2  | jensi  |
| 3  | sakshi |
| 4  | mansi  |
+----+--------+
4 rows in set (0.00 sec)

mysql> select * from student2 where name like "%_i";
+----+--------+
| id | name   |
+----+--------+
| 1  | bansi  |
| 2  | jensi  |
| 3  | sakshi |
| 4  | mansi  |
+----+--------+
4 rows in set (0.00 sec)

mysql> select * from student2 where name like "%_";
+----+--------+
| id | name   |
+----+--------+
| 1  | bansi  |
| 2  | jensi  |
| 3  | sakshi |
| 4  | mansi  |
| 5  | kajal  |
| 6  | dev    |
| 7  | siya   |
+----+--------+
7 rows in set (0.00 sec)


mysql> select * from student2 where name like "%s_";
+----+-------+
| id | name  |
+----+-------+
| 1  | bansi |
| 2  | jensi |
| 4  | mansi |
+----+-------+
3 rows in set (0.00 sec)

mysql> select * from student2 where name like "%n__";
+----+-------+
| id | name  |
+----+-------+
| 1  | bansi |
| 2  | jensi |
| 4  | mansi |
+----+-------+
3 rows in set (0.00 sec)

mysql> select * from student2 where name like "_a%";
+----+--------+
| id | name   |
+----+--------+
| 1  | bansi  |
| 3  | sakshi |
| 4  | mansi  |
| 5  | kajal  |
+----+--------+
4 rows in set (0.00 sec)


mysql> select * from student2 where name like "__k%";
+----+--------+
| id | name   |
+----+--------+
| 3  | sakshi |
+----+--------+
1 row in set (0.00 sec)

mysql> select * from student2 where name like "_a%";
+----+--------+
| id | name   |
+----+--------+
| 1  | bansi  |
| 3  | sakshi |
| 4  | mansi  |
| 5  | kajal  |
+----+--------+
4 rows in set (0.00 sec)

mysql>  select * from student2 where name like "__n%";
+----+-------+
| id | name  |
+----+-------+
| 1  | bansi |
| 2  | jensi |
| 4  | mansi |
+----+-------+
3 rows in set (0.00 sec)



29-11-24

** table 1

database name  stud;

mysql> create table student (sid varchar(4) primary key, name varchar(10));
Query OK, 0 rows affected (0.03 sec)


mysql> desc student;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| sid   | varchar(4)  | NO   | PRI | NULL    |       |
| name  | varchar(10) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)

 insert into student values('S001', "bansi"),('S002',"jensi"),('S003',"lensi");

mysql> select* from student;
+------+-------+
| sid  | name  |
+------+-------+
| S001 | bansi |
| S002 | jensi |
| S003 | lensi |
+------+-------+
3 rows in set (0.00 sec)

* table2

create table course (c_id varchar(4) primary key, c_name varchar(19) ,c_fees numeric);

insert into course  values('C001', "node" , 10000),('C002', "frontend" , 20000),('C003', "AI" , 30000);

mysql> desc course;
+--------+---------------+------+-----+---------+-------+
| Field  | Type          | Null | Key | Default | Extra |
+--------+---------------+------+-----+---------+-------+
| c_id   | varchar(4)    | NO   | PRI | NULL    |       |
| c_name | varchar(19)   | YES  |     | NULL    |       |
| c_fees | decimal(10,0) | YES  |     | NULL    |       |
+--------+---------------+------+-----+---------+-------+
3 rows in set (0.00 sec)


mysql> select * from course;
+------+----------+--------+
| c_id | c_name   | c_fees |
+------+----------+--------+
| C001 | node     |  10000 |
| C002 | frontend |  20000 |
| C003 | AI       |  30000 |
+------+----------+--------+
3 rows in set (0.00 sec)


* table 3 confirm table

--exception

  create table conf_stud (id varchar(3) references student(id), 
                         c_id varchar(3) course(c_id));
  ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'course(c_id))' at line 1



  create table conf_stud2 (
    sid varchar(4),
    c_id varchar(4),
    foreign key (sid) references student(sid), 
    foreign key (c_id) references course(c_id)
    );

mysql>  desc conf_stud2;
+-------+------------+------+-----+---------+-------+
| Field | Type       | Null | Key | Default | Extra |
+-------+------------+------+-----+---------+-------+
| sid   | varchar(3) | YES  | MUL | NULL    |       |
| c_id  | varchar(6) | YES  | MUL | NULL    |       |
+-------+------------+------+-----+---------+-------+
2 rows in set (0.01 sec)


insert into conf_stud2 values('S001', 'C001');
insert into conf_stud2 values('S002', 'C002');
insert into conf_stud2 values('S003', 'C003');


mysql> select * from conf_stud2;
+------+------+
| sid  | c_id |
+------+------+
| S001 | C001 |
| S002 | C002 |
| S003 | C003 |
+------+------+
3 rows in set (0.00 sec)



create table conf_stud3 (
  id varchar(3),
  sid varchar(4),
  c_id varchar(4)),
  constraint PK  primary key (id),
  constraint FK_STUDENT foreign key (sid) references student(sid),
  constraint FK_COURSE foreign key (c_id) references course(c_id),
  constraint CHEK_ID check(id like 'C%')
);



*** update query ***


database college;
table name: stud1;

1.syntax:-  update <tb-name> set <col-name>=<value>
  example:-  update stud1 set scontact =9998887773;

mysql> select* from stud1;
+------+-------+------------+
| sid  | sname | scontact   |
+------+-------+------------+
|    1 | bansi | 9998887773 |
|    2 | jensi | 9998887773 |
|    3 | mansi | 9998887773 |
+------+-------+------------+


2.syntax: update <tb-name> set <col-name>=<value> where <id>=<value>
  example: update stud1 set sconatact=8799306948 where sid=1;



mysql> select* from stud1;
+------+-------+------------+
| sid  | sname | scontact   |
+------+-------+------------+
|    1 | bansi | 8799306948 |
|    2 | jensi | 9998887773 |
|    3 | mansi | 9998887773 |
+------+-------+------------+
3 rows in set (0.00 sec)

3.syntax:-update <tb-name> set <col-name>=<col-name>*<values> where <id>=<value>
  example:- update stud1 set  fees= fess*0.8 where sid=2;

  mysql> select * from stud1;
+------+-------+------------+-------+
| sid  | sname | scontact   | fees  |
+------+-------+------------+-------+
|    1 | bansi | 9876543210 | 10000 |
|    2 | jensi | 7865432190 | 32000 |
|    3 | mansi | 9987654321 | 20000 |
+------+-------+------------+-------+
3 rows in set (0.00 sec)


date:= 5/12/2024

**************theta style***********

mysql> select description , product_rate
 from product_master , sales_order_details 
 where product_master.product_no= sales_order_details.product_no;


+--------------+--------------+
| description  | product_rate |
+--------------+--------------+
| T-Shirts     |       525.00 |
| T-Shirts     |       525.00 |
| T-Shirts     |       525.00 |
| T-Shirts     |       525.00 |
| Shirts       |      1050.00 |
| Cotton Jeans |     12000.00 |
| Trousers     |      3150.00 |
| Pull Overs   |      5250.00 |
| Pull Overs   |      5250.00 |
| Denim Shirts |      8400.00 |
| Denim Shirts |      8400.00 |
| Lycra Tops   |      1050.00 |
+--------------+--------------+
12 rows in set (0.07 sec)


2. select pm.description ,sod.product_rate
  from product_master pm,sales_order_details sod
  where pm.product_no=sod.product_no;

  +--------------+--------------+
| description  | product_rate |
+--------------+--------------+
| T-Shirts     |       525.00 |
| T-Shirts     |       525.00 |
| T-Shirts     |       525.00 |
| T-Shirts     |       525.00 |
| Shirts       |      1050.00 |
| Cotton Jeans |     12000.00 |
| Trousers     |      3150.00 |
| Pull Overs   |      5250.00 |
| Pull Overs   |      5250.00 |
| Denim Shirts |      8400.00 |
| Denim Shirts |      8400.00 |
| Lycra Tops   |      1050.00 |
+--------------+--------------+
12 rows in set (0.01 sec)


  3. select sales_order_details.order_no, product_rate , order_date, description
   from sales_order , sales_order_details, product_master
   where sales_order_details.order_no = sales_order.order_no
   and sales_order_details.product_no = product_master.product_no;

+----------+--------------+------------+--------------+
| order_no | product_rate | order_date | description  |
+----------+--------------+------------+--------------+
| O19001   |       525.00 | 2004-06-12 | T-Shirts     |
| O19001   |      8400.00 | 2004-06-12 | Denim Shirts |
| O19001   |      5250.00 | 2004-06-12 | Pull Overs   |
| O19002   |       525.00 | 2004-06-25 | T-Shirts     |
| O19003   |     12000.00 | 2004-04-03 | Cotton Jeans |
| O19003   |      1050.00 | 2004-04-03 | Skirts       |
| O19008   |       525.00 | 2004-05-24 | T-Shirts     |
| O19008   |      1050.00 | 2004-05-24 | Lycra Tops   |
| O46865   |      3150.00 | 2004-02-18 | Trousers     |
| O46865   |      5250.00 | 2004-02-18 | Pull Overs   |
| O46865   |       525.00 | 2004-02-18 | T-Shirts     |
| O46865   |      1050.00 | 2004-02-18 | Shirts       |
| O46866   |      8400.00 | 2004-05-20 | Denim Shirts |
+----------+--------------+------------+--------------+
13 rows in set (0.01 sec)



   ** ANSI STYLE **

   syntax:-  select * from  <tb-1> inner join <tb-2> on expressions;

   example :- select * from product_master pm 
              inner join sales_order_details sod on sod.product_no
              inner join sales_order so on sod.order_no = so.order_no
              inner join client_master cm on so.client_no = cm.client_no;


12-12-2024

select ag_fun(column_name(s))
from table name
where condition
Group by column_name


1.select city 
from client_master
Group by city;

+-----------+
| city      |
+-----------+
| Mumbai    |
| Madras    |
| Bangalore |
| Mangalore |
+-----------+
4 rows in set (0.01 sec)

2.select city, sum(bal_due )
from client_master
Group by city;

+-----------+---------------+
| city      | sum(bal_due ) |
+-----------+---------------+
| Mumbai    |      22000.00 |
| Madras    |          0.00 |
| Bangalore |          0.00 |
| Mangalore |          0.00 |
+-----------+---------------+
4 rows in set (0.01 sec)

3.select city , max(bal_due)
from client_master
Group by city;

 +-----------+--------------+
| city      | max(bal_due) |
+-----------+--------------+
| Mumbai    |     15000.00 |
| Madras    |         0.00 |
| Bangalore |         0.00 |
| Mangalore |         0.00 |
+-----------+--------------+
4 rows in set (0.01 sec)


4. 
    select city , sum(bal_due)
    from client_master
    where city="mumbai"
    Group by city
    having max(bal_due);



5.  select city,sum (bal_due)
    from client_master
    Group by city
    having sum(bal_due)>10000;