package com.revature.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "lib_template")
public class LibTemplate
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name = "lib_name")
	private String libName;
	@Column
	private String lib;
//	@OneToMany(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
//	@JoinTable(name="person",joinColumns=@JoinColumn(name="uploader_id"),
//			inverseJoinColumns=@JoinColumn(name="id"))
//	private int personId;
	
	public LibTemplate()
	{
		id = 0;
		libName = "";
		lib = null;
		// personId = 0;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
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

//	public int getPersonId() {
//		return personId;
//	}
//
//	public void setPersonId(int personId) {
//		this.personId = personId;
//	}

	@Override
	public String toString() {
		return "LibTemplate [id=" + id + ", libName=" + libName + ", lib=" + lib + "]";
	}
}
