---
title: Astro in brief
description: Find out what makes Astro awesome!
branches: ["cs","is"]
subject : oops
sem: 3
type: program
---

<pre>
Design, Develop and Implement a menu-driven Program in C for the following Array operations
1. Creating an Array of N Integer Elements
2. Display of Array Elements with Suitable Headings
3. Inserting an Element (ELEM) at a given valid Position (POS)
4. Deleting an Element at a given valid Position(POS)
5. Exit.
Support the program with functions for each of the above operations.
</pre>

```c
#include <stdio.h>

#define MAX 10

int array[MAX];
int size = 0;

void create_array()
{
    printf("Enter the size of the array: ");
    scanf("%d", &size);
    if (size > MAX)
        size = MAX;
    printf("Enter %d integers\n", size);
    for (int i = 0; i < size; i++)
        scanf("%d", &array[i]);
}

void display_array()
{
    printf("Array: ");
    for (int i = 0; i < size; i++)
        printf("%d  ", array[i]);
    printf("\n");
}

void insert_element()
{
    if (size >= MAX)
    {
        printf("Array is full");
        return;
    }
    int pos, value;
    printf("Enter the position to insert: ");
    scanf("%d", &pos);
    if (pos > size || pos < 0)
    {
        printf("cannot insert at postion %d", pos);
        return;
    }
    printf("Enter the element: ");
    scanf("%d", &value);

    for (int i = size; i > pos; i--)
        array[i] = array[i - 1];
    array[pos] = value;
    size++;

    printf("element inserted");
}

void delete_element()
{
    if (size <= 0)
    {
        printf("Array is empty");
        return;
    }
    int pos;
    printf("Enter the position to insert: ");
    scanf("%d", &pos);
    if (pos >= size || pos < 0)
    {
        printf("Invalid Position");
        return;
    }
    size--;
    for (int i = pos; i < size; i++)
        array[i] = array[i + 1];

    printf("element deleted");
}

int main()
{
    printf("1. Create array\n");
    printf("2. Insert element\n");
    printf("3. delete element\n");
    printf("4. display the array\n");
    printf("5. exit\n");

    int choice;
    while (1)
    {
        printf("Enter the choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            create_array();
            break;
        case 2:
            insert_element();
            break;
        case 3:
            delete_element();
            break;
        case 4:
            display_array();
            break;
        case 5:
            return 0;
        default:
            printf("INVALID CHOICE\n");
            break;
        }
    }
    return 0;
}
```