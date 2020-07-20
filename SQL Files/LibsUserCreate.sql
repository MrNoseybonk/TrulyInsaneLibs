drop user C##TrulyInsaneLibs cascade;

create user C##TrulyInsaneLibs
    identified by p4ssw0rd
    default tablespace users
    temporary tablespace temp
    quota 10m on users;
    
grant create session to C##TrulyInsaneLibs;
grant create table to C##TrulyInsaneLibs;
grant create view to C##TrulyInsaneLibs;
grant create sequence to C##TrulyInsaneLibs;
grant create trigger to C##TrulyInsaneLibs;
grant create procedure to C##TrulyInsaneLibs;