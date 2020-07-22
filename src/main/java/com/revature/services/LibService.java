package com.revature.services;

import org.springframework.stereotype.Service;

import com.revature.beans.Lib;
import com.revature.beans.WordTotals;

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
		String splitted[] = lib.split(" |,|\\.|-|:|\\R");
		
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
		
		return totals;
	}
	
	public Lib finishLib(String beggingLib)
	{
		Lib lib = new Lib();
		return lib;
	}
}
