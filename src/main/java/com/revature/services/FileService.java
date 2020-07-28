package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.LibTemplate;
import com.revature.data.LibTemplateDAO;

@Service
public class FileService 
{
	private final LibTemplateDAO libTemplateDao;
	
	@Autowired
	public FileService(LibTemplateDAO l)
	{
		libTemplateDao = l;
	}
	
	public Integer addLibTemplate(LibTemplate l)
	{
		return libTemplateDao.save(l).getId();
	}
	
	public LibTemplate getLibTemplate(Integer id)
	{
		return libTemplateDao.getOne(id);
	}
	
	public List<LibTemplate> getLibTemplates()
	{
		return libTemplateDao.findAll();
	}
}
