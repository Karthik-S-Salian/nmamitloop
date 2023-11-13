---
title: Astro in brief
description: Find out what makes Astro awesome!
branches: ["cs","is"]
subject : oops
sem: 3
type: program
---

<pre>
3. Create a Java class called Student with the following details as private instance variables within it. USN Name Branch Phone Write a Java program to create n number Student objects and print the USN, Name, Branch, and Phone of these objects with suitable headings.
</pre>


```java
import java.util.*;

class Student
{
    private String usn;
    private String name;
    private String branch;
    private String phoneno;

    public Student()
    {
        usn = "";
        name = "";
        branch = "";
        phoneno = "";
    }
	
    public Student(String pusn, String name, String branch, String phoneno) {
        usn = pusn;
        this.name = name;
        this.branch = branch;
        this.phoneno = phoneno;
    }
	
    void display() {
        System.out.print("usn:" + usn + " ");
        System.out.print("name:" + name + " ");
        System.out.print("branch:" + branch + " ");
        System.out.print("phoneno:" + phoneno + "\n");
    }
}

public class StudentDemo {
    public static void main(String[] args) {
        Scanner read = new Scanner(System.in);
        System.out.println("How many students?");
        int size = read.nextInt();
        Student objs[] = new Student[size];
        read = new Scanner(System.in);
        for (int i = 0; i < objs.length; i++) {
            String usn, name, branch, phoneno;
            System.out.println("Enter usn,name,branch,phoneno");
            usn = read.nextlLine();
            name = read.nextlLine();
            branch = read.nextLine();
            phoneno = read.nextlLine();
            Student obj = new Student(usn, name, branch, phone);
            objs[i] = obj;
        }

        for (int 1 = 0; i < objs.length; i++) {
            objs[i].display();
        }
    }
}
```
