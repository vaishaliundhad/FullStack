 create dabases task;


 mysql> create table client_master (clientno varchar(6), name varchar(20), address1 varchar(30), address2 varchar(30), city varchar(15) , pincode int , state varchar(15), baldue int );
Query OK, 0 rows affected (0.07 sec)

mysql> desc client_master;
+----------+-------------+------+-----+---------+-------+
| Field    | Type        | Null | Key | Default | Extra |
+----------+-------------+------+-----+---------+-------+
| clientno | varchar(6)  | YES  |     | NULL    |       |
| name     | varchar(20) | YES  |     | NULL    |       |
| address1 | varchar(30) | YES  |     | NULL    |       |
| address2 | varchar(30) | YES  |     | NULL    |       |
| city     | varchar(15) | YES  |     | NULL    |       |
| pincode  | int         | YES  |     | NULL    |       |
| state    | varchar(15) | YES  |     | NULL    |       |
| baldue   | int         | YES  |     | NULL    |       |
+----------+-------------+------+-----+---------+-------+
8 rows in set (0.02 sec)




mysql> create table salesman_master (salasemanno varchar (6), salasemanname varchar(20), address1 varchar(30), address2 varchar(30), city varchar(20), pincode int , state varchar(20), salamt int , tgttoget int , ytdsales int , remark varchar(60));
Query OK, 0 rows affected (0.04 sec)


mysql> desc salesman_master;
+---------------+-------------+------+-----+---------+-------+
| Field         | Type        | Null | Key | Default | Extra |
+---------------+-------------+------+-----+---------+-------+
| salasemanno   | varchar(6)  | YES  |     | NULL    |       |
| salasemanname | varchar(20) | YES  |     | NULL    |       |
| address1      | varchar(30) | YES  |     | NULL    |       |
| address2      | varchar(30) | YES  |     | NULL    |       |
| city          | varchar(20) | YES  |     | NULL    |       |
| pincode       | int         | YES  |     | NULL    |       |
| state         | varchar(20) | YES  |     | NULL    |       |
| salamt        | int         | YES  |     | NULL    |       |
| tgttoget      | int         | YES  |     | NULL    |       |
| ytdsales      | int         | YES  |     | NULL    |       |
| remark        | varchar(60) | YES  |     | NULL    |       |
+---------------+-------------+------+-----+---------+-------+
11 rows in set (0.00 sec)



mysql> show tables;
+-----------------+
| Tables_in_task  |
+-----------------+
| client_master   |
| product_master  |
| salesman_master |
+-----------------+
3 rows in set (0.02 sec)


29/11/24

create database task2;


mysql> show tables;
+---------------------+
| Tables_in_task2     |
+---------------------+
| client_master       |
| product_master      |
| salaseman_master    |
| sales_order         |
| sales_order_details |
+---------------------+
5 rows in set (0.01 sec)


1.create table client_master (clientno varchar(6) primary key,
            name varchar(20),
            address1 varchar(30),
            address2 varchar(30),
            city varchar(15),
            pincode numeric(8),
            state varchar(15),
            baldue numeric(10,2)   

);

Query OK, 0 rows affected (0.06 sec)


mysql> desc client_master;
+----------+---------------+------+-----+---------+-------+
| Field    | Type          | Null | Key | Default | Extra |
+----------+---------------+------+-----+---------+-------+
| clientno | varchar(6)    | NO   | PRI | NULL    |       |
| name     | varchar(20)   | YES  |     | NULL    |       |
| address1 | varchar(30)   | YES  |     | NULL    |       |
| address2 | varchar(30)   | YES  |     | NULL    |       |
| city     | varchar(15)   | YES  |     | NULL    |       |
| pincode  | decimal(8,0)  | YES  |     | NULL    |       |
| state    | varchar(15)   | YES  |     | NULL    |       |
| baldue   | decimal(10,2) | YES  |     | NULL    |       |
+----------+---------------+------+-----+---------+-------+

8 rows in set (0.01 sec)


