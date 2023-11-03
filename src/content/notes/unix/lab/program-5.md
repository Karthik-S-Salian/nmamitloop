---
title: Program 5
description: Find out what makes Astro awesome!
branches: ["is"]
subject : unix
sem: 3
type: program
---


## Question
4: Design a Shell Program that takes any number of arguments and prints them in the same order and in reverse order with suitable messages.

## Code
```bash
#!/bin/sh

if [ $# -eq 0 ]; then
    echo "No arguments"
else
    echo "Number of arguments: $#"
    echo "The input arguments are"
    num=1
    for arg in "$@"; do
        echo "arg$num is $arg"
        num=$(expr $num + 1)
    done
    echo "Arguments in reverse order"
    num=$#
    while [ $num -ne 0 ]; do
        eval "echo arg$num is $$num"
        num=$(expr $num - 1)
    done
fi
```

## Output
$ sh rev.sh A B C
Program name: rev.sh
Number of arguments: 3
The input arguments are
arg1 is A
arg2 is B
arg3 is C
Arguments in reverse order
arg3 is C
arg2 is B
arg1 is A

## Summary
This script accepts any number of arguments and prints them in the same order and in reverse order. It showcases argument handling, counting, and reversing the order.