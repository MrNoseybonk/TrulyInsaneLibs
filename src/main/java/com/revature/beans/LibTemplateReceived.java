package com.revature.beans;

public class LibTemplateReceived 
{
	private int id;
	private String libName;
	private String libString;
	
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
	
	public String getLibString() {
		return libString;
	}
	
	public void setLibString(String libString) {
		this.libString = libString;
	}
	
	@Override
	public String toString() {
		return "LibTemplateReceived [id=" + id + ", libName=" + libName + ", libString=" + libString + "]";
	}
}
