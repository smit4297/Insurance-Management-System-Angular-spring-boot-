create database insurancemanagement;
use insurancemanagement;

create table illness(
illnessid int primary key auto_increment,
illness_name varchar(255)
);

create table admin(
emailid varchar(255) primary key,
password varchar(255)
);

insert into admin value("Richa@123gmail.com","password");
select*from admin;

create table area(
areaid int primary key,
areaname varchar(255),
totalclaimsinarea int
);

create table policy_category(
categoryid int primary key auto_increment,
categoryname varchar(255)
);

create table user(
userid int primary key auto_increment,
emailid varchar(255),
password varchar(255),
mobileno BIGINT,
address varchar(255),
pincode int,
birthdate date
);

create table hospital(
hospitalid int primary key auto_increment,
hospitalname varchar(255),
illnessid int,
foreign key(illnessid) references illness(illnessid)
);

create table policy(
policyid int primary key auto_increment,
categoryid int,
foreign key(categoryid) references policy_category(categoryid)
);

create table home_policy(
policyid int primary key,
policyname VARCHAR(255),
policydescription VARCHAR(255),
imageurl VARCHAR(255),
sumassurence INT,
policyterm int,
areaid int,
premium int,
foreign key(areaid) references area(areaid),
foreign key(policyid) references policy(policyid));


create table health_policy(
policyid int primary key,
policyname VARCHAR(255),
policydescription VARCHAR(255),
imageurl VARCHAR(255),
sumassurence INT,
policyterm int,
hospitalid int,
illnessid int,
premium int,
foreign key(hospitalid) references hospital(hospitalid),
foreign key(policyid) references policy(policyid),
foreign key(illnessid) references illness(illnessid));

create table user_policy(
policyid int,
userid int,
foreign key(policyid) references policy(policyid),
foreign key(userid) references user(userid)
);
