package com.revature.beans;

public class LibRequest 
{
	private Lib lib;
	private Words words;
	
	public LibRequest()
	{
		lib = null;
		words = null;
	}
	
	public Lib getLib() {
		return lib;
	}
	
	public void setLib(Lib lib) {
		this.lib = lib;
	}
	
	public Words getWords() {
		return words;
	}
	
	public void setWords(Words words) {
		this.words = words;
	}
	
	@Override
	public String toString() {
		return "LibRequest [lib=" + lib + ", words=" + words + "]";
	}
}
