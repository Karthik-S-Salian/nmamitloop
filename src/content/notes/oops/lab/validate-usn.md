---
title: Astro in brief
description: Find out what makes Astro awesome!
branches: ["cs","is"]
subject : oops
sem: 3
---

11. Develop a java program to validate the USN value entered by the user by making use
of user defined exception handling concept.Valid usn number will have the format
“4NMmmXYnnn” where mm is numeric value ranging from 01 to 22 , valid values
for XY are “CS”,”CV”,”AI”,”EE”,”EC”,”ME”,”RE”,”BT”,”IS”,”CC”,”DS” and nnn
is running 3 digit number.The exception message will be “Invalid USN”,”Invalid
Year”,”Invalid branch code”,”Invalid Running number” dependending on the error in
the value entered.

```java
import java.util.*;

class ValidateUSNException extends Exception
{
	private String msg = "";
	
	public ValidateUSNException(String msg)
	{
		this.msg= msg;
	}
	
	public String toString()
	{
		return msg;
	}
}

public class UserDefinedExceptionDemo {

	public static void validateUSN(String usn) throws ValidateUSNException
	{
		
		int len = usn.length();
		if(len != 10)
			throw new ValidateUSNException("USN WITH INVALID LENGTH");
		
		boolean firstthree = usn.startsWith("4NM");
		if(firstthree == false)
		  throw new ValidateUSNException("USN DOES NOT START WITH 4NM");
		
		String year = usn.substring(3, 5);
		int nmyear = Integer.parseInt(year);
		if(nmyear > 22)
			  throw new ValidateUSNException("USN WITH INVALID YEAR");
		
		String branch = usn.substring(5,7);
		String[] barr = { "CS","CV","AI","EE","EC","ME","RE","BT","IS","CC","DS"};
		
		boolean branchval = false;
		for(String str: barr)
		{  
		
			if(branch.equals(str))
			{
				branchval = true;
				break;
			}
		}
		if(branchval  == false)
			  throw new ValidateUSNException("USN WITH INVALID BRANCH");
			  
		String numstr = usn.substring(7,10);
		try {
		int nnum = Integer.parseInt(numstr);
		}
		catch(NumberFormatException ex)
		{
			throw new ValidateUSNException("USN WITH INVALID last three digits..");
		}
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
        Scanner read = new Scanner(System.in);
        System.out.println("Enter the USN Value");
        String str = read.nextLine();
        
        try {
        	validateUSN(str);
        }
        catch (ValidateUSNException ex)
        {
        	System.out.println(ex);
        }
        System.out.println("Validation completed...");
        
	}

}
```