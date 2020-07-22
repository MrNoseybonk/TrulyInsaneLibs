package com.revature.utils;

import java.io.IOException;
import java.io.InputStream;

import javax.servlet.http.HttpServletResponse;

//import org.apache.log4j.Logger;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JsonParseUtil {
	private static ObjectMapper om = new ObjectMapper();
	//public static final Logger log = Logger.getLogger(JsonParseUtil.class);
	
	public static <T> T parseJsonInput(InputStream stream, Class<T> type, HttpServletResponse resp)
		throws IOException
	{
		T t = null;
		try
		{
			t = om.readValue(stream, type);
		}
		catch (JsonProcessingException e)
		{
			//log.error(e);
			resp.sendError(HttpServletResponse.SC_BAD_REQUEST); //status code 400 (client error)
		}
		
		return t;
	}
}
