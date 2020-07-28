package com.revature.beans;

import java.util.Arrays;

public class Words 
{
	private String nouns[];
	private String plurals[];
	private String verbs[]; // present tense, non-ing verbs like run
	private String adjectives[]; // for any and all adjectives
	private String colors[]; // for when specifically looking for a color adjective
	private String ings[]; // ing verbs like running
	private String adverbs[];
	private String propers[]; // proper nouns like a persons name
	private String numbers[];
	private String pasts[]; // past tense verbs like ran
	private String foods[];
	private String liquids[];
	
	public Words()
	{
		nouns = null;
		plurals = null;
		verbs = null;
		adjectives = null;
		colors = null;
		ings = null;
		adverbs = null;
		propers = null;
		numbers = null;
		pasts = null;
		foods = null;
		liquids = null;
	}
	
	public String[] getNouns() {
		return nouns;
	}
	
	public void setNouns(String[] nouns) {
		this.nouns = nouns;
	}
	
	public String[] getPlurals() {
		return plurals;
	}
	
	public void setPlurals(String[] plurals) {
		this.plurals = plurals;
	}
	
	public String[] getVerbs() {
		return verbs;
	}
	
	public void setVerbs(String[] verbs) {
		this.verbs = verbs;
	}
	
	public String[] getAdjectives() {
		return adjectives;
	}
	
	public void setAdjectives(String[] adjectives) {
		this.adjectives = adjectives;
	}
	
	public String[] getColors() {
		return colors;
	}
	
	public void setColors(String[] colors) {
		this.colors = colors;
	}
	
	public String[] getIngs() {
		return ings;
	}
	
	public void setIngs(String[] ings) {
		this.ings = ings;
	}
	
	public String[] getAdverbs() {
		return adverbs;
	}
	
	public void setAdverbs(String[] adverbs) {
		this.adverbs = adverbs;
	}
	
	public String[] getPropers() {
		return propers;
	}
	
	public void setPropers(String[] propers) {
		this.propers = propers;
	}
	
	public String[] getNumbers() {
		return numbers;
	}
	
	public void setNumbers(String[] numbers) {
		this.numbers = numbers;
	}
	
	public String[] getPasts() {
		return pasts;
	}
	
	public void setPasts(String[] pasts) {
		this.pasts = pasts;
	}
	
	public String[] getFoods() {
		return foods;
	}

	public void setFoods(String[] foods) {
		this.foods = foods;
	}

	public String[] getLiquids() {
		return liquids;
	}

	public void setLiquids(String[] liquids) {
		this.liquids = liquids;
	}

	@Override
	public String toString() {
		return "Words [nouns=" + Arrays.toString(nouns) + ", plurals=" + Arrays.toString(plurals) + ", verbs="
				+ Arrays.toString(verbs) + ", adjectives=" + Arrays.toString(adjectives) + ", colors="
				+ Arrays.toString(colors) + ", ings=" + Arrays.toString(ings) + ", adverbs=" + Arrays.toString(adverbs)
				+ ", propers=" + Arrays.toString(propers) + ", numbers=" + Arrays.toString(numbers) + ", pasts="
				+ Arrays.toString(pasts) + ", foods=" + Arrays.toString(foods) + ", liquids=" + Arrays.toString(liquids)
				+ "]";
	}
}
