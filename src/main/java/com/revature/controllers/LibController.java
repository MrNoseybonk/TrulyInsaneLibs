package com.revature.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Lib;
import com.revature.beans.LibRequest;
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
	public ResponseEntity<WordTotals> uploadLib(@RequestBody String lib)
	{
		WordTotals totals = libServ.countTotals(lib);

		return ResponseEntity.ok(totals);
	}
	
	@PutMapping
	public ResponseEntity<Lib> sendLib(HttpSession session, @RequestBody LibRequest libRequest)
	{
		Lib finishedLib = new Lib();
		
		finishedLib = libRequest.getLib();
		System.out.println(libRequest.getWords());
		
		//lib = libServ.finishLib(session.getAttribute("uploadLib").toString());
		
		return ResponseEntity.ok(finishedLib);
	}
}
