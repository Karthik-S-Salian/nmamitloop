---
title: Astro in brief
description: Find out what makes Astro awesome!
branches: ["cs","is"]
subject : c
sem: 3
type: index
---

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