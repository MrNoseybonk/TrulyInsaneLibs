package com.revature.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	public ResponseEntity<Person> getLoggedPerson(HttpSession session) {
		Person p = (Person) session.getAttribute("person");
		if(p == null)
		{
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(p);
	}
	
	@PostMapping
	@RequestMapping(path="/register")
	public ResponseEntity<Person> registerPerson(@RequestBody Person person) {
		person.setId(pServ.addPerson(person));
		
		return ResponseEntity.ok(person);
	}
	
	@PostMapping
	public ResponseEntity<Person> loginPerson(HttpSession session, @RequestParam("user") String username,
			@RequestParam("pass") String password)
	{
    
		Person tempP = pServ.getPersonByUsernameAndPassword(username, password);

		if(tempP == null) 
		{
			return ResponseEntity.notFound().build();
		}
		session.setAttribute("person", tempP);
		return ResponseEntity.ok(tempP);
	}
	
	@DeleteMapping // Delete of CRUD
	public ResponseEntity<Void> logoutPerson(HttpSession session) {
		session.invalidate();
		return ResponseEntity.ok().build();
	}
}