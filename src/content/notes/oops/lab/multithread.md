---
title: Astro in brief
description: Find out what makes Astro awesome!
branches: ["cs","is"]
subject : oops
sem: 3
type: program
---

<pre>
Write a Java program that implements a multithreaded application that has
three threads. First thread generates a random integer for every 1 second;second thread computes the square of the number and prints; third thread will print the value the cube of the number.
</pre>

```java
package ThreadPack;
import java.util.*;
class FirstThread extends Thread {
    public void run() //method under class Thread
    {
        Random obj = new Random();
        while (true) {
            int rand = obj.nextInt(20);
            System.out.println("Random number generated is:" + rand);
            try {
                Thread.sleep(1000); //pauses execution of thread
                for 1000 milliseconds i.e 1 second
            } catch (InterruptedException ex) {
                System.out.println("Error occured in sleep..");
            }
            SecondThread secthread = new
            SecondThread(rand); //passes random number to second thread
            secthread.start(); //finds square of random number
            ThirdThread thirthread = new ThirdThread(rand);
            thirthread.start();
            /*second and third thread objects declared in first
thread because they
both use parameter rand */
        }
    }
}
class SecondThread extends Thread {
    private int num;
    public SecondThread(int n) //parameterized constructor
    {
        num = n;
    }
    public void run() {
        int square = num * num;
        System.out.println("The square of the number " + num + " is:" + square);
    }
}
class ThirdThread extends Thread {
    private int num;
    public ThirdThread(int n) //parameterized constructor
    {
        num = n;
    }
    public void run() {
        int cube = num * num * num;
        System.out.println("The cube of the number " + num + "is:" + cube);
    }
}
public class MultiThreadDemo {
    public static void main(String[] args) {
        FirstThread fthread = new FirstThread();
        fthread.start(); //start() used to call run() method
    }
}
```
