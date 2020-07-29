package com.revature.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.SavedLib;
import com.revature.data.SavedLibDAO;

@Service
public class SaveService 
{
	private final SavedLibDAO savedLibDao;
	
	@Autowired
	public SaveService(SavedLibDAO s)
	{
		savedLibDao = s;
	}
	
	public Integer addSavedLib(SavedLib s)
	{
		return savedLibDao.save(s).getId();
	}
}
