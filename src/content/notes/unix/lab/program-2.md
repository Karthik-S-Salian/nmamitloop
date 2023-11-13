---
title: Program 2
description: Find out what makes Astro awesome!
branches: ["is"]
subject : unix
sem: 3
type: program
---


## Question
2: Find whether the number n is divisible by m or not using a shell script. Where m and n are supplied as command line arguments or read from the keyboard interactively.

## Code
```bash
#!/bin/sh

echo "Enter the dividend:"
read n
echo "Enter the divisor:"
read m

if [ $((n % m)) -eq 0 ]; then
    echo "$n is divisible by $m"
else
    echo "$n is not divisible by $m"
fi
```

## Output
<pre>
Enter the dividend:
66
Enter the divisor:
2
66 is divisible by 2
</pre>

## Summary:
This script determines whether one number is divisible by another. It checks if the remainder of the division is zero, indicating divisibility.