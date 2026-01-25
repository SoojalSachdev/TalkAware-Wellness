create database talkaware;
use talkaware;
create table users(
id int auto_increment primary key,
full_name varchar(100) not null,
email varchar(100) not null unique,
password varchar(255) not null,
created_at timestamp default current_timestamp);
select *from users;
create table contacts(
id int auto_increment primary key,
contact_name varchar(100) not null, 
phone varchar(20) not null);
select *from contacts;