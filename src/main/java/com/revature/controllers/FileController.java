package com.revature.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.LibTemplate;
import com.revature.services.FileService;

@RestController
@RequestMapping(path="/file")
public class FileController 
{
	private FileService fileServ;
	
	@Autowired
	public FileController(FileService f)
	{
		fileServ = f;
	}
	
	@PostMapping
	public ResponseEntity<Integer> addLibTemplate(@RequestBody LibTemplate l)
	{
		int templateId = fileServ.addLibTemplate(l);
		return ResponseEntity.ok(templateId);
	}
}
