---
title: Program 6
description: Find out what makes Astro awesome!
branches: ["is"]
subject : unix
sem: 3
type: program
---


## Question
9: For every filename, check whether the file exists in the current directory or not and then convert its name to uppercase only if a file with the new name doesn't exist. Shell script to perform this task.

## Code
```bash
#!/bin/bash

for file in "$@"; do
  if [ -f "$file" ]; then
    ufile=$(echo "$file" | tr '[a-z]' '[A-Z]')
    if [ -f "$ufile" ]; then
      echo "$ufile also exists"
    else
      mv "$file" "$ufile"
    fi
  else
    echo "$file doesn't exist"
  fi
done
```

## Output
<pre>
$ sh upper.sh
abc.txt data.c
ABC.TXT also exists
Data.c doesn't exist
</pre>

## Summary
This script verifies the existence of files in the current directory and changes their names to uppercase, provided a file with the new name doesn't already exist. It utilizes file existence checks and string transformations.