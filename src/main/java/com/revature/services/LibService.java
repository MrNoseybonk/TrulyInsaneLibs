package com.revature.services;

import org.springframework.stereotype.Service;

import com.revature.beans.WordTotals;

@Service
public class LibService 
{
	
	public WordTotals countTotals(String lib)
	{
		WordTotals totals = new WordTotals();
		Integer nouns = 0;
		Integer verbs = 0;
		Integer adjectives = 0;
		String splitted[] = lib.split(" |,|\\.|-|:");
		
		for (int i = 0; i < splitted.length; i++)
		{
			System.out.println(splitted[i]);
			switch(splitted[i])
			{
				case "<noun>":
					nouns++;
					break;
				case "<verb>":
					verbs++;
					break;
				case "<adjective>":
					adjectives++;
					break;
				default:
					break;
			}
		}
		
		totals.setAdjectives(adjectives);
		totals.setNouns(nouns);
		totals.setVerbs(verbs);
		
		return totals;
	}
}
