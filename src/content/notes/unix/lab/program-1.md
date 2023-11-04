---
title: Program 1
description: Find out what makes Astro awesome!
branches: ["is"]
subject : unix
sem: 3
type: program
---

## Question
Implement a shell program to find and display the largest and smallest of three numbers.

## Code 
```bash
#!/bin/bash

echo "Please enter three numbers"
read x
read y
read z

if [ $x -ge $y ] && [ $x -ge $z ]; then
    echo "$x is the largest number"
elif [ $y -ge $x ] && [ $y -ge $z ]; then
    echo "$y is the largest number"
else
    echo "$z is the largest number"
fi

if [ $x -lt $y ] && [ $x -lt $z ]; then
    echo "$x is the smallest number"
elif [ $y -lt $x ] && [ $y -lt $z ]; then
    echo "$y is the smallest number"
else
    echo "$z is the smallest number"
fi
```
## Output 
Please enter three numbers\
6\
7\
3\
7 is the largest number\
3 is the smallest number


## Summary
This script finds and displays the largest and smallest numbers among three given numbers. It uses conditional statements to determine the largest and smallest values.