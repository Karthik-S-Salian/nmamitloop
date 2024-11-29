---
title: 5 distance converter
branches: ["cs","is"]
subject : oops
sem: 3
type: program
---

<pre>
5. Develop a java application to implement distance converter (meter to KM, miles to KM and vice versa), time converter (hours to minutes, seconds and vice versa) using packages
</pre>


```java
//DistanceConverter.java
package Converter;
import java.util.*;
public class DistanceConverter {
    public void Convert() {
        System.out.println("Enter the distance in miles");
        Scanner read = new Scanner(System.in);
        int miles = read.nextInt();
        double km = 1.609 * miles;
        System.out.println("Coverted value in km:" + km);
        System.out.println("Enter the distance in kilometer");
        int klm = read.nextInt();
        double cmiles = klm / 1.609;
        long meter = klm * 1000;
        System.out.println("Converted value in miles" + cmiles);
        System.out.println("Converted value in meters" + meter);
    }
}
//TimeConverter.java
package Converter;
import java.util.*;
public class TimeConverter {
    public void Convert() {
        Scanner read = new Scanner(System.in);
        System.out.println("Enter the time in hours:");
        int hrs = read.nextInt();
        long min = hrs * 60;
        long sec = hrs * 60 * 60;
        System.out.println("Coverted time:" + min + "minutes. " + sec +
            "seconds");

        System.out.println("Enter the time in minutes:");
        int umin = read.nextInt();
        double chrs = umin / 60;
        long csec = umin * 60;
        System.out.println("Coverted time:" + chrs + "hours. " + csec +
            "seconds");
    }
}
//ConverterDriver
package defaultpack;
import Converter.DistanceConverter;
import Converter.TimeConverter;
public class ConverterDriver {
    public static void main(String[] args) {
        // TODO Auto-generated method stub
        DistanceConverter distobj = new DistanceConverter();
        distobj.Convert();
        TimeConverter timeobj = new TimeConverter();
        timeobj.Convert();
    }
}
```