package com.revature.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Person;
import com.revature.services.PersonService;

@RestController
@RequestMapping(path="/login")
public class LoginController {
	private PersonService pServ;
	
	@Autowired
	public LoginController(PersonService p) {
		pServ = p;
	}
	
	@GetMapping
	@RequestMapping(path="/{username}")
	public ResponseEntity<Boolean> getLoggedPerson(@PathVariable("username") String username) {
		Person person = new Person();
		person.setUsername(username);
		Boolean exists = pServ.checkUsername(person);
		return ResponseEntity.ok(exists);
	}
	
	@PostMapping
	@RequestMapping(path="/register")
	public ResponseEntity<Person> registerPerson(@RequestBody Person person) {
		person.setId(pServ.addPerson(person));
		
		return ResponseEntity.ok(person);
	}
	
	@PostMapping
	public ResponseEntity<Person> loginPerson(HttpSession session, @RequestBody Person person)
	{
		Person tempP = pServ.getPersonByUsernameAndPassword(person.getUsername(), person.getPassword());//username, password);

		if(tempP == null) 
		{
			return ResponseEntity.notFound().build();
		}
		tempP.setPassword("");
		session.setAttribute("person", tempP);
		return ResponseEntity.ok(tempP);
	}
	
	@DeleteMapping // Delete of CRUD
	public ResponseEntity<Void> logoutPerson(HttpSession session) {
		session.invalidate();
		return ResponseEntity.ok().build();
	}
}