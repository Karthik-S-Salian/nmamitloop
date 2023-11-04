---
title: Program 6
description: Find out what makes Astro awesome!
branches: ["is"]
subject : unix
sem: 3
type: program
---


## Question
7: For the given path names (e.g., a/b, a/b/c), design a shell script to create all the components in those path names as directories.

## Code
```bash
#!/bin/sh

if [ $# -ne 1 ]; then
    echo "No arguments"
    exit
fi
curdir=$(pwd)
for dir in $(echo $1 | tr '/' ' ')
do
    if [ -d $dir ]
    then
        echo "$dir exists under $curdir"
        cd $dir
do
    else
        mkdir $dir
        echo "$dir created under $curdir"
        cd $dir
do
done
cd $curdir
```

## Output
$ sh a.sh a/b/v/l
a created under /home/student/Desktop
b created under /home/student/Desktop/a
v created under /home/student/Desktop/a/b
1 created under /home/student/Desktop/a/b/v

## Summary
This script creates directories for the given path names, such as 'a/b/c,' in a hierarchical manner. It parses the path, checks for the existence of each directory, and creates it if necessary.