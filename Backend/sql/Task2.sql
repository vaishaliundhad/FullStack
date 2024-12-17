-- create database company;
-- use company;

1. create table client_master(
    client_no varchar(6) PRIMARY KEY,
    name varchar(20),
    address1 varchar(30),
    address2 varchar(30),
    city varchar(15),
    pincode numeric(8),
    state varchar(15),
    bal_due numeric(10,2)
);

 desc client_master;
+-----------+---------------+------+-----+---------+-------+
| Field     | Type          | Null | Key | Default | Extra |
+-----------+---------------+------+-----+---------+-------+
| client_no | varchar(6)    | NO   | PRI | NULL    |       |
| name      | varchar(20)   | YES  |     | NULL    |       |
| address1  | varchar(30)   | YES  |     | NULL    |       |
| address2  | varchar(30)   | YES  |     | NULL    |       |
| city      | varchar(15)   | YES  |     | NULL    |       |
| pincode   | decimal(8,0)  | YES  |     | NULL    |       |
| state     | varchar(15)   | YES  |     | NULL    |       |
| bal_due   | decimal(10,2) | YES  |     | NULL    |       |
+-----------+---------------+------+-----+---------+-------+

insert into client_master values('C00001', 'Ivan Bayross', 'A', '5', 'Mumbai', 400054, 'Maharashtra', 15000);
insert into client_master values('C00002', 'Mamta Muzumdar', 'C', '10', 'Madras', 780001, 'Tamil Nadu', 0);
insert into client_master values('C00003', 'Chhaya Bankar', 'B', '7', 'Mumbai', 400057, 'Maharashtra', 5000);
insert into client_master values('C00004', 'Ashwini Joshi', 'E', '2', 'Bangalore', 560001, 'Karnataka', 0);
insert into client_master values('C00005', 'Hansel Colaco', 'A', '2', 'Mumbai', 400060, 'Maharashtra', 2000);
insert into client_master values('C00006', 'Deepak Sharma', 'B', '3', 'Mangalore', 560050, 'Karnataka', 0);

select * from client_master;
+-----------+----------------+----------+----------+-----------+---------+-------------+----------+
| client_no | name           | address1 | address2 | city      | pincode | state       | bal_due  |
+-----------+----------------+----------+----------+-----------+---------+-------------+----------+
| C00001    | Ivan Bayross   | A        | 5        | Mumbai    |  400054 | Maharashtra | 15000.00 |
| C00002    | Mamta Muzumdar | C        | 10       | Madras    |  780001 | Tamil Nadu  |     0.00 |
| C00003    | Chhaya Bankar  | B        | 7        | Mumbai    |  400057 | Maharashtra |  5000.00 |
| C00004    | Ashwini Joshi  | E        | 2        | Bangalore |  560001 | Karnataka   |     0.00 |
| C00005    | Hansel Colaco  | A        | 2        | Mumbai    |  400060 | Maharashtra |  2000.00 |
| C00006    | Deepak Sharma  | B        | 3        | Mangalore |  560050 | Karnataka   |     0.00 |
+-----------+----------------+----------+----------+-----------+---------+-------------+----------+
6 rows in set (0.00 sec)

2.create table product_master(
    product_no varchar(6) PRIMARY KEY,
    description varchar(15),
    profit_percent numeric(4,2),
    unit_measure varchar(10),
    qty_on_hand numeric(8),
    reorder_lvl numeric(8),
    sell_price numeric(8,2),
    cost_price numeric(8,2)
);

desc product_master;
+----------------+--------------+------+-----+---------+-------+
| Field          | Type         | Null | Key | Default | Extra |
+----------------+--------------+------+-----+---------+-------+
| product_no     | varchar(6)   | NO   | PRI | NULL    |       |
| description    | varchar(15)  | YES  |     | NULL    |       |
| profit_percent | decimal(4,2) | YES  |     | NULL    |       |
| unit_measure   | varchar(10)  | YES  |     | NULL    |       |
| qty_on_hand    | decimal(8,0) | YES  |     | NULL    |       |
| reorder_lvl    | decimal(8,0) | YES  |     | NULL    |       |
| sell_price     | decimal(8,2) | YES  |     | NULL    |       |
| cost_price     | decimal(8,2) | YES  |     | NULL    |       |
+----------------+--------------+------+-----+---------+-------+
8 rows in set (0.00 sec)