insert into client_master (clientno, name, city, pincode, state , baldue) values("C00001", "Ivan Bayross", "Mumbai", 400054, "Maharashtra", 15000);
insert into client_master (clientno, name, city, pincode, state , baldue) values("C00002", "Mamta Muzumdar", "Madras", 780001, "Tamil Nadu", 0);
insert into client_master (clientno, name, city, pincode, state , baldue) values("C00003", "Chhaya Bankar", "Mumbai", 400057, "Maharashtra", 5000);
insert into client_master (clientno, name, city, pincode, state , baldue) values("C00004", "Aswini Joshi", "Bangalore", 560001, "Karnataka", 0);
insert into client_master (clientno, name, city, pincode, state , baldue) values("C00005", "Hansel Colaco", "Mumbai", 400060, "Maharashtra", 2000);
insert into client_master (clientno, name, city, pincode, state , baldue) values("C00006", "Deepak Sharma", "Mangalore", 560050, "Karnataka", 0);

mysql> select * from client_master;
+----------+----------------+----------+----------+-----------+---------+-------------+----------+
| clientno | name           | address1 | address2 | city      | pincode | state       | baldue   |
+----------+----------------+----------+----------+-----------+---------+-------------+----------+
| C00001   | Ivan Bayross   | NULL     | NULL     | Mumbai    |  400054 | Maharashtra | 15000.00 |
| C00002   | Mamta Muzumdar | NULL     | NULL     | Madras    |  780001 | Tamil Nadu  |     0.00 |
| C00003   | Chhaya Bankar  | NULL     | NULL     | Mumbai    |  400057 | Maharashtra |  5000.00 |
| C00004   | Aswini Joshi   | NULL     | NULL     | Bangalore |  560001 | Karnataka   |     0.00 |
| C00005   | Hansel Colaco  | NULL     | NULL     | Mumbai    |  400060 | Maharashtra |  2000.00 |
| C00006   | Deepak Sharma  | NULL     | NULL     | Mangalore |  560050 | Karnataka   |     0.00 |
+----------+----------------+----------+----------+-----------+---------+-------------+----------+
6 rows in set (0.01 sec)

2. create table product_master (
    productno varchar(6) primary key,
    description varchar(15), 
    profitpercent numeric(4,2),
    unitmeasure varchar(10),
    qtyonhand numeric (8),
    reorederlvl numeric (8),
    sellprice numeric(8,2),
    costprice numeric(8,2)
    );

Query OK, 0 rows affected (0.03 sec)

mysql> desc product_master;
+---------------+--------------+------+-----+---------+-------+
| Field         | Type         | Null | Key | Default | Extra |
+---------------+--------------+------+-----+---------+-------+
| productno     | varchar(6)   | NO   | PRI | NULL    |       |
| description   | varchar(15)  | YES  |     | NULL    |       |
| profitpercent | decimal(4,2) | YES  |     | NULL    |       |
| unitmeasure   | varchar(10)  | YES  |     | NULL    |       |
| qtyonhand     | decimal(8,0) | YES  |     | NULL    |       |
| reorederlvl   | decimal(8,0) | YES  |     | NULL    |       |
| sellprice     | decimal(8,2) | YES  |     | NULL    |       |
| costprice     | decimal(8,2) | YES  |     | NULL    |       |
+---------------+--------------+------+-----+---------+-------+
8 rows in set (0.00 sec)


