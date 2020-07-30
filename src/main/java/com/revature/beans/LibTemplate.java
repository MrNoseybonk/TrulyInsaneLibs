package com.revature.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "lib_template")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class LibTemplate
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(name = "lib_name")
	private String libName;
	@Column
	private String lib;
	
	public LibTemplate()
	{
		id = 0;
		libName = "";
		lib = null;
	}

	public int getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getLibName() {
		return libName;
	}

	public void setLibName(String libName) {
		this.libName = libName;
	}

	public String getLib() {
		return lib;
	}

	public void setLib(String string) {
		this.lib = string;
	}

	@Override
	public String toString() {
		return "LibTemplate [id=" + id + ", libName=" + libName + ", lib=" + lib + "]";
	}
}
