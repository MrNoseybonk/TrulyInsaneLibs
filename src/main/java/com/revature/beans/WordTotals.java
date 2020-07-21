package com.revature.beans;

public class WordTotals 
{
	private Integer nouns;
	private Integer plurals;
	private Integer verbs; // present tense, non-ing verbs like run
	private Integer adjectives; // for any and all adjectives
	private Integer colors; // for when specifically looking for a color adjective
	private Integer ings; // ing verbs like running
	private Integer adverbs;
	private Integer propers; // proper nouns like a persons name
	private Integer numbers;
	private Integer pasts; // past tense verbs like ran
	
	public WordTotals()
	{
		nouns = 0;
		plurals = 0;
		verbs = 0;
		adjectives = 0;
		colors = 0;
		ings = 0;
		adverbs = 0;
		propers = 0;
		numbers = 0;
		pasts = 0;
	}
	
	public Integer getPlurals() {
		return plurals;
	}

	public void setPlurals(Integer plurals) {
		this.plurals = plurals;
	}

	public Integer getColors() {
		return colors;
	}

	public void setColors(Integer colors) {
		this.colors = colors;
	}

	public Integer getIngs() {
		return ings;
	}

	public void setIngs(Integer ings) {
		this.ings = ings;
	}

	public Integer getAdverbs() {
		return adverbs;
	}

	public void setAdverbs(Integer adverbs) {
		this.adverbs = adverbs;
	}

	public Integer getPropers() {
		return propers;
	}

	public void setPropers(Integer propers) {
		this.propers = propers;
	}

	public Integer getNumbers() {
		return numbers;
	}

	public void setNumbers(Integer numbers) {
		this.numbers = numbers;
	}

	public Integer getPasts() {
		return pasts;
	}

	public void setPasts(Integer pasts) {
		this.pasts = pasts;
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
		return "WordTotals [nouns=" + nouns + ", plurals=" + plurals + ", verbs=" + verbs + ", adjectives=" + adjectives
				+ ", colors=" + colors + ", ings=" + ings + ", adverbs=" + adverbs + ", propers=" + propers
				+ ", numbers=" + numbers + ", pasts=" + pasts + "]";
	}
}
