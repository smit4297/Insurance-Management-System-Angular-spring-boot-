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

insert into area values(382870,"vijapur",2);
insert into area values(400092,"borivali-west",5);
insert into area values(700156,"Newtown",4);
insert into area values(388421,"petlad",11);
insert into area values(301019,"bhiwadi",14);
insert into area values(184102,"kathua",0);

select * from area where areaid = 382870;

create table policy_category(
categoryid int primary key,
categoryname varchar(255)
);

insert into policy_category values(1,"health");
insert into policy_category values(2,"home");


create table user(
userid int primary key auto_increment,
emailid varchar(255) unique,
password varchar(255),
name varchar(255),
mobileno BIGINT,
address varchar(255),
pincode BIGINT,
birthdate date
);


select * from user;
insert into user(emailid,password,name,mobileno,address,pincode,birthdate) values("smit@gmail.com","smit@123","smit",9898729876,"48, Arihant bungalows vijapur",382870,'2001-01-28');
insert into user(emailid,password,name,mobileno,address,pincode,birthdate) values("richa@gmail.com","richa@123","richa",8888888888,"anonymous",400092,'1999-07-22');
insert into user(emailid,password,name,mobileno,address,pincode,birthdate) values("saloni@gmail.com","saloni@123","saloni",9999999999,"anonymous",700156,'2000-06-23');

select * from user where emailid = "smit@gmail.com";
create table hospital(
hospitalid int primary key,
hospitalname varchar(255),
pincode BIGINT
);

insert into hospital values(100,"zydus",382870);
insert into hospital values(101,"leelawati",400092);
insert into hospital values(102,"ohio hospital",700156);

create table policy (
policyid int primary key auto_increment,
categoryid int,
foreign key(categoryid) references policy_category(categoryid)
);
select * from policy;
ALTER TABLE policy AUTO_INCREMENT = 4999;
insert into policy values(4999,1);
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
premium Bigint,
homevalue Bigint,
deductables bigint,
foreign key(areaid) references area(areaid),
foreign key(policyid) references policy(policyid));

select * from home_policy;
insert into home_policy values( 5002, "bajaj insurance" , "A home insurance policy will cover all the incurred expenses. The home insurance policy also provides cover for any damage/loss incurred either due to theft or due to robbery.", "www.image.png", 100000, 10, 700156, 20000,5000000,20000);
insert into home_policy values( 5003, "policy bazaar insurance" , "A home insurance policy will cover all the incurred expenses. The home insurance policy also provides cover for any damage/loss incurred either due to theft or due to robbery.", "www.image.png", 100000, 10, 184102, 10000,10000000,50000);




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

insert into health_policy values(5001,4001,"JEEVAN UMANG","It’s often said that your health is your wealth. And with the same belief, we make it our mission to ensure that your health is never compromised. That’s why we offer you an array of flexible plans to protect your health.With Star Health, the insured can avail of disease-specific policies for critical illnesses, cancer and cardiac ailments along with in-patient hospitalization as a general mediclaim health insurance policy. We have a wide range of mediclaim health insurance policies to choose like Star Criticare Plus Insurance Policy, Star Cardiac Care Insurance Policy-Platinum, Star Cancer Care Platinum Insurance Policy, Star Cancer Care Platinum Insurance Policy.Cancer Insurance plans help tackle the medical treatment expenses in case you are diagnosed with cancer. These plans provide comprehensive protection against all stages of Cancer.",
"https://www.1mg.com/articles/wp-content/uploads/2021/08/Health-Insurance-Policy_Bajaj-Finserv.jpg",800000,1,25000);
insert into health_policy values(5000,4000,"Critical Illness benefit","Along with the best health insurance in India, you can get a critical Illness plan/benefit that helps you avail comprehensive financial protection in the form of payouts upon diagnosis of any life-threatening ailments.This comprehensive health insurance policy will cover the entire family. The main highlight of the policy is that new family members in case of a marriage or birth of a child can be included during the term of the policy. Health is a major concern in today’s fast paced life and this policy will ensure that you and your family members are covered against medical uncertainties. ",
"https://media.istockphoto.com/vectors/family-health-insurance-vector-id1277323685?k=20&m=1277323685&s=612x612&w=0&h=gnbx7a6TB4ukY31_EOe7zBsvdwnWZfP2-kucyunIJZc=",600000,1,20000);
insert into health_policy values(4999,4002,"Personal Accident Insurance Plans","Accidents can happen at any time, and the medical bills associated with treating an injury can quickly deplete your resources. Medical expenses incurred as a result of an accident are covered by a Personal Accident Insurance Policy. The policy also covers the insured’s partial disability, permanent disability, and death as a result of an accident.
It pays for the costs of hospitalisation in the event of an accident.
In the event of the insured’s death, the nominee will receive a death benefit (up to the amount covered).",
"https://img.freepik.com/premium-vector/health-insurance-protection-care-medical-with-decorated-small-people-character-filling-medical-documents-healthcare-concept-flat_126283-2442.jpg?w=826",450000,1,10000);
create table user_policy(
policyid int,
userid int,
policystartdate date,
foreign key(policyid) references policy(policyid),
foreign key(userid) references user(userid)
);

insert into user_policy values(5001, 1, CURDATE());
insert into user_policy values(5002, 2, CURDATE());
select * from user_policy;
select * from user;
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
insert into hospital_illness values(4002,100,201);
insert into hospital_illness values(4002,101,202);
insert into hospital_illness values(4002,100,203);
insert into hospital_illness values(4002,101,201);
insert into hospital_illness values(4002,102,204);

create table health_policy_request(
userid int primary key,
policyid int,
startdate date,
username varchar(255),
birthdate date,
sumassurance INT,
policyterm int,
policypremium int,
policyname VARCHAR(255)
);

select * from health_policy_request;

create table home_policy_request(
userid int primary key,
username varchar(255),
address varchar(255),
policyname VARCHAR(255) default "SSR SPECIAL HOME INSURANCE",
policydescription text,
sumassurence INT,
policyterm int,
areaid int,
premium Bigint,
homevalue Bigint,
deductables bigint);



select * from home_policy_request;

select * from user_policy where policyid in (select policyid from policy where categoryid = 1);
select * from user_policy where policyid in (select policyid from policy where categoryid = 2);
select policy.policyid from policy join user_policy on policy.policyid=user_policy.policyid;
select * from home_policy where policyid in (select policy.policyid from policy join user_policy on policy.policyid=user_policy.policyid);
select * from user;
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