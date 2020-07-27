package com.revature.data;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.beans.LibTemplate;

public interface LibTemplateDAO extends JpaRepository<LibTemplate, Integer>
{

}