insert into product_master values('P00001', 'T-Shirts', 5, 'Piece', 200, 50, 350, 250);
insert into product_master values('P0345', 'Shirts', 6, 'Piece', 150, 50, 500, 350);
insert into product_master values('P06734', 'Cotton Jeans', 5, 'Piece', 100, 20, 600, 450);
insert into product_master values('P07865', 'Jeans', 5, 'Piece', 100, 20, 750, 500);
insert into product_master values('P07868', 'Trousers', 2, 'Piece', 150, 50, 850, 550);
insert into product_master values('P07885', 'Pull Overs', 2.5, 'Piece', 80, 30, 700, 450);
insert into product_master values('P07965', 'Denim Shirts', 4, 'Piece', 100, 40, 350, 250);
insert into product_master values('P07975', 'Lycra Tops', 5, 'Piece', 70, 30, 300, 175);
insert into product_master values('P08865', 'Skirts', 5, 'Piece', 75, 30, 450, 300);

select * from product_master;
-- +------------+--------------+----------------+--------------+-------------+-------------+------------+------------+
-- | product_no | description  | profit_percent | unit_measure | qty_on_hand | reorder_lvl | sell_price | cost_price |
-- +------------+--------------+----------------+--------------+-------------+-------------+------------+------------+
-- | P00001     | T-Shirts     |           5.00 | Piece        |         200 |          50 |     350.00 |     250.00 |
-- | P0345      | Shirts       |           6.00 | Piece        |         150 |          50 |     500.00 |     350.00 |
-- | P06734     | Cotton Jeans |           5.00 | Piece        |         100 |          20 |     600.00 |     450.00 |
-- | P07865     | Jeans        |           5.00 | Piece        |         100 |          20 |     750.00 |     500.00 |
-- | P07868     | Trousers     |           2.00 | Piece        |         150 |          50 |     850.00 |     550.00 |
-- | P07885     | Pull Overs   |           2.50 | Piece        |          80 |          30 |     700.00 |     450.00 |
-- | P07965     | Denim Shirts |           4.00 | Piece        |         100 |          40 |     350.00 |     250.00 |
-- | P07975     | Lycra Tops   |           5.00 | Piece        |          70 |          30 |     300.00 |     175.00 |
-- | P08865     | Skirts       |           5.00 | Piece        |          75 |          30 |     450.00 |     300.00 |
-- +------------+--------------+----------------+--------------+-------------+-------------+------------+------------+
-- 9 rows in set (0.00 sec)


3.create table salesman_master(
    salesman_no varchar(6) PRIMARY KEY,
    salesman_name varchar(20),
    address1 varchar(30),
    address2 varchar(30),
    city varchar(20),
    pincode numeric(8),
    state varchar(20),
    sal_amt numeric(8,2),
    tgt_to_get numeric(6,2),
    ytd_sales numeric(6,2),
    remarks varchar(60)
);

desc salesman_master;
-- +---------------+--------------+------+-----+---------+-------+
-- | Field         | Type         | Null | Key | Default | Extra |
-- +---------------+--------------+------+-----+---------+-------+
-- | salesman_no   | varchar(6)   | NO   | PRI | NULL    |       |
-- | salesman_name | varchar(20)  | YES  |     | NULL    |       |
-- | address1      | varchar(30)  | YES  |     | NULL    |       |
-- | address2      | varchar(30)  | YES  |     | NULL    |       |
-- | city          | varchar(20)  | YES  |     | NULL    |       |
-- | pincode       | decimal(8,0) | YES  |     | NULL    |       |
-- | state         | varchar(20)  | YES  |     | NULL    |       |
-- | sal_amt       | decimal(8,2) | YES  |     | NULL    |       |
-- | tgt_to_get    | decimal(6,2) | YES  |     | NULL    |       |
-- | ytd_sales     | decimal(6,2) | YES  |     | NULL    |       |
-- | remarks       | varchar(60)  | YES  |     | NULL    |       |
-- +---------------+--------------+------+-----+---------+-------+
-- 11 rows in set (0.00 sec)


insert into salesman_master values('S00001', 'Aman', 'A/14', 'Worli', 'Mumbai', 400002, 'Maharashtra', 3000, 100, 50, 'Good');
insert into salesman_master values('S00002', 'Omkar', '65', 'Nariman', 'Mumbai', 400001, 'Maharashtra', 3000, 200, 100, 'Good');
insert into salesman_master values('S00003', 'Raj', 'P-7', 'Bandra', 'Mumbai', 400032, 'Maharashtra', 3000, 200, 100, 'Good');
insert into salesman_master values('S00004', 'Ashish', 'A/5', 'Juhu', 'Mumbai', 400044, 'Maharashtra', 3500, 200, 150, 'Good');

