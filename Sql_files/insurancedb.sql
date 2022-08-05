create database insurancemanagement;
use insurancemanagement;
-- drop database insurancemanagement;

create table illness(
illnessid int primary key auto_increment,
illness_name varchar(255)
);

ALTER TABLE illness AUTO_INCREMENT = 200;

insert into illness(illness_name) values("covid19");
insert into illness(illness_name) values("diabetes");
insert into illness(illness_name) values("cardiac arrest");
insert into illness(illness_name) values("thyroid");
insert into illness(illness_name) values("TB");
insert into illness(illness_name) values("lung cancer");
insert into illness(illness_name) values("catract");
insert into illness(illness_name) values("migrane");
insert into illness(illness_name) values("blood cancer");

create table admin(
emailid varchar(255) primary key,
password varchar(255)
);

insert into admin values("admin@gmail.com","admin@123"); 

create table area(
areaid int primary key,
areaname varchar(255),
totalclaimsinarea int
);

insert into area values(382870,"vijapur",0);
insert into area values(400092,"borivali-west",0);
insert into area values(700156,"Newtown",0);
insert into area values(388421,"petlad",0);
insert into area values(301019,"bhiwadi",0);
insert into area values(184102,"kathua",0);


create table policy_category(
categoryid int primary key,
categoryname varchar(255)
);

insert into policy_category values(1,"health");
insert into policy_category values(2,"home");

create table user(
userid int primary key auto_increment,
emailid varchar(255),
password varchar(255),
mobileno BIGINT,
address varchar(255),
pincode BIGINT,
birthdate date
);


select * from user;
insert into user(emailid,password,mobileno,address,pincode,birthdate) values("smit@gmail.com","smit@123",9898729876,"48, Arihant bungalows vijapur",382870,'2001-01-28');
insert into user(emailid,password,mobileno,address,pincode,birthdate) values("richa@gmail.com","richa@123",8888888888,"anonymous",400092,'1999-07-22');
insert into user(emailid,password,mobileno,address,pincode,birthdate) values("saloni@gmail.com","saloni@123",9999999999,"anonymous",700156,'2000-06-23');

create table hospital(
hospitalid int primary key,
hospitalname varchar(255),
pincode BIGINT
);

insert into hospital values(100,"zydus",382870);
insert into hospital values(101,"leelawati",400092);
insert into hospital values(102,"ohio hospital",700156);

create table policy(
policyid int primary key,
categoryid int,
foreign key(categoryid) references policy_category(categoryid)
);

insert into policy values(5000,1);
insert into policy values(5001,1);
insert into policy values(5002,2);
insert into policy values(5003,2);

create table home_policy(
policyid int primary key,
policyname VARCHAR(255),
policydescription text,
imageurl VARCHAR(255),
sumassurence INT,
policyterm int,
areaid int,
premium int,
foreign key(areaid) references area(areaid),
foreign key(policyid) references policy(policyid));

insert into home_policy values( 5002, "bajaj insurance" , "A home insurance policy will cover all the incurred expenses. The home insurance policy also provides cover for any damage/loss incurred either due to theft or due to robbery.", "www.image.png", 100000, 10, 700156, 20000);
insert into home_policy values( 5003, "policy bazaar insurance" , "A home insurance policy will cover all the incurred expenses. The home insurance policy also provides cover for any damage/loss incurred either due to theft or due to robbery.", "www.image.png", 100000, 10, 184102, 10000);

create table health_policy(
policyid int primary key,
healthpolicyid int unique,
policyname VARCHAR(255),
policydescription text,
imageurl VARCHAR(255),
sumassurence INT,
policyterm int,
premium int,
foreign key(policyid) references policy(policyid));

insert into health_policy values(5001,4001,"Cancer insurance plans","Cancer Insurance plans help tackle the medical treatment expenses in case you are diagnosed with cancer. These plans provide comprehensive protection against all stages of Cancer.",
"img.jpg",8000000,1,25000);
insert into health_policy values(5000,4000,"Critical Illness benefit","Along with the best health insurance in India, you can get a critical Illness plan/benefit that helps you avail comprehensive financial protection in the form of payouts upon diagnosis of any life-threatening ailments. ",
"img.jpg",6000000,1,20000);

create table user_policy(
policyid int,
userid int,
policystartdate date,
foreign key(policyid) references policy(policyid),
foreign key(userid) references user(userid)
);

insert into user_policy values(5001, 1, CURDATE());
insert into user_policy values(5002, 2, CURDATE());

create table hospital_illness(
healthpolicyid int,
hospitalid int,
illnessid int,
foreign key(healthpolicyid) references health_policy(healthpolicyid),
foreign key(hospitalid) references hospital(hospitalid),
foreign key(illnessid) references illness(illnessid)
);

select * from hospital_illness;
insert into hospital_illness values(4000,100,201);
insert into hospital_illness values(4000,101,202);
insert into hospital_illness values(4000,100,203);
insert into hospital_illness values(4000,101,201);
insert into hospital_illness values(4000,102,204);
insert into hospital_illness values(4001,101,202);
insert into hospital_illness values(4001,100,203);

select policy.policyid from policy join user_policy on policy.policyid=user_policy.policyid;
select * from home_policy where policyid in (select policy.policyid from policy join user_policy on policy.policyid=user_policy.policyid);

select * from hospital where hospitalid in (select hospitalid from hospital_illness where healthpolicyid = (select healthpolicyid from health_policy where policyid = 5001));

select * from illness where illnessid in (select illnessid from hospital_illness where hospitalid = 101);

select * from illness where illnessid in (select illnessid from hospital_illness where healthpolicyid = (select healthpolicyid from health_policy where policyid = 5000));

select * from health_policy where policyid = (select policy.policyid from policy join user_policy on policy.policyid=user_policy.policyid where categoryid = 1 and userid = 1);
-- create table policy_illness(
-- policyid int,
-- illnessid int,
-- foreign key(policyid) references policy(policyid),
-- foreign key(illnessid) references illness(illnessid)
-- );

-- create table policy_hospital(
-- policyid int,
-- hospitalid int,
-- foreign key(policyid) references policy(policyid),
-- foreign key(hospitalid) references hospital(hospitalid)
-- );