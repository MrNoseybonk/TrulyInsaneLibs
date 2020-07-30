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
		s.setPersonId(s.getPerson().getId());
		s.setLib(s.getReceived().getLib());
		//System.out.println(s);
		int libId = saveService.addSavedLib(s);
		return ResponseEntity.ok(libId);
	}
	
	@GetMapping("/all/{id}")
	public ResponseEntity<List<SavedLib>> getSavedLibs(@PathVariable("id") Integer id)
	{
		List<SavedLib> libs = saveService.getSavedLibs(id);
		return ResponseEntity.ok(libs);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<SavedLib> getSavedLib(@PathVariable("id") Integer id)
	{
		SavedLib lib = saveService.getSavedLib(id);
		return ResponseEntity.ok(lib);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteSavedLib(@PathVariable("id") Integer id)
	{
		SavedLib lib = new SavedLib();
		lib.setId(id);
		saveService.deleteSavedLib(lib);
	}
//	@DeleteMapping
//	public void deleteSavedLib(@RequestBody SavedLib s)
//	{
//		saveService.deleteSavedLib(s);
//	}
}
