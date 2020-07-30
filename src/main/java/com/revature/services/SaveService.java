package com.revature.services;

import java.util.List;

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
	
	public SavedLib getSavedLib(Integer id)
	{
		return savedLibDao.getOne(id);
	}
	
	public List<SavedLib> getSavedLibs(Integer id)
	{
		return savedLibDao.findByPersonId(id);
	}
	
	public void deleteSavedLib(SavedLib s)
	{
		savedLibDao.delete(s);
	}
}
