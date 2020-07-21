package com.revature.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.services.LibService;

@RestController
@RequestMapping(path="/lib")
public class LibController 
{
	private LibService libServ;
	
	@Autowired
	public LibController(LibService l)
	{
		libServ = l;
	}
	
	@PostMapping
	public ResponseEntity<String> uploadLib(@RequestBody String lib)
	{
		String response = lib;
		System.out.println(response);
		return ResponseEntity.ok(response);
	}
}
