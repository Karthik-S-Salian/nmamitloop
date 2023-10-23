---
title: Astro in brief
description: Find out what makes Astro awesome!
branches: ["cs","is"]
subject : oops
sem: 3
---

Write a program to generate the resume. Create 2 Java classes Teacher (data: personal
information, qualification, experience, achievements) and Student (data: personal information, result, discipline) which implements the java interface Resume with the
method biodata().

```java
import java.util.*;
interface Resume {
    void bioData();
}
class Teacher implements Resume {
    String personalinfo;
    String qualification;
    String exp;
    String achievements;
    void readData() {
        Scanner read = new Scanner(System.in);
        System.out.println("Teacher:Enter pinfo,quali,exp,ach");
        personalinfo = read.nextLine();
        qualification = read.nextLine();
        exp = read.nextLine();
        achievements = read.nextLine();
    }
    public void bioData() {
        System.out.println("Pers info: " + personalinfo);
        System.out.println("qualification: " + qualification);
        System.out.println("exp: " + exp);
        System.out.println("achievements: " + achievements);
    }
}
class Student1 implements Resume {
    String personalinfo;
    String result;
    String descipline;
    void readData() {
        Scanner read = new Scanner(System.in);
        System.out.println("Student:Enter pinfo,result,descip");
        personalinfo = read.nextLine();
        result = read.nextLine();
        descipline = read.nextLine();
    }
    public void bioData() {
        System.out.println("Pers info: " + personalinfo);
        System.out.println("result: " + result);
        System.out.println("descipline: " + descipline);
    }
}
public class InterafaceDemo {
    public static void main(String[] args) {
        // TODO Auto-generated method stub
        //Resume obj = new Resume();
        Teacher teach = new Teacher();
        teach.readData();
        teach.bioData();
        Student1 stud = new Student1();
        stud.readData();
        stud.bioData();
    }
}
```