insert into product_master (productno,description, profitpercent, unitmeasure, qtyonhand, reorederlvl, sellprice,costprice) values ("P00001", "T-Shirts" , 5 , "Piece", 200, 50, 350, 250);
insert into product_master (productno,description, profitpercent, unitmeasure, qtyonhand, reorederlvl, sellprice,costprice) values ("P0345", "Shirts" , 6 , "Piece", 150, 50, 500, 350);
insert into product_master (productno,description, profitpercent, unitmeasure, qtyonhand, reorederlvl, sellprice,costprice) values ("P06734", "Cotton-Jeans" , 5 , "Piece", 100, 20, 600, 450);
insert into product_master (productno,description, profitpercent, unitmeasure, qtyonhand, reorederlvl, sellprice,costprice) values ("P07865", "Jeans" , 5 , "Piece", 100, 20, 750, 500);
insert into product_master (productno,description, profitpercent, unitmeasure, qtyonhand, reorederlvl, sellprice,costprice) values ("P07868", "Trousers" , 2 , "Piece", 150, 50, 850, 550);
insert into product_master (productno,description, profitpercent, unitmeasure, qtyonhand, reorederlvl, sellprice,costprice) values ("P07885", "Pull Overs" , 2.5 , "Piece", 80, 30, 700, 450);
insert into product_master (productno,description, profitpercent, unitmeasure, qtyonhand, reorederlvl, sellprice,costprice) values ("P07965", " Denim Shirts" , 4 , "Piece", 100, 40, 350, 250);
insert into product_master (productno,description, profitpercent, unitmeasure, qtyonhand, reorederlvl, sellprice,costprice) values ("P07975", "Laycra Top" , 5 , "Piece", 70, 30, 300, 175);
insert into product_master (productno,description, profitpercent, unitmeasure, qtyonhand, reorederlvl, sellprice,costprice) values ("P08865", "Skirts" , 5 , "Piece", 75, 30, 450, 300);


mysql> select* from product_master;
+-----------+---------------+---------------+-------------+-----------+-------------+-----------+-----------+
| productno | description   | profitpercent | unitmeasure | qtyonhand | reorederlvl | sellprice | costprice |
+-----------+---------------+---------------+-------------+-----------+-------------+-----------+-----------+
| P00001    | T-Shirts      |          5.00 | Piece       |       200 |          50 |    350.00 |    250.00 |
| P0345     | Shirts        |          6.00 | Piece       |       150 |          50 |    500.00 |    350.00 |
| P06734    | Cotton-Jeans  |          5.00 | Piece       |       100 |          20 |    600.00 |    450.00 |
| P07865    | Jeans         |          5.00 | Piece       |       100 |          20 |    750.00 |    500.00 |
| P07868    | Trousers      |          2.00 | Piece       |       150 |          50 |    850.00 |    550.00 |
| P07885    | Pull Overs    |          2.50 | Piece       |        80 |          30 |    700.00 |    450.00 |
| P07965    |  Denim Shirts |          4.00 | Piece       |       100 |          40 |    350.00 |    250.00 |
| P07975    | Laycra Top    |          5.00 | Piece       |        70 |          30 |    300.00 |    175.00 |
| P08865    | Skirts        |          5.00 | Piece       |        75 |          30 |    450.00 |    300.00 |
+-----------+---------------+---------------+-------------+-----------+-------------+-----------+-----------+
9 rows in set (0.00 sec)

3. create table salesman_master (
  salesmanno varchar(6) primary key,
 salesmanname varchar(20),
 address1 varchar(30),
 address2 varchar(30),
 city varchar(20),
 pincode numeric(8),
 state varchar(20),
 salamt numeric(8,2),
 tgttoget numeric(6,2),
 ytdsales numeric(6,2),
 remark  varchar(60)
  );

mysql> desc salesman_master;
+--------------+--------------+------+-----+---------+-------+
| Field        | Type         | Null | Key | Default | Extra |
+--------------+--------------+------+-----+---------+-------+
| salesmanno   | varchar(6)   | NO   | PRI | NULL    |       |
| salesmanname | varchar(20)  | YES  |     | NULL    |       |
| address1     | varchar(30)  | YES  |     | NULL    |       |
| address2     | varchar(30)  | YES  |     | NULL    |       |
| city         | varchar(20)  | YES  |     | NULL    |       |
| pincode      | decimal(8,0) | YES  |     | NULL    |       |
| state        | varchar(20)  | YES  |     | NULL    |       |
| salamt       | decimal(8,2) | YES  |     | NULL    |       |
| tgttoget     | decimal(6,2) | YES  |     | NULL    |       |
| ytdsales     | decimal(6,2) | YES  |     | NULL    |       |
| remark       | varchar(60)  | YES  |     | NULL    |       |
+--------------+--------------+------+-----+---------+-------+
11 rows in set (0.05 sec)

