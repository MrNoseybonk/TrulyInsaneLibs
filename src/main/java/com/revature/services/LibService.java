package com.revature.services;

import org.springframework.stereotype.Service;

import com.revature.beans.Lib;
import com.revature.beans.WordTotals;
import com.revature.beans.Words;

@Service
public class LibService 
{
	
	public WordTotals countTotals(String lib)
	{
		WordTotals totals = new WordTotals();
		Integer nouns = 0;
		Integer plurals = 0;
		Integer verbs = 0;
		Integer adjectives = 0;
		Integer colors = 0;
		Integer ings = 0;
		Integer adverbs = 0;
		Integer propers = 0;
		Integer numbers = 0;
		Integer pasts = 0;
		Integer foods = 0;
		Integer liquids = 0;
		String splitted[] = lib.split(" |;|,|\\.|-|:|\\R");
		
		for (int i = 0; i < splitted.length; i++)
		{
			switch(splitted[i])
			{
				case "<noun>":
					nouns++;
					break;
				case "<plural>":
					System.out.println("Plural");
					plurals++;
					break;
				case "<verb>":
					verbs++;
					break;
				case "<adjective>":
					adjectives++;
					break;
				case "<color>":
					colors++;
					break;
				case "<ing>":
					System.out.println("Ing");
					ings++;
					break;
				case "<adverb>":
					System.out.println("Adverb");
					adverbs++;
					break;
				case "<proper>":
					propers++;
					break;
				case "<number>":
					numbers++;
					break;
				case "<past>":
					pasts++;
					break;
				case "<food>":
					foods++;
					break;
				case "<liquid>":
					liquids++;
					break;
				default:
					break;
			}
		}
		
		totals.setAdjectives(adjectives);
		totals.setPlurals(plurals);
		totals.setNouns(nouns);
		totals.setVerbs(verbs);
		totals.setAdverbs(adverbs);
		totals.setColors(colors);
		totals.setIngs(ings);
		totals.setNumbers(numbers);
		totals.setPasts(pasts);
		totals.setPropers(propers);
		totals.setFoods(foods);
		totals.setLiquids(liquids);
		
		return totals;
	}
	
	public Lib finishLib(Lib beggingLib, Words words)
	{
		Lib lib = beggingLib;
		StringBuilder workingLib = new StringBuilder();
		workingLib.append(lib.getLib());
		
		String adjectives[] = words.getAdjectives();
		String adverbs[] = words.getAdverbs();
		String colors[] = words.getColors();
		String ings[] = words.getIngs();
		String nouns[] = words.getNouns();
		String numbers[] = words.getNumbers();
		String pasts[] = words.getPasts();
		String plurals[] = words.getPlurals();
		String propers[] = words.getPropers();
		String verbs[] = words.getVerbs();
		String foods[] = words.getFoods();
		String liquids[] = words.getLiquids();
		
		for (int i = 0; i < adjectives.length; i++)
		{
			int adjectiveInd = workingLib.indexOf("<adjective>");
			int adjectiveEnd = adjectiveInd + 11;
			workingLib.replace(adjectiveInd, adjectiveEnd, adjectives[i]);
		}
		
		for (int i = 0; i < adverbs.length; i++)
		{
			int adverbInd = workingLib.indexOf("<adverb>");
			int adverbEnd = adverbInd + 8;
			workingLib.replace(adverbInd, adverbEnd, adverbs[i]);
		}
		
		for (int i = 0; i < colors.length; i++)
		{
			int colorInd = workingLib.indexOf("<color>");
			int colorEnd = colorInd + 7;
			workingLib.replace(colorInd, colorEnd, colors[i]);
		}
		
		for (int i = 0; i < ings.length; i++)
		{
			int ingInd = workingLib.indexOf("<ing>");
			int ingEnd = ingInd + 5;
			workingLib.replace(ingInd, ingEnd, ings[i]);
		}
		
		for (int i = 0; i < nouns.length; i++)
		{
			int nounInd = workingLib.indexOf("<noun>");
			int nounEnd = nounInd + 6;
			workingLib.replace(nounInd, nounEnd, nouns[i]);
		}
		
		for (int i = 0; i < numbers.length; i++)
		{
			int numberInd = workingLib.indexOf("<number>");
			int numberEnd = numberInd + 8;
			workingLib.replace(numberInd, numberEnd, numbers[i]);
		}
		
		for (int i = 0; i < pasts.length; i++)
		{
			int pastInd = workingLib.indexOf("<past>");
			int pastEnd = pastInd + 6;
			workingLib.replace(pastInd, pastEnd, pasts[i]);
		}
		
		for (int i = 0; i < plurals.length; i++)
		{
			int pluralInd = workingLib.indexOf("<plural>");
			int pluralEnd = pluralInd + 8;
			workingLib.replace(pluralInd, pluralEnd, plurals[i]);
		}
		
		for (int i = 0; i < propers.length; i++)
		{
			int properInd = workingLib.indexOf("<proper>");
			int properEnd = properInd + 8;
			workingLib.replace(properInd, properEnd, propers[i]);
		}
		
		for (int i = 0; i < verbs.length; i++)
		{
			int verbInd = workingLib.indexOf("<verb>");
			int verbEnd = verbInd + 6;
			workingLib.replace(verbInd, verbEnd, verbs[i]);
		}
		
		for (int i = 0; i < foods.length; i++)
		{
			int foodInd = workingLib.indexOf("<food>");
			int foodEnd = foodInd + 6;
			workingLib.replace(foodInd, foodEnd, foods[i]);
		}
		
		for (int i = 0; i < liquids.length; i++)
		{
			int liquidInd = workingLib.indexOf("<liquid>");
			int liquidEnd = liquidInd + 8;
			workingLib.replace(liquidInd, liquidEnd, liquids[i]);
		}
		
		lib.setLib(workingLib.toString());
		return lib;
	}
}
