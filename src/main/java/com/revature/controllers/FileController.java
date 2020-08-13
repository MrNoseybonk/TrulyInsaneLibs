package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	@GetMapping("/{id}")
	public ResponseEntity<LibTemplate> getLibTemplate(@PathVariable("id") Integer id)
	{
		LibTemplate lib = fileServ.getLibTemplate(id);
		return ResponseEntity.ok(lib);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<LibTemplate>> getLibTemplates()
	{
		List<LibTemplate> libs = fileServ.getLibTemplates();
		return ResponseEntity.ok(libs);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteLibTemplate(@PathVariable("id") Integer id)
	{
		LibTemplate lib = new LibTemplate();
		lib.setId(id);
		fileServ.deleteLibTemplate(lib);
	}
}
