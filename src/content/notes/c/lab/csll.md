---
title: Astro in brief
description: Find out what makes Astro awesome!
branches: ["cs","is"]
subject : oops
sem: 3
---

## Code
```c
// csll using header node
#include <stdio.h>
#include <stdlib.h>

struct Node
{
    struct Node *link;
    int data;
};

typedef struct Node *NODE;

NODE getNode()
{
    return (NODE)malloc(sizeof(struct Node));
}

void freeNode(NODE node)
{
    free(node);
}

NODE create_csll()
{
    NODE head = getNode();
    head->link = head;
    head->data = 0;
    return head;
}

void insert_front(NODE head, int value)
{
    NODE newNode = getNode();
    newNode->data = value;
    newNode->link = head->link;
    head->link = newNode;
    head->data++;
    printf("sucessfully inserted %d\n", value);
}

void insert_rear(NODE head, int value)
{
    NODE newNode = getNode();
    newNode->data = value;
    NODE currNode = head;
    while (currNode->link != head)
        currNode = currNode->link;
    newNode->link = currNode->link;
    currNode->link = newNode;
    head->data++;
    printf("sucessfully inserted %d\n", value);
}

void delete_front(NODE head)
{
    if (head->link == head)
        printf("csll is empty\n");
    else
    {
        NODE firstNode = head->link;
        head->link = firstNode->link;
        head->data--;
        printf("deleted item %d\n", firstNode->data);
        freeNode(firstNode);
    }
}

void delete_rear(NODE head)
{
    if (head->link == head)
        printf("csll is empty\n");
    else
    {
        NODE lastPrvsNode = head;
        while (lastPrvsNode->link->link != head)
            lastPrvsNode = lastPrvsNode->link;
        NODE lastNode = lastPrvsNode->link;
        lastPrvsNode->link = head;
        head->data--;
        printf("deleted item %d\n", lastNode->data);
        freeNode(lastNode);
    }
}

void insert_right(NODE head, int value, int nodeValue)
{
    NODE newNode = getNode();
    newNode->data = value;
    NODE currNode = head->link;
    while (currNode != head)
    {
        if (currNode->data == nodeValue)
        {
            newNode->link = currNode->link;
            currNode->link = newNode;
            head->data++;
            printf("sucessfully inserted %d\n", value);
            return;
        }
        currNode = currNode->link;
    }
    printf("could not find node with value %d\n", nodeValue);
}

void delete_right(NODE head, int nodeValue)
{
    NODE currNode = head->link;
    while (currNode->link != head)
    {
        if (currNode->data == nodeValue)
        {
            NODE nextNode = currNode->link;
            currNode->link = nextNode->link;
            head->data--;
            printf("sucessfully deleted %d\n", nextNode->data);
            freeNode(nextNode);
            return;
        }
        currNode = currNode->link;
    }
    if(currNode->data==nodeValue){
        printf("could not delete bcs the node is last node\n");
    }else{
        printf("could not find node with value %d\n", nodeValue);
    }
    
}

void display(NODE head)
{
    printf("There are %d nodes\n", head->data);
    if (head->data == 0)
        printf("csll is empty");
    for (NODE crr = head->link; crr != head; crr = crr->link)
        printf("%d  ", crr->data);
    printf("\n");
}

int main()
{
    printf("csll using head node\n");
    printf("1: insert front\n");
    printf("2: insert rear\n");
    printf("3: delete front \n");
    printf("4: delete rear\n");
    printf("5: insert right\n");
    printf("6: delete right\n");
    printf("7: display \n");
    printf("8: quit program\n");

    int choice, value, nodeValue;
    NODE head = create_csll();
    while (1)
    {
        printf("Enter the choice: ");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
            printf("Enter the element be inserted: ");
            scanf("%d", &value);
            insert_front(head, value);
            break;
        case 2:
            printf("Enter the element be inserted: ");
            scanf("%d", &value);
            insert_rear(head, value);
            break;
        case 3:
            delete_front(head);
            break;
        case 4:
            delete_rear(head);
            break;
        case 5:
            printf("Enter the element be inserted: ");
            scanf("%d", &value);
            printf("Enter the node value: ");
            scanf("%d", &nodeValue);
            insert_right(head, value, nodeValue);
            break;
        case 6:
            printf("Enter the node value: ");
            scanf("%d", &nodeValue);
            delete_right(head, nodeValue);
            break;
        case 7:
            display(head);
            break;
        case 8:
            printf("exiting...\n");
            return 0;
        default:
            printf("INVALID OPTION\n");
            break;
        }
    }

    return 0;
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