insert into salesman_master (salesmanno , salesmanname , address1 , address2 , city, pincode , state , salamt , tgttoget ,ytdsales , remark) values ("S00001", "Aman", "A/4","Worli", "Mambai", 400002, "Maharashtra", 3000, 100, 50, "Good" );
insert into salesman_master (salesmanno , salesmanname , address1 , address2 , city, pincode , state , salamt , tgttoget ,ytdsales , remark) values ("S00002", "Omkar", "65","Nariman", "Mambai", 400001, "Maharashtra", 3000, 200, 100, "Good" );
insert into salesman_master (salesmanno , salesmanname , address1 , address2 , city, pincode , state , salamt , tgttoget ,ytdsales , remark) values ("S00003", "Raj", "p-7","Bandra", "Mambai", 400032, "Maharashtra", 3000, 200, 100, "Good" );
insert into salesman_master (salesmanno , salesmanname , address1 , address2 , city, pincode , state , salamt , tgttoget ,ytdsales , remark) values ("S00004", "Ashish", "A/5","Juhu", "Mambai", 400044, "Maharashtra", 3500, 200, 150, "Good" );


mysql> select* from salesman_master;
+------------+--------------+----------+----------+--------+---------+-------------+---------+----------+----------+--------+
| salesmanno | salesmanname | address1 | address2 | city   | pincode | state       | salamt  | tgttoget | ytdsales | remark |
+------------+--------------+----------+----------+--------+---------+-------------+---------+----------+----------+--------+
| S00001     | Aman         | A/4      | Worli    | Mambai |  400002 | Maharashtra | 3000.00 |   100.00 |    50.00 | Good   |
| S00002     | Omkar        | 65       | Nariman  | Mambai |  400001 | Maharashtra | 3000.00 |   200.00 |   100.00 | Good   |
| S00003     | Raj          | p-7      | Bandra   | Mambai |  400032 | Maharashtra | 3000.00 |   200.00 |   100.00 | Good   |
| S00004     | Ashish       | A/5      | Juhu     | Mambai |  400044 | Maharashtra | 3500.00 |   200.00 |   150.00 | Good   |
+------------+--------------+----------+----------+--------+---------+-------------+---------+----------+----------+--------+
4 rows in set (0.00 sec)

4.table

create table sales_order(
    orderno varchar(6) primary key,
    clientno varchar(6),
    orderdate date,
    delyaddr varchar(25),
    salesmanno varchar(6), 
    delytype char, 
    billyn char, 
    delydate date, 
    orederstatus varchar(10),
    foreign key (clientno) references client_master(clientno),
    foreign key (salesmanno) references salesman_master(salesmanno)
);



Query OK, 0 rows affected (0.03 sec)

mysql> desc sales_order;
+--------------+-------------+------+-----+---------+-------+
| Field        | Type        | Null | Key | Default | Extra |
+--------------+-------------+------+-----+---------+-------+
| orderno      | varchar(6)  | NO   | PRI | NULL    |       |
| clientno     | varchar(6)  | YES  | MUL | NULL    |       |
| orderdate    | date        | YES  |     | NULL    |       |
| delyaddr     | varchar(25) | YES  |     | NULL    |       |
| salesmanno   | varchar(6)  | YES  | MUL | NULL    |       |
| delytype     | char(1)     | YES  |     | NULL    |       |
| billyn       | char(1)     | YES  |     | NULL    |       |
| delydate     | date        | YES  |     | NULL    |       |
| orederstatus | varchar(10) | YES  |     | NULL    |       |
+--------------+-------------+------+-----+---------+-------+
9 rows in set (0.01 sec)

insert into sales_order values('O19001','C00001','2004-06-12','null','S00001','F','N','2002-07-20','In Process');
insert into sales_order values('O19002','C00002','2004-06-25','null','S00002','P','N','2002-06-27','Cancelled');
insert into sales_order values('O46865','C00003','2004-02-18','null','S00003','F','Y','2002-02-20','Fulfilled');
insert into sales_order values('O19003','C00001','2004-04-03','null','S00001','F','Y','2002-07-07','In Process');
insert into sales_order values('O46866','C00004','2004-05-20','null','S00002','P','N','2002-05-22','In Process');
insert into sales_order values('O19008','C00005','2004-05-24','null','S00004','F','N','2002-07-26','In Process');


