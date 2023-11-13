---
title: Program 4
description: Find out what makes Astro awesome!
branches: ["is"]
subject : unix
sem: 3
type: program
---


## Question
4: Write a shell program to implement simple calculator operations.

## Code
```bash
#!/bin/sh

echo "Options are:"
echo "+: Add"
echo "-: Subtract"
echo "*: Multiply"
echo "/: Divide"

echo "Enter the two numbers:"
read a
read b
echo "Enter your choice (+, -, *, /):"
read ch
case $ch in
    +) result=$(expr $a + $b)
       echo "Sum = $result";;
    -) result=$(expr $a - $b)
       echo "Difference = $result";;
    *|\*) result=$(expr $a \* $b)
       echo "Product = $result";;
    /) if [ $b -ne 0 ]; then
       result=$(expr $a / $b)
       echo "Division = $result"
       else
       echo "Error: Division by zero"
       fi
       ;;
    *) echo "Invalid choice";;
esac
```

## Output
<pre>
$ sh cal.sh
Options are:
+: Add
-: Subtract
*: Multiply
/: Divide
Enter the two numbers:
6
4
Enter your choice (+, -, *, /):
+
Sum = 10

$ sh cal.sh
Options are:
+: Add
-: Subtract
*: Multiply
/: Divide
Enter the two numbers:
3
2
Enter your choice (+, -, *, /):
-
Difference = 1

$ sh cal.sh
Options are:
+: Add
-: Subtract
*: Multiply
/: Divide
Enter the two numbers:
9
0
Enter your choice (+, -, *, /):
/
Error: Division by zero

$ sh cal.sh
Options are:
+: Add
-: Subtract
*: Multiply
/: Divide
Enter the two numbers:
5
2
Enter your choice (+, -, *, /):
*
Product = 10

$ sh cal.sh
Options are:
+: Add
-: Subtract
*: Multiply
/: Divide
Enter the two numbers:
4
3
Enter your choice (+, -, *, /):
$ Invalid choice
</pre>

## Summary
This script serves as a simple calculator, performing addition, subtraction, multiplication, and division based on user input. It demonstrates the use of arithmetic operations and a case statement for menu selection.