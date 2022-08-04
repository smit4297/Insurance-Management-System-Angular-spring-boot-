# Insurance-Management-System-Angular-spring-boot-

## Introduction

Build a web system that can manage insurance payments and allow users to sign up for a 
variety of insurance plans falling under two categories, health and home insurance.
The health insurance part of the website should be able to contain a variety of insurance 
plans, each of which have a structure for premium payment, a list of covered illnesses and a 
list of covered hospitals. The home insurance part of the website should be able to compute 
a premium based on what the location of the house is: the city should be divided into zones 
that have their own premiums.

## Basic operations

The system should be browseable without anyone logged in: the health insurance part 
would show all the available plans and their details, and the home insurance part would 
show a premium calculator that anybody browsing the system can use to view what their 
premium potentially would be. 
The system should have a way for administrators to login and sign users up for policies, and 
also view a list of users that they have signed up for policies and their respective policies, 
which they can modify or remove. 
The system should have a way for customers to login and view the plans they’ve signed up 
for, view their pending payments, and pay their premiums. They should also be able to 
renew their plan for a longer period of time. In the health insurance section, there should be 
a list of illnesses covered, and also a find hospital section where if the user inputs what their 
illness is, it should return a list of hospitals that are covered in their plan in the order of 
distance from their current location. Integrate with google maps to achieve this 
functionality. In the home insurance section, they should be able to make a claim for a 
particular damage. If a particular area receives a lot of claims, its premium increases.