select * from salesman_master;
-- +-------------+---------------+----------+----------+--------+---------+-------------+---------+------------+-----------+---------+
-- | salesman_no | salesman_name | address1 | address2 | city   | pincode | state       | sal_amt | tgt_to_get | ytd_sales | remarks |
-- +-------------+---------------+----------+----------+--------+---------+-------------+---------+------------+-----------+---------+
-- | S00001      | Aman          | A/14     | Worli    | Mumbai |  400002 | Maharashtra | 3000.00 |     100.00 |     50.00 | Good    |
-- | S00002      | Omkar         | 65       | Nariman  | Mumbai |  400001 | Maharashtra | 3000.00 |     200.00 |    100.00 | Good    |
-- | S00003      | Raj           | P-7      | Bandra   | Mumbai |  400032 | Maharashtra | 3000.00 |     200.00 |    100.00 | Good    |
-- | S00004      | Ashish        | A/5      | Juhu     | Mumbai |  400044 | Maharashtra | 3500.00 |     200.00 |    150.00 | Good    |
-- +-------------+---------------+----------+----------+--------+---------+-------------+---------+------------+-----------+---------+
-- 4 rows in set (0.00 sec)

select name from client_master;

-- +----------------+
-- | name           |
-- +----------------+
-- | Ivan Bayross   |
-- | Mamta Muzumdar |
-- | Chhaya Bankar  |
-- | Ashwini Joshi  |
-- | Hansel Colaco  |
-- | Deepak Sharma  |
-- +----------------+
-- 6 rows in set (0.00 sec)

select * from client_master;

-- +-----------+----------------+----------+----------+-----------+---------+-------------+----------+
-- | client_no | name           | address1 | address2 | city      | pincode | state       | bal_due  |
-- +-----------+----------------+----------+----------+-----------+---------+-------------+----------+
-- | C00001    | Ivan Bayross   | A        | 5        | Mumbai    |  400054 | Maharashtra | 15000.00 |
-- | C00002    | Mamta Muzumdar | C        | 10       | Madras    |  780001 | Tamil Nadu  |     0.00 |
-- | C00003    | Chhaya Bankar  | B        | 7        | Mumbai    |  400057 | Maharashtra |  5000.00 |
-- | C00004    | Ashwini Joshi  | E        | 2        | Bangalore |  560001 | Karnataka   |     0.00 |
-- | C00005    | Hansel Colaco  | A        | 2        | Mumbai    |  400060 | Maharashtra |  2000.00 |
-- | C00006    | Deepak Sharma  | B        | 3        | Mangalore |  560050 | Karnataka   |     0.00 |
-- +-----------+----------------+----------+----------+-----------+---------+-------------+----------+
-- 6 rows in set (0.00 sec)

select name, city, state from client_master;

-- +----------------+-----------+-------------+
-- | name           | city      | state       |
-- +----------------+-----------+-------------+
-- | Ivan Bayross   | Mumbai    | Maharashtra |
-- | Mamta Muzumdar | Madras    | Tamil Nadu  |
-- | Chhaya Bankar  | Mumbai    | Maharashtra |
-- | Ashwini Joshi  | Bangalore | Karnataka   |
-- | Hansel Colaco  | Mumbai    | Maharashtra |
-- | Deepak Sharma  | Mangalore | Karnataka   |
-- +----------------+-----------+-------------+
-- 6 rows in set (0.00 sec)

select description from product_master;

-- +--------------+
-- | description  |
-- +--------------+
-- | T-Shirts     |
-- | Shirts       |
-- | Cotton Jeans |
-- | Jeans        |
-- | Trousers     |
-- | Pull Overs   |
-- | Denim Shirts |
-- | Lycra Tops   |
-- | Skirts       |
-- +--------------+
-- 9 rows in set (0.00 sec)

select * from client_master where city = "Mumbai";

-- +-----------+---------------+----------+----------+--------+---------+-------------+----------+
-- | client_no | name          | address1 | address2 | city   | pincode | state       | bal_due  |
-- +-----------+---------------+----------+----------+--------+---------+-------------+----------+
-- | C00001    | Ivan Bayross  | A        | 5        | Mumbai |  400054 | Maharashtra | 15000.00 |
-- | C00003    | Chhaya Bankar | B        | 7        | Mumbai |  400057 | Maharashtra |  5000.00 |
-- | C00005    | Hansel Colaco | A        | 2        | Mumbai |  400060 | Maharashtra |  2000.00 |
-- +-----------+---------------+----------+----------+--------+---------+-------------+----------+
-- 3 rows in set (0.00 sec)

select salesman_name from salesman_master where sal_amt = 3000;

-- +---------------+
-- | salesman_name |
-- +---------------+
-- | Aman          |
-- | Omkar         |
-- | Raj           |
-- +---------------+
-- 3 rows in set (0.00 sec)

