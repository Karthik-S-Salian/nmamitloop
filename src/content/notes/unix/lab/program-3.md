---
title: Program 3
description: Find out what makes Astro awesome!
branches: ["is"]
subject : unix
sem: 3
type: program
---


## Question
3: Plan and implement a shell program to search a pattern in a file that will take both the pattern and file name from the command line arguments.

## Code
```bash
#!/bin/sh

if [ $# -eq 0 ]; then
    echo "No arguments"
else
    pattern="$1"
    filename="$2"
    if [ -f "$filename" ]; then
        grep "$pattern" "$filename"
    else
        echo "File '$filename' does not exist"
    fi
fi
```

## Output
<pre>
$ sh P3b.sh
No arguments

$ sh P3b.sh search_pattern sample_file.txt
This is a sample file with the search_pattern.
Another line with the search_pattern.

$ sh P3b.sh another_pattern non_existent_file.txt
File 'non_existent_file.txt' does not exist
</pre>

## Summary
This script searches for a pattern within a file specified in the command line arguments. It demonstrates command-line argument handling, file existence checking, and pattern matching.