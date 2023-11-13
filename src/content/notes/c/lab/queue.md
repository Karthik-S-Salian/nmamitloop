---
title: Astro in brief
description: Find out what makes Astro awesome!
branches: ["cs","is"]
subject : oops
sem: 3
type: program
---

## Question

<pre>
Design, Develop and Implement a menu driven Program in C for the following operations on Circular QUEUE of Characters (Array Implementation of Queue with maximum size MAX)
Insert an Element on to Circular QUEUE
Delete an Element from Circular QUEUE
Demonstrate Overflow and Underflow situations on Circular QUEUE
Display the status of Circular QUEUE
Exit
Support the program with appropriate functions for each of the above operations
</pre>

## Code
```c
#include<stdio.h>
#include<stdlib.h>

#define MAX 10

struct Queue{
    int front,rear;
    int items[MAX];
};

typedef struct Queue * QUEUE;

void enqueue(QUEUE queue,int item){
    if(queue->rear==MAX-1){
        printf("queue is full\n");
        return;
    }
    queue->items[++queue->rear] = item;
    printf("%d is sucessfully inserted\n",item);
}

void dequeue(QUEUE queue){
    if(queue->rear<queue->front){
        printf("queue is empty\n");
        return;
    }
    printf("%d is sucessfully deleted\n",queue->items[queue->front++]);
}

void display(QUEUE queue){
    if(queue->rear<queue->front){
        printf("queue is empty\n");
        return;
    }
    for(int i=queue->front;i<=queue->rear;i++){
        printf("%d ",queue->items[i]);
    }
    printf("\n");
}

int main()
{
    printf("Queue\n");
    printf("1. insert\n");
    printf("2. delete\n");
    printf("3. display\n");
    printf("4. exit\n");

    struct Queue queue={0,-1};
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
            enqueue(&queue,value);
            break;
        case 2:
            dequeue(&queue);
            break;
        case 3:
            display(&queue);
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