-- Exercise 4

-- a
update client_master
set city = "Bangalore"
where client_no = "C00005";

-- +-----------+----------------+----------+----------+-----------+---------+-------------+----------+
-- | client_no | name           | address1 | address2 | city      | pincode | state       | bal_due  |
-- +-----------+----------------+----------+----------+-----------+---------+-------------+----------+
-- | C00001    | Ivan Bayross   | A        | 5        | Mumbai    |  400054 | Maharashtra | 15000.00 |
-- | C00002    | Mamta Muzumdar | C        | 10       | Madras    |  780001 | Tamil Nadu  |     0.00 |
-- | C00003    | Chhaya Bankar  | B        | 7        | Mumbai    |  400057 | Maharashtra |  5000.00 |
-- | C00004    | Ashwini Joshi  | E        | 2        | Bangalore |  560001 | Karnataka   |     0.00 |
-- | C00005    | Hansel Colaco  | A        | 2        | Bangalore |  400060 | Maharashtra |  2000.00 |
-- | C00006    | Deepak Sharma  | B        | 3        | Mangalore |  560050 | Karnataka   |     0.00 |
-- +-----------+----------------+----------+----------+-----------+---------+-------------+----------+
-- 6 rows in set (0.00 sec)

-- b

update client_master
set bal_due = 1000
where client_no = 'C00001';

-- | client_no | name           | address1 | address2 | city      | pincode | state       | bal_due |
-- +-----------+----------------+----------+----------+-----------+---------+-------------+---------+
-- | C00001    | Ivan Bayross   | A        | 5        | Mumbai    |  400054 | Maharashtra | 1000.00 |
-- | C00002    | Mamta Muzumdar | C        | 10       | Madras    |  780001 | Tamil Nadu  |    0.00 |
-- | C00003    | Chhaya Bankar  | B        | 7        | Mumbai    |  400057 | Maharashtra | 5000.00 |
-- | C00004    | Ashwini Joshi  | E        | 2        | Bangalore |  560001 | Karnataka   |    0.00 |
-- | C00005    | Hansel Colaco  | A        | 2        | Bangalore |  400060 | Maharashtra | 2000.00 |
-- | C00006    | Deepak Sharma  | B        | 3        | Mangalore |  560050 | Karnataka   |    0.00 |
-- +-----------+----------------+----------+----------+-----------+---------+-------------+---------+

-- c

update product_master
set cost_price = 950
where description = "Trousers";

-- +------------+-------------+----------------+--------------+-------------+-------------+------------+------------+
-- | product_no | description | profit_percent | unit_measure | qty_on_hand | reorder_lvl | sell_price | cost_price |
-- +------------+-------------+----------------+--------------+-------------+-------------+------------+------------+
-- | P07868     | Trousers    |           2.00 | Piece        |         150 |          50 |     850.00 |     950.00 |
-- +------------+-------------+----------------+--------------+-------------+-------------+------------+------------+
-- 1 row in set (0.00 sec)

-- d

update salesman_master
set city = "Pune";

-- +-------------+---------------+----------+----------+------+---------+-------------+---------+------------+-----------+---------+
-- | salesman_no | salesman_name | address1 | address2 | city | pincode | state       | sal_amt | tgt_to_get | ytd_sales | remarks |
-- +-------------+---------------+----------+----------+------+---------+-------------+---------+------------+-----------+---------+
-- | S00001      | Aman          | A/14     | Worli    | Pune |  400002 | Maharashtra | 3000.00 |     100.00 |     50.00 | Good    |
-- | S00002      | Omkar         | 65       | Nariman  | Pune |  400001 | Maharashtra | 3000.00 |     200.00 |    100.00 | Good    |
-- | S00003      | Raj           | P-7      | Bandra   | Pune |  400032 | Maharashtra | 3000.00 |     200.00 |    100.00 | Good    |
-- | S00004      | Ashish        | A/5      | Juhu     | Pune |  400044 | Maharashtra | 3500.00 |     200.00 |    150.00 | Good    |
-- +-------------+---------------+----------+----------+------+---------+-------------+---------+------------+-----------+---------+
-- 4 rows in set (0.00 sec)

-- Exercise 5

-- a

delete from salesman_master where sal_amt = 3500;

