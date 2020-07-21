package com.revature.beans;

public class WordTotals 
{
	private Integer nouns;
	private Integer verbs;
	private Integer adjectives;
	
	public WordTotals()
	{
		nouns = 0;
		verbs = 0;
		adjectives = 0;
	}
	
	public Integer getNouns() {
		return nouns;
	}
	
	public void setNouns(Integer nouns) {
		this.nouns = nouns;
	}
	
	public Integer getVerbs() {
		return verbs;
	}
	
	public void setVerbs(Integer verbs) {
		this.verbs = verbs;
	}
	
	public Integer getAdjectives() {
		return adjectives;
	}
	
	public void setAdjectives(Integer adjectives) {
		this.adjectives = adjectives;
	}
	
	@Override
	public String toString() {
		return "WordTotals [nouns=" + nouns + ", verbs=" + verbs + ", adjectives=" + adjectives + "]";
	}
}
