---
title: Astro in brief
description: Find out what makes Astro awesome!
branches: ["cs","is"]
subject : oops
sem: 3
type: program
---
Design, Develop and Implement a Program in C for the following Stack Applications
1. Evaluation of Suffix expression with single-digit operands and operators:+, -, *, /, %, ^
2. Solving Tower of Hanoi problem with n disks

```c
#include<stdio.h>

int toh(int n,char source,char temp,char dest){
    if(n==0) return 0;
    int c1 = toh(n-1,source,dest,temp);
    printf("move %dth disk from %c to %c\n",n,source,dest);
    int c2 = toh(n-1,temp,source,dest);
    return c1+c2+1;
}

int main(){
    printf("Tower of Henoi\n");
    int n=0;
    printf("Enter no of disk: ");
    scanf("%d",&n);
    int count = toh(n,'A','B','C');
    printf("no of recursive calls = %d\n",count);
}
```