-- +-------------+---------------+----------+----------+------+---------+-------------+---------+------------+-----------+---------+
-- | salesman_no | salesman_name | address1 | address2 | city | pincode | state       | sal_amt | tgt_to_get | ytd_sales | remarks |
-- +-------------+---------------+----------+----------+------+---------+-------------+---------+------------+-----------+---------+
-- | S00001      | Aman          | A/14     | Worli    | Pune |  400002 | Maharashtra | 3000.00 |     100.00 |     50.00 | Good    |
-- | S00002      | Omkar         | 65       | Nariman  | Pune |  400001 | Maharashtra | 3000.00 |     200.00 |    100.00 | Good    |
-- | S00003      | Raj           | P-7      | Bandra   | Pune |  400032 | Maharashtra | 3000.00 |     200.00 |    100.00 | Good    |
-- +-------------+---------------+----------+----------+------+---------+-------------+---------+------------+-----------+---------+
-- 3 rows in set (0.00 sec)

-- b

delete from product_master where qty_on_hand = 100;

select * from product_master;
-- +------------+-------------+----------------+--------------+-------------+-------------+------------+------------+
-- | product_no | description | profit_percent | unit_measure | qty_on_hand | reorder_lvl | sell_price | cost_price |
-- +------------+-------------+----------------+--------------+-------------+-------------+------------+------------+
-- | P00001     | T-Shirts    |           5.00 | Piece        |         200 |          50 |     350.00 |     250.00 |
-- | P0345      | Shirts      |           6.00 | Piece        |         150 |          50 |     500.00 |     350.00 |
-- | P07868     | Trousers    |           2.00 | Piece        |         150 |          50 |     850.00 |     950.00 |
-- | P07885     | Pull Overs  |           2.50 | Piece        |          80 |          30 |     700.00 |     450.00 |
-- | P07975     | Lycra Tops  |           5.00 | Piece        |          70 |          30 |     300.00 |     175.00 |
-- | P08865     | Skirts      |           5.00 | Piece        |          75 |          30 |     450.00 |     300.00 |
-- +------------+-------------+----------------+--------------+-------------+-------------+------------+------------+
-- 6 rows in set (0.00 sec)

-- c

delete from client_master where state = "Tamil Nadu";

-- +-----------+---------------+----------+----------+-----------+---------+-------------+---------+
-- | client_no | name          | address1 | address2 | city      | pincode | state       | bal_due |
-- +-----------+---------------+----------+----------+-----------+---------+-------------+---------+
-- | C00001    | Ivan Bayross  | A        | 5        | Mumbai    |  400054 | Maharashtra | 1000.00 |
-- | C00003    | Chhaya Bankar | B        | 7        | Mumbai    |  400057 | Maharashtra | 5000.00 |
-- | C00004    | Ashwini Joshi | E        | 2        | Bangalore |  560001 | Karnataka   |    0.00 |
-- | C00005    | Hansel Colaco | A        | 2        | Bangalore |  400060 | Maharashtra | 2000.00 |
-- | C00006    | Deepak Sharma | B        | 3        | Mangalore |  560050 | Karnataka   |    0.00 |
-- +-----------+---------------+----------+----------+-----------+---------+-------------+---------+
-- 5 rows in set (0.00 sec)


create table sales_order(
    order_no varchar(6) PRIMARY KEY,
    client_no varchar(6),
    order_date date NOT NULL,
    dely_addr varchar(25),
    salesman_no varchar(6),
    dely_type char(1),
    bill_yn char(1),
    dely_date date,
    order_status varchar(10),
    CONSTRAINT CHK_order_no CHECK (order_no LIKE 'O%'),
    CONSTRAINT FK_CLIENT_ID FOREIGN KEY (client_no) REFERENCES client_master(client_no),
    CONSTRAINT FK_SALESMAN_ID FOREIGN KEY (salesman_no) REFERENCES salesman_master(salesman_no),
    CONSTRAINT CHK_order_status CHECK ((order_status = "In Process") || (order_status = "Fulfilled") || (order_status = "BackOrder") || (order_status = "Cancelled"))
);

-- +--------------+-------------+------+-----+---------+-------+
-- | Field        | Type        | Null | Key | Default | Extra |
-- +--------------+-------------+------+-----+---------+-------+
-- | order_no     | varchar(6)  | NO   | PRI | NULL    |       |
-- | client_no    | varchar(6)  | YES  | MUL | NULL    |       |
-- | order_date   | date        | NO   |     | NULL    |       |
-- | dely_addr    | varchar(25) | YES  |     | NULL    |       |
-- | salesman_no  | varchar(6)  | YES  | MUL | NULL    |       |
-- | dely_type    | char(1)     | YES  |     | NULL    |       |
-- | bill_yn      | char(1)     | YES  |     | NULL    |       |
-- | dely_date    | date        | YES  |     | NULL    |       |
-- | order_status | varchar(10) | YES  |     | NULL    |       |
-- +--------------+-------------+------+-----+---------+-------+
-- 9 rows in set (0.00 sec)

