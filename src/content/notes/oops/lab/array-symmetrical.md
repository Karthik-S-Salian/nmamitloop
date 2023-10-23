---
title: Astro in brief
description: Find out what makes Astro awesome!
branches: ["cs","is"]
subject : oops
sem: 3
---


2:Write a java program to create two separate arrays of integers. Elements of both
the arrays shall be read from keyboard input. Program should display “Arrays are
symmetrical” if both the arrays contain equal numbers of even and odd numbers.


```java
import java.util.*;

class Myarray

{
  private int arr[];
  private int oddno;
  private int evenno;

  public void readelements()

  {

    Scanner read = new Scanner(System.in);
    System.out.println("Enter the size of the array");
    int size = read.nextInt();
    arr = new int[size];
    for (int 1 = 0; 1 < arr.length; i++) {
      System.out.println("Enter the next element");
      arr[i] = read.nextInt();

    }
  }

  void compute() {
    for (int 1 = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        evenno++;
      } else
        oddno++;
    }
  }

  int NoOfEvenno() {
    return evenno;
  }

  int NoOfOddno() {
    return oddno;
  }
}
public class ArraySymmetry {

  public static void main(String[] args) {
    // TODO Auto-generated method stub
    Myarray arrl = new Myarray();
    System.out.println("Enter the first array elements");
    arrl.readelements();
    arrl.compute();

    Myarray arr2 = new Myarray();

    System.out.println("Enter the second array elements");
    arr2.readelements();

    arr2.compute();

    if ((arrl.NoOfEvenno() == arr2.NoOfEvenno()) &&
      (arrl.NoOfOddno() == arr2.NoOfOddno()))
      System.out.println("Arrays are symmetrical");
    else
      System.out.println("Arrays are NOT symmetrical");
  }
}
```