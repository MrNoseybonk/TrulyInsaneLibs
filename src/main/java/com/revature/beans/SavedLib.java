package com.revature.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonInclude;

import javax.persistence.JoinColumn;

@Entity
@Table(name = "saved_lib")
public class SavedLib 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(name = "saved_name")
	private String savedName;
	@Column
	private String lib;
//	@ManyToOne(fetch=FetchType.EAGER, targetEntity = Person.class)
//	@JoinTable(name="person",
//	joinColumns=@JoinColumn(name="id"),
//	inverseJoinColumns=@JoinColumn(name="person_id"))
	@Column
	private Integer personId;
	@JsonInclude()
	@Transient
	private Person person;
	
	public SavedLib()
	{
		id = 0;
		savedName = "";
		lib = "";
		personId = 0;
	}
	
	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getSavedName() {
		return savedName;
	}
	
	public void setSavedName(String savedName) {
		this.savedName = savedName;
	}
	
	public String getLib() {
		return lib;
	}
	
	public void setLib(String lib) {
		this.lib = lib;
	}
	
	public Integer getPersonId() {
		return personId;
	}

	public void setPersonId(Integer personId) {
		this.personId = personId;
	}

	public Person getPerson() {
		return person;
	}

	public void setPerson(Person person) {
		this.person = person;
	}

	@Override
	public String toString() {
		return "SavedLib [id=" + id + ", savedName=" + savedName + ", lib=" + lib + ", personId=" + personId + "]";
	}
}