insert into sales_order values('O19001', 'C00001', '04-06-12', 'Mumbai', 'S00001', 'F', 'N', '02-07-20', 'In Process');
insert into sales_order values('O19002', 'C00002', '04-06-25', 'Surat', 'S00002', 'P', 'N', '02-06-27', 'Cancelled');
insert into sales_order values('O46865', 'C00003', '04-02-18', 'Mumbai', 'S00003', 'F', 'Y', '02-02-20', 'Fulfilled');
insert into sales_order values('O19003', 'C00001', '04-04-03', 'Pune', 'S00001', 'F', 'Y', '02-04-07', 'Fulfilled');
insert into sales_order values('O46866', 'C00004', '04-05-20', 'Pune', 'S00002', 'P', 'N', '02-05-22', 'Cancelled');
insert into sales_order values('O19008', 'C00005', '04-05-24', 'Mumbai', 'S00004', 'F', 'N', '02-07-26', 'In Process');

select * from sales_order;
-- +----------+-----------+------------+-----------+-------------+-----------+---------+------------+--------------+
-- | order_no | client_no | order_date | dely_addr | salesman_no | dely_type | bill_yn | dely_date  | order_status |
-- +----------+-----------+------------+-----------+-------------+-----------+---------+------------+--------------+
-- | O19001   | C00001    | 2004-06-12 | Mumbai    | S00001      | F         | N       | 2002-07-20 | In Process   |
-- | O19002   | C00002    | 2004-06-25 | Surat     | S00002      | P         | N       | 2002-06-27 | Cancelled    |
-- | O19003   | C00001    | 2004-04-03 | Pune      | S00001      | F         | Y       | 2002-04-07 | Fulfilled    |
-- | O19008   | C00005    | 2004-05-24 | Mumbai    | S00004      | F         | N       | 2002-07-26 | In Process   |
-- | O46865   | C00003    | 2004-02-18 | Mumbai    | S00003      | F         | Y       | 2002-02-20 | Fulfilled    |
-- | O46866   | C00004    | 2004-05-20 | Pune      | S00002      | P         | N       | 2002-05-22 | Cancelled    |
-- +----------+-----------+------------+-----------+-------------+-----------+---------+------------+--------------+
-- 6 rows in set (0.01 sec)

create table sales_order_details(
    order_no varchar(6),
    product_no varchar(6),
    qty_ordered numeric(8),
    qty_disp numeric(8),
    product_rate numeric(10,2),
    CONSTRAINT FK_order_no FOREIGN KEY (order_no) REFERENCES sales_order(order_no),
    CONSTRAINT FK_product_no FOREIGN KEY (product_no) REFERENCES product_master(product_no)
);

-- +--------------+---------------+------+-----+---------+-------+
-- | Field        | Type          | Null | Key | Default | Extra |
-- +--------------+---------------+------+-----+---------+-------+
-- | order_no     | varchar(6)    | YES  | MUL | NULL    |       |
-- | product_no   | varchar(6)    | YES  | MUL | NULL    |       |
-- | qty_ordered  | decimal(8,0)  | YES  |     | NULL    |       |
-- | qty_disp     | decimal(8,0)  | YES  |     | NULL    |       |
-- | product_rate | decimal(10,2) | YES  |     | NULL    |       |
-- +--------------+---------------+------+-----+---------+-------+
-- 5 rows in set (0.00 sec)

insert into sales_order_details values('O19001', 'P00001', 4, 4, 525);
insert into sales_order_details values('O19001', 'P07965', 2, 1, 8400);
insert into sales_order_details values('O19001', 'P07885', 2, 1, 5250);
insert into sales_order_details values('O19002', 'P00001', 10, 0, 525);
insert into sales_order_details values('O46865', 'P07868', 3, 3, 3150);
insert into sales_order_details values('O46865', 'P07885', 3, 1, 5250);
insert into sales_order_details values('O46865', 'P00001', 10, 10, 525);
insert into sales_order_details values('O46865', 'P0345', 4, 4, 1050);
insert into sales_order_details values('O19003', 'P08865', 2, 2, 1050);
insert into sales_order_details values('O19003', 'P06734', 1, 1, 12000);
insert into sales_order_details values('O46866', 'P07965', 1, 0, 8400);
insert into sales_order_details values('O19008', 'P00001', 10, 5, 525);
insert into sales_order_details values('O19008', 'P07975', 5, 3, 1050);

