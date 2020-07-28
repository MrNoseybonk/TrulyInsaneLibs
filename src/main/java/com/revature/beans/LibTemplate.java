package com.revature.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "lib_template")
public class LibTemplate
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(name = "lib_name")
	private String libName;
	@Column
	private String lib;
//	@ManyToOne(fetch=FetchType.LAZY, targetEntity = Person.class)
//	@JoinColumn(name="id", insertable=false, updatable=false)
//	private Integer uploaderId;
	
	public LibTemplate()
	{
		id = 0;
		libName = "";
		lib = null;
		//uploaderId = 0;
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

//	public int getUploaderId() {
//		return uploaderId;
//	}
//
//	public void setUploaderId(Integer uploaderId) {
//		this.uploaderId = uploaderId;
//	}

	@Override
	public String toString() {
		return "LibTemplate [id=" + id + ", libName=" + libName + ", lib=" + lib + "]";
	}
}