mysql> select * from sales_order;
+---------+----------+------------+----------+------------+----------+--------+------------+--------------+
| orderno | clientno | orderdate  | delyaddr | salesmanno | delytype | billyn | delydate   | orederstatus |
+---------+----------+------------+----------+------------+----------+--------+------------+--------------+
| O19001  | C00001   | 2004-06-12 | null     | S00001     | F        | N      | 2002-07-20 | In Process   |
| O19002  | C00002   | 2004-06-25 | null     | S00002     | P        | N      | 2002-06-27 | Cancelled    |
| O19003  | C00001   | 2004-04-03 | null     | S00001     | F        | Y      | 2002-07-07 | In Process   |
| O19008  | C00005   | 2004-05-24 | null     | S00004     | F        | N      | 2002-07-26 | In Process   |
| O46865  | C00003   | 2004-02-18 | null     | S00003     | F        | Y      | 2002-02-20 | Fulfilled    |
| O46866  | C00004   | 2004-05-20 | null     | S00002     | P        | N      | 2002-05-22 | In Process   |
+---------+----------+------------+----------+------------+----------+--------+------------+--------------+
6 rows in set (0.00 sec)

5. create table sales_order_details(
   orderno varchar(6),
   productno varchar(6), 
   qtyordered numeric(8),
   qtydisp numeric(8),
   productrate numeric(10,2),
   foreign key (orderno) references sales_order(orderno),
   foreign key (productno) references product_master (productno)
   );

 Query OK, 0 rows affected (0.04 sec)

