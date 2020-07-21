package com.revature.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.WordTotals;
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
	public ResponseEntity<WordTotals> uploadLib(HttpSession session, @RequestBody String lib)
	{
		WordTotals totals = libServ.countTotals(lib);
		session.setAttribute("uploadlib", lib);

		return ResponseEntity.ok(totals);
	}
}
