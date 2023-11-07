---
title: Astro in brief
description: Find out what makes Astro awesome!
branches: ["cs","is"]
subject : oops
sem: 3
type: program
---

```c
#include <stdio.h>
#include <stdlib.h>

struct Node
{
    struct Node *link;
    int value;
};

typedef struct Node *NODE;

NODE get_node(int value)
{
    NODE node =  (NODE)malloc(sizeof(struct Node));
    node->value =value;
    node->link = NULL;
    return node;
}

NODE insert_front(NODE top, int item)
{
    NODE newNode = get_node(item);
    newNode->link = top;
    printf("%d is sucessfully inserted\n", item);
    return newNode;
}

NODE delete_front(NODE top)
{
    if (top == NULL)
    {
        printf("sll is empty\n");
        return top;
    }
    NODE next = top->link;
    printf("%d is sucessfully deleted\n", top->value);
    free(top);
    return next;
}

NODE insert_rear(NODE front, int item)
{
    NODE newNode = get_node(item);
    if (front == NULL)
    {
        printf("%d is successfully inserted\n", item);
        return newNode;
    }
    NODE rear = front;
    for (; rear->link != NULL; rear = rear->link)
        ;
    rear->link = newNode;
    printf("%d is successfully inserted\n", item);
    return front;
}

void display(NODE top)
{
    if (top == NULL)
    {
        printf("sll is empty\n");
        return;
    }

    for (NODE i = top; i != NULL; i = i->link)
        printf("%d\t", i->value);
    printf("\n");
}
int main()
{
    printf("singly linked list\n");
    printf("1: insert front\n");
    printf("2: delete front\n");
    printf("3: insert rear\n");
    printf("4: display\n");
    printf("5: exit\n");

    int choice, ele;
    NODE sll = NULL;
    while (1)
    {
        printf("Enter the choice: ");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
            printf("Enter the element to be inserted: ");
            scanf("%d", &ele);
            sll = insert_front(sll, ele);
            break;
        case 2:
            sll = delete_front(sll);
            break;
        case 3:
            printf("Enter the element to be inserted: ");
            scanf("%d", &ele);
            sll = insert_rear(sll, ele);
            break;
        case 4:
            display(sll);
            break;
        case 5:
            printf("exiting...\n");
            return 0;
        }
    }
}

```