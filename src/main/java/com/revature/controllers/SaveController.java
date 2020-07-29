package com.revature.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Person;
import com.revature.beans.SavedLib;
import com.revature.services.SaveService;

@RestController
@RequestMapping(path="/save")
public class SaveController 
{
	private SaveService saveService;
	
	@Autowired
	public SaveController(SaveService s)
	{
		saveService = s;
	}
	
	@PostMapping
	public ResponseEntity<Integer> addSavedLib(@RequestBody SavedLib s)
	{
		System.out.println(s);
		s.setPersonId(s.getPerson().getId());
		int libId = saveService.addSavedLib(s);
		return ResponseEntity.ok(libId);
	}
}
