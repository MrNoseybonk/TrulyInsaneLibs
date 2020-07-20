drop table person cascade constraints;

drop sequence person_seq;

create table person
(
  id number(10) primary key,
  username varchar2(25) unique not null,
  pssword varchar2(25) not null
);

create sequence person_seq;