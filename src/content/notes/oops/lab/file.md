---
title: count the number of characters, words, and lines in a file
branches: ["cs","is"]
subject : oops
sem: 3
type: program
---

<pre>
Write a program that will count the number of characters, words, and lines in a file. Words are separated by a white-space character. Your program should prompt the user to enter a filename.
</pre>

```java
import java.util.*;
import java.io.*;
class MyFile {
    void processFile() {
        Scanner read = new Scanner(System.in);
        System.out.println("enter the file name");
        String fname = read.nextLine();
        File file = new File(fname);
        int linecount = 0;
        int wordcount = 0;
        int charcount = 0;
        try {
            Scanner myfile = new Scanner(file);
            while (myfile.hasNext()) {
                String line = myfile.nextLine();
                linecount++;
                String[] sarr = line.split(" ");
                wordcount = wordcount + sarr.length;
                charcount = charcount + line.length();
            }
        } catch (FileNotFoundException ex) {
            System.out.println("file" + fname + "does not exist..");
        }
        System.out.println("no of lines: " + linecount);
        System.out.println("no of words: " + wordcount);
        System.out.println("no of characterss: " + charcount);
    }
}
public class FileDemo {
    public static void main(String[] args) {
        MyFile obj = new MyFile();
        obj.processFile();
    }
}
```