---
title: Astro in brief
description: Find out what makes Astro awesome!
branches: ["cs","is"]
subject : oops
sem: 3
type: program
---

<pre>
8. Write a Java program to read n number of integers into an array. Raise an appropriate exception (ArithmeticException,InputMismatchException ArrayOutOfBoundsExcception)while performing following operations;
a) Dividing each element by the smallest element in an array. 
b) reading elements from the keyboard 
c) accessing the element from the index specified by the keyboard entry.Concept of exception handling using multiple catch blocks to be used in this scenario.
</pre>

```java

import java.util.*;
class GenerateException {
    private int[] myarray = new int[5];
    private void readElements() {
        Scanner read = new Scanner(System.in);
        System.out.println("enter the array elements");
        for (int i = 0; i < myarray.length; i++) {
            myarray[i] = read.nextInt();
        }
    }
    private void divideElements() {
        int small = getSmallestElement();
        for (int i = 0; i < myarray.length; i++) {
            double result = myarray[i] / small;
        }
        System.out.println("Division is Successfull");
    }
    private int getSmallestElement() {
        int small = myarray[0];
        for (int i = 0; i < myarray.length; i++) {
            if (myarray[i] < small)
                small = myarray[i];
        }
        return small;
    }
    private void displayElement() {
        Scanner read = new Scanner(System.in);
        System.out.println("enter the index you want to access:");
        int idx = read.nextInt();
        int val = myarray[idx];
        System.out.println("value is :" + val);
    }
    void compute() {
        readElements();
        divideElements();
        displayElement();
    }
}
public class ExceptionDemo {
    public static void main(String[] args) {
        // TODO Auto-generated method stub
        GenerateException obj1 = new GenerateException();
        try {
            obj1.compute();
        } catch (InputMismatchException ex) {
            System.out.println("run time InputMismatch error: " + ex.getMessage());
        } catch (ArithmeticException ex) {
            System.out.println("run time ArithmeticException error: " + ex.getMessage());
        } catch (ArrayIndexOutOfBoundsException ex) {
            System.out.println("run time ArrayIndexOutOfBoundsException error: " + ex.getMessage());
        }
    }
}


```