select * from sales_order_details;
-- +----------+------------+-------------+----------+--------------+
-- | order_no | product_no | qty_ordered | qty_disp | product_rate |
-- +----------+------------+-------------+----------+--------------+
-- | O19001   | P00001     |           4 |        4 |       525.00 |
-- | O19001   | P07965     |           2 |        1 |      8400.00 |
-- | O19001   | P07885     |           2 |        1 |      5250.00 |
-- | O19002   | P00001     |          10 |        0 |       525.00 |
-- | O46865   | P07868     |           3 |        3 |      3150.00 |
-- | O46865   | P07885     |           3 |        1 |      5250.00 |
-- | O46865   | P00001     |          10 |       10 |       525.00 |
-- | O46865   | P0345      |           4 |        4 |      1050.00 |
-- | O19003   | P06734     |           1 |        1 |     12000.00 |
-- | O46866   | P07965     |           1 |        0 |      8400.00 |
-- | O19008   | P00001     |          10 |        5 |       525.00 |
-- | O19008   | P07975     |           5 |        3 |      1050.00 |
-- +----------+------------+-------------+----------+--------------+
-- 12 rows in set (0.00 sec)




******************* 1. Exercises on using Having and Group By Clauses: ********************

a. Print the description and total qty sold for each product.

select  pm.description,sum(sod.qty_ordered) as total
from sales_order_details as sod
inner join product_master as pm
on pm.product_no= sod.product_no
inner join sales_order as so
on sod.order_no= so.order_no
Group by description;


+--------------+-------+
| description  | total |
+--------------+-------+
| T-Shirts     |    34 |
| Denim Shirts |     3 |
| Pull Overs   |     5 |
| Cotton Jeans |     1 |
| Skirts       |     2 |
| Trousers     |     3 |
| Shirts       |     4 |
| Lycra Tops   |     5 |
+--------------+-------+
8 rows in set (0.01 sec)



b. Find the value of each product sold.


C. Calculate the average qty sold for each client that has a maximum order value of 15000.00.

select cm.client_no , cm.name as client_name ,avg(sod.qty_ordered ) as total
from sales_order as so
inner join client_master as cm
on so.client_no= cm.client_no
inner join sales_order_details as sod
on sod.order_no = so.order_no
Group by client_no
having max(sod.qty_ordered )< 15000
order by avg(sod.qty_ordered ) asc;

+-----------+----------------+---------+
| client_no | client_name    | total   |
+-----------+----------------+---------+
| C00004    | Ashwini Joshi  |  1.0000 |
| C00001    | Ivan Bayross   |  2.2000 |
| C00003    | Chhaya Bankar  |  5.0000 |
| C00005    | Hansel Colaco  |  7.5000 |
| C00002    | Mamta Muzumdar | 10.0000 |
+-----------+----------------+---------+
5 rows in set (0.00 sec)



d. Find out the total of all the billed orders for the month of June.

select so.order_no, so.order_date , so.order_status , sum(sod.qty_ordered) as total
from sales_order as so
inner join sales_order_details as sod
on so.order_no = sod.order_no
where so.order_date like '%6%'
Group by order_no
order by sum(sod.qty_ordered);

+----------+------------+--------------+-------+
| order_no | order_date | order_status | total |
+----------+------------+--------------+-------+
| O19001   | 2004-06-12 | In Process   |     8 |
| O19002   | 2004-06-25 | Cancelled    |    10 |
+----------+------------+--------------+-------+
2 rows in set (0.01 sec)



***************2. Exercises on Joins and Correlation:*********************

a. Find out the products, which have been sold to 'Ivan Bayross'.
                               
    --   select product_master.description
    --  from product_master
    --  inner join sales_order_details on sales_order_details.product_no = product_master.product_no
    --  inner join sales_order on sales_order.order_no = sales_order_details.order_no
    --  inner join client_master on sales_order.client_no= client_master.client_no
    --  where client_master.name = "ivan Bayross";


    select pm.description
    from product_master as pm
    inner join sales_order_details as sod
    on sod.product_no= pm.product_no
    inner join sales_order as so
    on so.order_no = sod.order_no
    inner join client_master as cm 
    on cm.client_no= so.client_no
    where cm.name="ivan bayross";

+--------------+
| description  |
+--------------+
| T-Shirts     |
| Denim Shirts |
| Pull Overs   |
| Cotton Jeans |
| Skirts       |
+--------------+


b. Find out the products and their quantities that will have to be delivered in the current month.

select pm.description, so.order_date, sod.qty_disp , so.order_status
from  sales_order as so
inner join sales_order_details as sod
on so.order_no= sod.order_no
inner join product_master pm 
on pm.product_no = sod.product_no
where so.order_date like '%6%';


