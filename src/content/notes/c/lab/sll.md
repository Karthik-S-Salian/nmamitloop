---
title: Astro in brief
description: Find out what makes Astro awesome!
branches: ["cs","is"]
subject : oops
sem: 3
type: program
---

## Code
```c
#include <stdio.h>
#include <stdlib.h>

struct Node
{
    struct Node *link;
    int value;
};

typedef struct Node *NODE;

NODE createNode()
{
    return (NODE)malloc(sizeof(struct Node));
}

void deleteNode(NODE node)
{
    free(node);
}

NODE insert_front(NODE top, int item)
{
    NODE newNode = createNode();
    newNode->value = item;
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
    deleteNode(top);
    return next;
}

NODE insert_rear(NODE front, int item)
{

    NODE newNode = createNode();
    newNode->value = item;
    if (front == NULL)
    {
        newNode->link = NULL;
        printf("%d is successfully inserted\n", item);
        return newNode;
    }
    else
    {
        NODE rear = front;
        for (; rear->link != NULL; rear = rear->link)
            ;
        newNode->link = NULL;
        rear->link = newNode;
        printf("%d is successfully inserted\n", item);
        return front;
    }
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
## Output
csll using head node\
1: insert front\
2: insert rear\
3: delete front\
4: delete rear\
5: insert right\
6: delete right\
7: display\
8: quit program

Enter the choice: 1\
Enter the element be inserted: 12\
sucessfully inserted 12

Enter the choice: 1\
Enter the element be inserted: 24\
sucessfully inserted 24

Enter the choice: 2\
Enter the element be inserted: 32\
sucessfully inserted 32

Enter the choice: 2\
Enter the element be inserted: 87\
sucessfully inserted 87

Enter the choice: 3\
deleted item 24

Enter the choice: 4\
deleted item 87

Enter the choice: 5\
Enter the element be inserted: 93\
Enter the node value: 1\
could not find node with value 1

Enter the choice: 39\
INVALID OPTION

Enter the choice: 5\
Enter the element be inserted: 10\
Enter the node value: 24\
could not find node with value 24

Enter the choice: 5\
Enter the element be inserted: 10\
Enter the node value: 32\
sucessfully inserted 10

Enter the choice: 6\
Enter the node value: 32\
sucessfully deleted 10

Enter the choice: 7\
There are 2 nodes\
12  32

Enter the choice: 8\
exiting...

