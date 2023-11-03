---
title: Program 8
description: Find out what makes Astro awesome!
branches: ["is"]
subject : unix
sem: 3
type: program
---


## Question
6:Develop a shell script that performs the following string handling operations: 
1. Calculate the length of the string 
2. Locate a position of a character in a string 
3. Extract the first three characters from the string 
4. Extract the last three characters from the string.

## Code
```bash
#!/bin/sh

echo "Enter the string"
read str
echo "Menu:"
echo "1. Length of the string"
echo "2. Extract First 3 Characters"
echo "3. Extract Last 3 Characters"
echo "4. Locate a position of a character in a string"
echo "5. Exit"
read ch
case $ch in
    1)
        len=$(expr "$str" : '.*')
        echo "The length of the string is $len"
        ;;
    2)
        if [ ${#str} -ge 3 ]; then
            first3="${str:0:3}"
            echo "First three characters are: $first3"
        else
            echo "Length of the string is less than 3"
        fi
        ;;
    3)
        if [ ${#str} -ge 3 ]; then
            last3="${str: -3}"
            echo "Last three characters are: $last3"
        else
            echo "Length of the string is less than 3"
        fi
        ;;
    4)
        echo "Enter the Character"
        read char
        pos=$(expr index "$str" "$char")
        if [ $pos -gt 0 ]; then
            echo "Position of character $char is $pos"
        else
            echo "Character not found in the string"
        fi
        ;;
    5)
        echo "Exiting the program"
        ;;
    *)
        echo "Invalid choice"
        ;;
esac
```

## Output
Suzune Horikita

Menu
1. Length of the string
2. Extract First 3 Character
3. Extract Last 3 Character
4. Locate a position of a character in a string
5. Quit
Enter your Choice: 2\
First three characters are: Suz\
Enter the String: Suzune Horikita

Menu
1. Length of the string
2. Extract First 3 Character
3. Extract Last 3 Character
4. Locate a position of a character in a string
5. Quit
Enter your Choice: 3\
Last three characters are: ita\
Enter the String: Suzune Horikita

Menu
1. Length of the string
2. Extract First 3 Character
3. Extract Last 3 Character
4. Locate a position of a character in a string
5. Quit
Enter your Choice: 4\
Enter the Character: e\
Position of character e is: 7

## Summary
This script handles various string operations, including calculating the length of the string, extracting the first and last three characters, and locating the position of a specific character. It provides a menu for user interaction.