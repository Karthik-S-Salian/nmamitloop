---
title: Astro in brief
description: Find out what makes Astro awesome!
branches: ["cs","is"]
subject : oops
sem: 3
type: program
---

Design, Develop and Implement a menu driven Program in C for the following operations on STACK of Integers (Array Implementation of Stack with maximum size MAX).
1. Push an Element on to Stack
2. Pop an Element from Stack
3. Demonstrate Overflow and Underflow situations on Stack
4. Display the status of Stack
5. Exit
Support the program with appropriate functions for each of the above operations

```c
#include<stdio.h>
#include<stdlib.h>

#define MAX 10

struct Stack{
    int top;
    int items[MAX];
};

typedef struct Stack * STACK;

void push(STACK stack,int item){
    if(stack->top==MAX-1){
        printf("queue is full\n");
        return;
    }
    stack->items[++stack->top] = item;
    printf("%d is sucessfully inserted\n",item);
}

void pop(STACK stack){
    if(stack->top==0){
        printf("queue is empty\n");
        return;
    }
    printf("%d is sucessfully inserted\n",stack->items[stack->top--]);
}

void display(STACK stack){
    if(stack->top==0){
        printf("queue is empty\n");
        return;
    }
    for(int i=stack->top;i>0;i--)
        printf("%d ->",stack->items[i]);
    printf("%d\n",stack->top);
}

int main()
{
    printf("Queue\n");
    printf("1. Insert Rear\n");
    printf("2. delete front\n");
    printf("3. display\n");
    printf("4. exit\n");

    struct Stack stack={0,-1};
    int choice,value;
    while (1)
    {
        printf("Enter the choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            printf("Enter the element: ");
            scanf("%d", &value);
            insert_rear(&stack,value);
            break;
        case 2:
            delete_front(&stack);
            break;
        case 3:
            display(&stack);
            break;
            break;
        case 4:
            return 0;
        default:
            printf("INVALID CHOICE\n");
            break;
        }
    }
    return 0;
}
```