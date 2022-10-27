create database company;
use company;
create table EMPLOYEE(
fname text(15),
minit text(1),
lname text(15),
ssn int(9) primary key,
bdate date,
address varchar(50),
sex char(1),
salary int(7),
super_ssn int(9),
dnumber int(1));
desc EMPLOYEE;

create table DEPARTMENT(
dname char(25),
dnumber int(1) primary key,
mgr_ssn int(9),
mgr_start_date date);
desc DEPARTMENT;

create table DEPT_LOCATIONS(
emp_ssn int(9),
depndent_name char(20),
sex char(1),
bdate date,
relationship char(15));
desc DEPT_LOCATIONS;

create table WORKS_ON(
emp_ssn int(9),
prj_num int(3),
hours int(4));
desc WORKS_ON;

create table PROJECT(
prj_name char (20),
prj_num int(3) primary key,
prj_loc char(20),
dep_num int(1));
desc PROJECT;

create table DEPENDENT(
emp_ssn int(9),
dependent_name char(20),
sex char(1),
bdate date,
relationship char(15));
desc DEPENDENT;

-- Adding foreign keys

alter table EMPLOYEE add constraint foreign key (super_ssn) references EMPLOYEE(ssn);
alter table EMPLOYEE add constraint foreign key (dnumber) references DEPARTMENT(dnumber);
alter table DEPARTMENT add constraint foreign key (mgr_ssn) references EMPLOYEE(ssn);
alter table DEPT_LOCATIONS add constraint foreign key (dnumber) references DEPARTMENT(dnumber);
alter table prj add constraint foreign key (dep_num) references dep(dep_num);
alter table works_on add constraint foreign key (emp_ssn) references EMPLOYEE(ssn);
alter table works_on add constraint foreign key (prj_num) references prj(prj_num);