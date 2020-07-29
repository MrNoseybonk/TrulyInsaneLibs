drop table person cascade constraints;
drop table lib_template cascade constraints;
drop table saved_lib cascade constraints;
drop table person_saved cascade constraints;

drop sequence person_seq;
drop sequence template_seq;
drop sequence saved_seq;
drop sequence person_saved_seq;

create table person
(
  id number(10) primary key,
  username varchar2(25) unique not null,
  pssword varchar2(25) not null
);

create table lib_template
(
  id number(10) primary key,
  lib_name varchar2(20) not null,
  lib clob not null
);

create table saved_lib
(
  id number(10) primary key,
  saved_name varchar2(20) not null,
  lib clob not null
);

create table person_saved
(
  id number(10) primary key,
  person_id number(10) not null,
  saved_id number(10) not null,
  constraint fk_person_saved foreign key (person_id) references person(id),
  constraint fk_saved_person foreign key (saved_id) references saved_lib(id)
);

create sequence person_saved_seq;
create sequence saved_seq;
create sequence person_seq;
create sequence template_seq;