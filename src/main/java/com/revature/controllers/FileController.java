package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.LibTemplate;
import com.revature.beans.TemplateRequest;
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
	
	@GetMapping
	public ResponseEntity<LibTemplate> getLibTemplate(@RequestBody TemplateRequest t)
	{
		LibTemplate lib = fileServ.getLibTemplate(t.getId());
		return ResponseEntity.ok(lib);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<LibTemplate>> getLibTemplates()
	{
		List<LibTemplate> libs = fileServ.getLibTemplates();
		return ResponseEntity.ok(libs);
	}
}
