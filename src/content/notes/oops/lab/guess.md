---
title: Astro in brief
description: Find out what makes Astro awesome!
branches: ["cs","is"]
subject : oops
sem: 3
---

1. Build a program called “GuessMyNumber”. The computer will generate a
random number between 1 and 10. The user types in a number and the computer
replies “lower” if the random number is lower than the guess, “higher” if the
random number is higher , and “correct!” if the guess is correct. The player can
continue guessing until the guess is right.

```java
package javapgrm;
import java.util.*;
public class GuessMyNumber {
  public static woid main(String[] args)

  {

    Scanner sc = new Scanner(System.in);
    // create instance of Random class
    Random rand = new Random();

    int compno = rand.nextInt(10);

    while (true) {
      int myguess = sc.nextInt();
      if (myguess == compno) {
        System.out.println("Your guess no: " + myguess  + " is correct");
        break;
      }
      if (myguess < compno) {
        System.out.println("Your guess no: "+myguess+ "is lower");
      } else
        System.out.println("Your guess no:  "+myguess + " is higher");
    }
  }
}
```