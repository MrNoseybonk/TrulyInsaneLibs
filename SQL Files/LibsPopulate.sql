create or replace trigger person_pk_trig
before insert or update on person
for each row
begin
	if INSERTING then
		select person_seq.nextval into :new.id from dual;
	elsif UPDATING then
		select :old.id into :new.id from dual;
  end if;
end;
/

insert into person (username, pssword)
values ('swilson', 'pass');

commit;