mysql> desc sales_order_details;
+-------------+---------------+------+-----+---------+-------+
| Field       | Type          | Null | Key | Default | Extra |
+-------------+---------------+------+-----+---------+-------+
| orderno     | varchar(6)    | YES  | MUL | NULL    |       |
| productno   | varchar(6)    | YES  | MUL | NULL    |       |
| qtyordered  | decimal(8,0)  | YES  |     | NULL    |       |
| qtydisp     | decimal(8,0)  | YES  |     | NULL    |       |
| productrate | decimal(10,2) | YES  |     | NULL    |       |
+-------------+---------------+------+-----+---------+-------+
5 rows in set (0.0' sec)
'
insert into sales_order_details values ('O19001', 'P00001', 4 , 4 ,525);
insert into sales_order_details values ('O19001', 'P07965', 2 , 1 ,8400);
insert into sales_order_details values ('O19001', 'P07885', 2 , 1 ,5250);
insert into sales_order_details values ('O19002', 'P00001', 10 , 0 ,525);
insert into sales_order_details values ('O46865', 'P07868', 3, 3 ,3150);
insert into sales_order_details values ('O46865', 'P07885', 3 , 1 ,5250);
insert into sales_order_details values ('O46865', 'P00001', 10 , 10 ,525);
insert into sales_order_details values ('O46865', 'P0345"', 4 , 4 ,1050);
insert into sales_order_details values ('O19003', 'P03453', 2 , 2 ,1050);
insert into sales_order_details values ('O19003', 'P06734', 1 , 1 ,12000);
insert into sales_order_details values ('O46866', 'P07965', 1 , 0 ,8400);
insert into sales_order_details values ('O46866', 'P07975', 1 , 0 ,1050);
insert into sales_order_details values ('O10008', 'P00001', 10 , 5 ,525);
insert into sales_order_details values ('O10008', 'P07975', 5 , 3 ,1050);



-- 3.exercise on retriving records from a table 

-- a.find out the names of all the client.

  select name from client_master;

mysql>  select name from client_master;
+----------------+
| name           |
+----------------+
| Ivan Bayross   |
| Mamta Muzumdar |
| Chhaya Bankar  |
| Aswini Joshi   |
| Hansel Colaco  |
| Deepak Sharma  |
+----------------+
6 rows in set (0.03 sec)


-- b.Retrive the entire content of the  client_master table.

mysql> select* from client_master;
+----------+----------------+----------+----------+-----------+---------+-------------+----------+
| clientno | name           | address1 | address2 | city      | pincode | state       | baldue   |
+----------+----------------+----------+----------+-----------+---------+-------------+----------+
| C00001   | Ivan Bayross   | NULL     | NULL     | Mumbai    |  400054 | Maharashtra | 15000.00 |
| C00002   | Mamta Muzumdar | NULL     | NULL     | Madras    |  780001 | Tamil Nadu  |     0.00 |
| C00003   | Chhaya Bankar  | NULL     | NULL     | Mumbai    |  400057 | Maharashtra |  5000.00 |
| C00004   | Aswini Joshi   | NULL     | NULL     | Bangalore |  560001 | Karnataka   |     0.00 |
| C00005   | Hansel Colaco  | NULL     | NULL     | Mumbai    |  400060 | Maharashtra |  2000.00 |
| C00006   | Deepak Sharma  | NULL     | NULL     | Mangalore |  560050 | Karnataka   |     0.00 |
+----------+----------------+----------+----------+-----------+---------+-------------+----------+
6 rows in set (0.01 sec)


-- c. Retrive the list of names, city and the state  of all  the clients.

mysql> select name,city,state from client_master;
+----------------+-----------+-------------+
| name           | city      | state       |
+----------------+-----------+-------------+
| Ivan Bayross   | Mumbai    | Maharashtra |
| Mamta Muzumdar | Madras    | Tamil Nadu  |
| Chhaya Bankar  | Mumbai    | Maharashtra |
| Aswini Joshi   | Bangalore | Karnataka   |
| Hansel Colaco  | Mumbai    | Maharashtra |
| Deepak Sharma  | Mangalore | Karnataka   |
+----------------+-----------+-------------+
6 rows in set (0.00 sec)

-- d.list the  various  product available from the product_master table.


mysql> select* from product_master;
+-----------+---------------+---------------+-------------+-----------+-------------+-----------+-----------+
| productno | description   | profitpercent | unitmeasure | qtyonhand | reorederlvl | sellprice | costprice |
+-----------+---------------+---------------+-------------+-----------+-------------+-----------+-----------+
| P00001    | T-Shirts      |          5.00 | Piece       |       200 |          50 |    350.00 |    250.00 |
| P0345     | Shirts        |          6.00 | Piece       |       150 |          50 |    500.00 |    350.00 |
| P06734    | Cotton-Jeans  |          5.00 | Piece       |       100 |          20 |    600.00 |    450.00 |
| P07865    | Jeans         |          5.00 | Piece       |       100 |          20 |    750.00 |    500.00 |
| P07868    | Trousers      |          2.00 | Piece       |       150 |          50 |    850.00 |    550.00 |
| P07885    | Pull Overs    |          2.50 | Piece       |        80 |          30 |    700.00 |    450.00 |
| P07965    |  Denim Shirts |          4.00 | Piece       |       100 |          40 |    350.00 |    250.00 |
| P07975    | Laycra Top    |          5.00 | Piece       |        70 |          30 |    300.00 |    175.00 |
| P08865    | Skirts        |          5.00 | Piece       |        75 |          30 |    450.00 |    300.00 |
+-----------+---------------+---------------+-------------+-----------+-------------+-----------+-----------+
9 rows in set (0.00 sec)


-- e.List all the clients who are located in the Mumbai

mysql> select * from client_master where city="mumbai";

+----------+---------------+----------+----------+--------+---------+-------------+----------+
| clientno | name          | address1 | address2 | city   | pincode | state       | baldue   |
+----------+---------------+----------+----------+--------+---------+-------------+----------+
| C00001   | Ivan Bayross  | NULL     | NULL     | Mumbai |  400054 | Maharashtra | 15000.00 |
| C00003   | Chhaya Bankar | NULL     | NULL     | Mumbai |  400057 | Maharashtra |  5000.00 |
| C00005   | Hansel Colaco | NULL     | NULL     | Mumbai |  400060 | Maharashtra |  2000.00 |
+----------+---------------+----------+----------+--------+---------+-------------+----------+
3 rows in set (0.01 sec)

-- f.find the names of salesman who have a salary equal to Rs.3000

mysql> select * from salesman_master where salamt=3000;
+------------+--------------+----------+----------+--------+---------+-------------+---------+----------+----------+--------+
| salesmanno | salesmanname | address1 | address2 | city   | pincode | state       | salamt  | tgttoget | ytdsales | remark |
+------------+--------------+----------+----------+--------+---------+-------------+---------+----------+----------+--------+
| S00001     | Aman         | A/4      | Worli    | Mambai |  400002 | Maharashtra | 3000.00 |   100.00 |    50.00 | Good   |
| S00002     | Omkar        | 65       | Nariman  | Mambai |  400001 | Maharashtra | 3000.00 |   200.00 |   100.00 | Good   |
| S00003     | Raj          | p-7      | Bandra   | Mambai |  400032 | Maharashtra | 3000.00 |   200.00 |   100.00 | Good   |
+------------+--------------+----------+----------+--------+---------+-------------+---------+----------+----------+--------+
3 rows in set (0.02 sec)

-- 4. exercise on updating records in a table

-- a. change the city of clientNO 'C0005' to 'Bangalore'

update client_master set city = 'Bangalore'
where clientno = 'c00005';

mysql> select* from client_master;
+----------+----------------+----------+----------+-----------+---------+-------------+----------+
| clientno | name           | address1 | address2 | city      | pincode | state       | baldue   |
+----------+----------------+----------+----------+-----------+---------+-------------+----------+
| C00001   | Ivan Bayross   | NULL     | NULL     | Mumbai    |  400054 | Maharashtra | 15000.00 |
| C00002   | Mamta Muzumdar | NULL     | NULL     | Madras    |  780001 | Tamil Nadu  |     0.00 |
| C00003   | Chhaya Bankar  | NULL     | NULL     | Mumbai    |  400057 | Maharashtra |  5000.00 |
| C00004   | Aswini Joshi   | NULL     | NULL     | Bangalore |  560001 | Karnataka   |     0.00 |
| C00005   | Hansel Colaco  | NULL     | NULL     | Bangalore |  400060 | Maharashtra |  2000.00 |
| C00006   | Deepak Sharma  | NULL     | NULL     | Mangalore |  560050 | Karnataka   |     0.00 |
+----------+----------------+----------+----------+-----------+---------+-------------+----------+
6 rows in set (0.00 sec)


-- b.change the baldue of clientNo 'c00001' to Rs.1000.

update client_master set baldue='1000' where clientno='c00001';

mysql> select * from client_master;
+----------+----------------+----------+----------+-----------+---------+-------------+---------+
| clientno | name           | address1 | address2 | city      | pincode | state       | baldue  |
+----------+----------------+----------+----------+-----------+---------+-------------+---------+
| C00001   | Ivan Bayross   | NULL     | NULL     | Mumbai    |  400054 | Maharashtra | 1000.00 |
| C00002   | Mamta Muzumdar | NULL     | NULL     | Madras    |  780001 | Tamil Nadu  |    0.00 |
| C00003   | Chhaya Bankar  | NULL     | NULL     | Mumbai    |  400057 | Maharashtra | 5000.00 |
| C00004   | Aswini Joshi   | NULL     | NULL     | Bangalore |  560001 | Karnataka   |    0.00 |
| C00005   | Hansel Colaco  | NULL     | NULL     | Bangalore |  400060 | Maharashtra | 2000.00 |
| C00006   | Deepak Sharma  | NULL     | NULL     | Mangalore |  560050 | Karnataka   |    0.00 |
+----------+----------------+----------+----------+-----------+---------+-------------+---------+
6 rows in set (0.00 sec)

-- c. change the cost price of 'Trousers'to Rs.950.00.

update product_master set costprice='950' where description='Trousers';


mysql> select* from product_master;
+-----------+---------------+---------------+-------------+-----------+-------------+-----------+-----------+
| productno | description   | profitpercent | unitmeasure | qtyonhand | reorederlvl | sellprice | costprice |
+-----------+---------------+---------------+-------------+-----------+-------------+-----------+-----------+
| P00001    | T-Shirts      |          5.00 | Piece       |       200 |          50 |    350.00 |    250.00 |
| P0345     | Shirts        |          6.00 | Piece       |       150 |          50 |    500.00 |    350.00 |
| P06734    | Cotton-Jeans  |          5.00 | Piece       |       100 |          20 |    600.00 |    450.00 |
| P07865    | Jeans         |          5.00 | Piece       |       100 |          20 |    750.00 |    500.00 |
| P07868    | Trousers      |          2.00 | Piece       |       150 |          50 |    850.00 |    950.00 |
| P07885    | Pull Overs    |          2.50 | Piece       |        80 |          30 |    700.00 |    450.00 |
| P07965    |  Denim Shirts |          4.00 | Piece       |       100 |          40 |    350.00 |    250.00 |
| P07975    | Laycra Top    |          5.00 | Piece       |        70 |          30 |    300.00 |    175.00 |
| P08865    | Skirts        |          5.00 | Piece       |        75 |          30 |    450.00 |    300.00 |
+-----------+---------------+---------------+-------------+-----------+-------------+-----------+-----------+
9 rows in set (0.00 sec)

-- d. change the city of the salesman to pune.

update salesman_master set city="pune";

+------------+--------------+----------+----------+------+---------+-------------+---------+----------+----------+--------+
| salesmanno | salesmanname | address1 | address2 | city | pincode | state       | salamt  | tgttoget | ytdsales | remark |
+------------+--------------+----------+----------+------+---------+-------------+---------+----------+----------+--------+
| S00001     | Aman         | A/4      | Worli    | pune |  400002 | Maharashtra | 3000.00 |   100.00 |    50.00 | Good   |
| S00002     | Omkar        | 65       | Nariman  | pune |  400001 | Maharashtra | 3000.00 |   200.00 |   100.00 | Good   |
| S00003     | Raj          | p-7      | Bandra   | pune |  400032 | Maharashtra | 3000.00 |   200.00 |   100.00 | Good   |
| S00004     | Ashish       | A/5      | Juhu     | pune |  400044 | Maharashtra | 3500.00 |   200.00 |   150.00 | Good   |
+------------+--------------+----------+----------+------+---------+-------------+---------+----------+----------+--------+
4 rows in set (0.00 sec)

5. exercise on deleting rcords in a table

-- a.Delete all salesman from the salesman_master whose salaries are equal to Rs.3500

delete from salesman_master where salamt='3500';

-- b.Delete all Products from product_master wherethe quantity on hand is equal to 100.

delete from product_master where qtyonhand=100;

mysql> select*from product_master;
+-----------+-------------+---------------+-------------+-----------+-------------+-----------+-----------+
| productno | description | profitpercent | unitmeasure | qtyonhand | reorederlvl | sellprice | costprice |
+-----------+-------------+---------------+-------------+-----------+-------------+-----------+-----------+
| P00001    | T-Shirts    |          5.00 | Piece       |       200 |          50 |    350.00 |    250.00 |
| P0345     | Shirts      |          6.00 | Piece       |       150 |          50 |    500.00 |    350.00 |
| P07868    | Trousers    |          2.00 | Piece       |       150 |          50 |    850.00 |    950.00 |
| P07885    | Pull Overs  |          2.50 | Piece       |        80 |          30 |    700.00 |    450.00 |
| P07975    | Laycra Top  |          5.00 | Piece       |        70 |          30 |    300.00 |    175.00 |
| P08865    | Skirts      |          5.00 | Piece       |        75 |          30 |    450.00 |    300.00 |
+-----------+-------------+---------------+-------------+-----------+-------------+-----------+-----------+
6 rows in set (0.00 sec)

-- c.delete from client_master where the column state holds the value 'Tamil Nadu'. 

  delete from client_master where state="TamilNadu";




















