package com.revature.beans;

public class TemplateRequest {
	int id;
	
	public TemplateRequest()
	{
		id = 0;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "TemplateRequest [id=" + id + "]";
	}
}
