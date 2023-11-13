---
title: Astro in brief
description: Find out what makes Astro awesome!
branches: ["cs","is"]
subject : oops
sem: 3
type: program
---

<pre>
4. Design a super class called Staff with details as StaffId, Name, Phone, Salary. Extend this class by writing three subclasses namely Teaching (domain, publications), Technical (skills), and Contract (period). Write a Java program to read and display at least 3 staff objects of all three categories.
</pre>

```java
import java.util.*;
class Staff {
    String staffid;
    String name;
    String phone;
    double salary;
    void readData() {
        Scanner read = new Scanner(System.in);
        System.out.println("Enter staffid,name,phone,salary");
        staffid = read.nextLine();
        name = read.nextLine();
        phone = read.nextLine();
        salary = read.nextDouble();
    }
    void displayData() {
        System.out.println("Staffid: " + staffid);
        System.out.println("Staffname: " + name);
        System.out.println("Staffphone: " + phone);
        System.out.println("Salary: " + salary);
    }
}
class TeachingStaff extends Staff {
    String domain;
    String publications;
    void readData() {
        super.readData();
        Scanner read = new Scanner(System.in);
        System.out.println("Enter domain, publications");
        domain = read.nextLine();
        publications = read.nextLine();
    }
    void displayData() {
        super.displayData();
        System.out.println("Domain: " + domain);
        System.out.println("publications: " + publications);
    }
}
class TechincalStaff extends Staff {
    String skills;
    void readData() {
        super.readData();
        Scanner read = new Scanner(System.in);
        System.out.println("Enter skills");
        skills = read.nextLine();
    }
    void displayData() {
        super.displayData();
        System.out.println("skills: " + skills);
    }
}
class ContractStaff extends Staff {
    int period;
    void readData() {
        super.readData();
        Scanner read = new Scanner(System.in);
        System.out.println("Enter period");
        period = read.nextInt();
    }
    void displayData() {
        super.displayData();
        System.out.println("period:" + period);
    }
}
public class StaffInheritanceDemo {
    public static void main(String[] args) {
        // TODO Auto-generated method stub
        TeachingStaff teachstaff = new TeachingStaff();
        teachstaff.readData();
        teachstaff.displayData();
        TechincalStaff techstaff = new TechincalStaff();
        techstaff.readData();
        techstaff.displayData();
    }
}
```

