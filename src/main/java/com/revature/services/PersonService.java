package com.revature.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;

import com.revature.beans.Person;
import com.revature.data.PersonDAO;

@Service
public class PersonService 
{
	private final PersonDAO personDao;

	@Autowired
	public PersonService(PersonDAO p)
	{
		personDao = p;
	}
	
	public boolean checkUsername(Person p)
	{
		ExampleMatcher modelMatcher = ExampleMatcher.matching()
				  .withIgnorePaths("id", "password") 
				  .withMatcher("username", new ExampleMatcher.MatcherConfigurer<ExampleMatcher.GenericPropertyMatcher>() {
                  @Override
                  public void configureMatcher(ExampleMatcher.GenericPropertyMatcher matcher) {
                      matcher.endsWith();
                  }
              });

		System.out.println(p);
		Example<Person> example = Example.of(p, modelMatcher.withIgnoreCase());
		boolean exists = personDao.exists(example);
		
		return exists;
	}
	
	public Integer addPerson(Person p)
	{
		ExampleMatcher modelMatcher = ExampleMatcher.matching()
				  .withIgnorePaths("id") 
				  .withMatcher("username", new ExampleMatcher.MatcherConfigurer<ExampleMatcher.GenericPropertyMatcher>() {
                    @Override
                    public void configureMatcher(ExampleMatcher.GenericPropertyMatcher matcher) {
                        matcher.endsWith();
                    }
                });

		Example<Person> example = Example.of(p, modelMatcher.withIgnoreCase());
		boolean exists = personDao.exists(example);

		if(exists == false)
		{
			return personDao.save(p).getId();
		}
		
		return -1;
	}
	
	public Person getPersonByUsernameAndPassword(String username, String password) 
	{
		Person p = personDao.findByUsernameAndPassword(username, password);
		return p;
	}
	
	public Person getPersonById(Integer id)
	{
		return personDao.findById(id).get();
	}
	
	public void deletePerson(Person p)
	{
		personDao.delete(p);
	}
}