+--------------+------------+----------+--------------+
| description  | order_date | qty_disp | order_status |
+--------------+------------+----------+--------------+
| T-Shirts     | 2004-06-12 |        4 | In Process   |
| Denim Shirts | 2004-06-12 |        1 | In Process   |
| Pull Overs   | 2004-06-12 |        1 | In Process   |
| T-Shirts     | 2004-06-25 |        0 | Cancelled    |
+--------------+------------+----------+--------------+




c. List the ProductNo and description of constantly sold (i.e. rapidly moving) products.

select  distinct  description 
from sales_order_details as sod
inner join sales_order as so 
on so.order_no= sod.order_no
inner join product_master as pm
on pm.product_no= sod.product_no;


+--------------+
| description  |
+--------------+
| T-Shirts     |
| Denim Shirts |
| Pull Overs   |
| Cotton Jeans |
| Skirts       |
| Trousers     |
| Shirts       |
| Lycra Tops   |
+--------------+
8 rows in set (0.01 sec)

d. Find the names of clients who have purchased Trousers.

select cm.name , pm.description
from sales_order as so
inner join sales_order_details as sod 
on sod.order_no = so.order_no
inner join product_master as  pm  on 
sod.product_no =  pm.product_no
inner join client_master as cm 
on cm.client_no= so.client_no 
where pm.description="Trousers";

 +---------------+-------------+
| name          | description |
+---------------+-------------+
| Chhaya Bankar | Trousers    |
+---------------+-------------+


e.List the products and orders from customers who have ordered less than 5 units of 'Pull Overs'.

select pm.description , cm.name , sod.qty_ordered 
from sales_order as so
inner join sales_order_details as sod
on sod.order_no= so.order_no
inner join product_master as pm 
on pm.product_no = sod.product_no
inner join client_master as cm 
on cm.client_no = so.client_no
where pm.description="pull overs" and sod.qty_ordered < 5;

+-------------+---------------+-------------+
| description | name          | qty_ordered |
+-------------+---------------+-------------+
| Pull Overs  | Ivan Bayross  |           2 |
| Pull Overs  | Chhaya Bankar |           3 |
+-------------+---------------+-------------+
2 rows in set (0.00 sec)


f. Find the products and their quantities for the orders placed by 'Ivan Bayross' and 'Mamta Muzumdar'.

select cm.name , pm.description , sod.qty_ordered
from sales_order as so
inner join client_master as cm 
on cm.client_no = so.client_no
inner join sales_order_details as sod
on sod.order_no = so.order_no
inner join product_master as pm
on pm.product_no = sod.product_no
where cm.name in("ivan Bayross","Mamta Muzumdar");

+----------------+--------------+-------------+
| name           | description  | qty_ordered |
+----------------+--------------+-------------+
| Ivan Bayross   | T-Shirts     |           4 |
| Ivan Bayross   | Denim Shirts |           2 |
| Ivan Bayross   | Pull Overs   |           2 |
| Ivan Bayross   | Cotton Jeans |           1 |
| Ivan Bayross   | Skirts       |           2 |
| Mamta Muzumdar | T-Shirts     |          10 |
+----------------+--------------+-------------+
6 rows in set (0.00 sec)




g. Find the products and their quantities for the orders placed by ClientNo 'C00001' and 'C00002'.

select cm.name, pm.description , sod.qty_ordered
from sales_order as so
inner join client_master as cm
on cm.client_no = so.client_no
inner join sales_order_details as sod
on so.order_no= sod.order_no
inner join product_master as pm
on sod.product_no= pm.product_no
where so.client_no in ('C00001','C00002');

+----------------+--------------+-------------+
| name           | description  | qty_ordered |
+----------------+--------------+-------------+
| Ivan Bayross   | T-Shirts     |           4 |
| Ivan Bayross   | Denim Shirts |           2 |
| Ivan Bayross   | Pull Overs   |           2 |
| Ivan Bayross   | Cotton Jeans |           1 |
| Ivan Bayross   | Skirts       |           2 |
| Mamta Muzumdar | T-Shirts     |          10 |
+----------------+--------------+-------------+
6 rows in set (0.00 sec)


****************3. Exercise on Sub-queries:*******************

a.Find the ProductNo and description of non-moving products i.e. products not being sold.





b. List the customer Name, Address1, Address2, City and PinCode for the client who has placed order no '019001'.


c. List the client names that have placed orders before the month of May 02.


d. List if the product 'Lycra Top' has been ordered by any client and print the Client_no, Name to whom it was sold.


e. List the names of clients who have placed orders worth Rs. 10000 or more.



select description , cost_price
from product_master as pm 
inner join    where pm.cost_price>3000;