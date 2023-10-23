---
title: Astro in brief
description: Find out what makes Astro awesome!
branches: ["cs","is"]
subject : oops
sem: 3
---

9. Write a program to count the number of capital letters, display the
position of each capital letter , no; of digits and no: of
occurrences of each vowel in a user entered string via keyboard.

```java

import java.util.*;
class MyString {
    void vowelOccurences(String userstr) {
        int acount = 0, ecount = 0, icount = 0, ocount = 0, ucount = 0;
        for (int i = 0; i < userstr.length(); i++) {
            char ch = userstr.charAt(i);
            if (ch == 'a' || ch == 'A')
                acount++;
            else if (ch == 'e' || ch == 'E')
                ecount++;
        }
        System.out.println("No:of occurences of a: " + acount);
        System.out.println("No:of occurences of e: " + ecount);
    }
    int noOfDigits(String userstr) {
        int nodigits = 0;
        for (int i = 0; i < userstr.length(); i++) {
            char ch = userstr.charAt(i);
            if (ch >= '0' && ch <= '9') {
                nodigits++;

            }
        }
        return nodigits;
    }
    int noOfCaps(String userstr) {
        int nocaps = 0;
        for (int i = 0; i < userstr.length(); i++) {
            char ch = userstr.charAt(i);
            if (ch >= 'A' && ch <= 'Z') {
                nocaps++;
                System.out.println("Position of " + ch + " is:" + i);
            }
        }
        return nocaps;
    }
}
public class StringFeatures {
    public static void main(String[] args) {
        // TODO Auto-generated method stub
        Scanner read = new Scanner(System.in);

        System.out.println("Enter your String");
        String str = read.nextLine();
        MyString obj = new MyString();
        int out = obj.noOfCaps(str);
        System.out.println("No: of capital letters: " + out);
        int digits = obj.noOfDigits(str);
        System.out.println("No: of Digits: " + digits);
        obj.vowelOccurences(str);
    }
}
```
