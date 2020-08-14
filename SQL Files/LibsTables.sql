drop table user_type cascade constraints;
drop table person cascade constraints;
drop table lib_template cascade constraints;
drop table saved_lib cascade constraints;

drop sequence user_type_seq;
drop sequence person_seq;
drop sequence template_seq;
drop sequence saved_seq;

create table user_type
(
  id number(10) primary key,
  user_type varchar2(10) unique not null
);

create table person
(
  id number(10) primary key,
  username varchar2(25) unique not null,
  pssword varchar2(25) not null,
  user_type number(10) unique not null,
  constraint fk_person_type foreign key (user_type) references user_type(id)
);

create table lib_template
(
  id number(10) primary key,
  lib_name varchar2(25) not null,
  lib clob not null
);

create table saved_lib
(
  id number(10) primary key,
  saved_name varchar2(25) not null,
  lib clob not null,
  person_id number(10) not null,
  constraint fk_person_saved foreign key (person_id) references person(id)
);

create sequence user_type_seq;
create sequence saved_seq;
create sequence person_seq;
create sequence template_seq;