package com.revature.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.beans.SavedLib;

@Repository
public interface SavedLibDAO extends JpaRepository<SavedLib, Integer>
{
	public List<SavedLib> findByPersonId(Integer id);
}
