package com.revature.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.beans.Person;

@Repository
public interface PersonDAO  extends JpaRepository<Person, Integer>
{
	public Person findByUsernameAndPassword(String username, String password);
}
