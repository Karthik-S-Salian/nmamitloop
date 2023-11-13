---
title: Program 6
description: Find out what makes Astro awesome!
branches: ["is"]
subject : unix
sem: 3
type: program
---


## Question
6:Design a shell program that takes two file names and checks if the permissions for these files are identical. If they are identical, output the common permissions; otherwise, output each file name followed by its permissions.

## Code
```bash
#!/bin/sh

display_perm() {
  r=$(ls -l "$1" | cut -c 2)
  w=$(ls -l "$1" | cut -c 3)
  x=$(ls -l "$1" | cut -c 4)
  echo "Owner permissions:"
  if [ "$r" = "r" ]; then
    echo "READ"
  else
    echo "NO READ"
  fi
  if [ "$w" = "w" ]; then
    echo "WRITE"
  else
    echo "NO WRITE"
  fi
  if [ "$x" = "x" ]; then
    echo "EXECUTE"
  else
    echo "NO EXECUTE"
  fi
  g=$(ls -l "$1" | cut -c 5)
  w=$(ls -l "$1" | cut -c 6)
  x=$(ls -l "$1" | cut -c 7)
  echo "Group permissions:"
  if [ "$r" = "r" ]; then
    echo "READ"
  else
    echo "NO READ"
  fi
  if [ "$w" = "w" ]; then
    echo "WRITE"
  else
    echo "NO WRITE"
  fi
  if [ "$x" = "x" ]; then
    echo "EXECUTE"
  else
    echo "NO EXECUTE"
  fi
  o=$(ls -l "$1" | cut -c 8)
  w=$(ls -l "$1" | cut -c 9)
  x=$(ls -l "$1" | cut -c 10)
  echo "Others permissions:"
  if [ "$r" = "r" ]; then
    echo "READ"
  else
    echo "NO READ"
  fi
  if [ "$w" = "w" ]; then
    echo "WRITE"
  else
    echo "NO WRITE"
  fi
  if [ "$x" = "x" ]; then
    echo "EXECUTE"
  else
    echo "NO EXECUTE"
  fi
}
echo "Enter two file names"
read file1 file2
if [ -e "$file1" -a -e "$file2" ]; then
  p1=$(display_perm "$file1")
  p2=$(display_perm "$file2")
  if [ "$p1" = "$p2" ]; then
    echo "Same permissions"
  else
    echo "Permission of $file1"
    display_perm "$file1"
    echo "Permission of $file2"
    display_perm "$file2"
  fi
else
  echo "Invalid file names"
fi
```

## Output
<pre>
$ sh perm.sh
Enter two file names
abc.txt data.c
Same permissions
</pre>

## Summary
This script checks if the permissions for two files are identical. If they are identical, it outputs the common permissions. Otherwise, it outputs the permissions for each file separately. The program utilizes file handling, permission extraction, and comparison.