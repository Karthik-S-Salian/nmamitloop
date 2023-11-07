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
    int data;
};

typedef struct Node *NODE;

NODE getNode(int value)
{
    NODE newNode =  (NODE)malloc(sizeof(struct Node));
    newNode->data = value;
    return newNode;
}

void freeNode(NODE node)
{
    free(node);
}

NODE insert_front(NODE last, int value)
{
    NODE newNode = getNode(value);
    if (last == NULL)
        last = newNode;
    newNode->link = last->link;
    last->link = newNode;
    printf("sucessfully inserted %d\n", value);
    return last;
}

NODE insert_rear(NODE last, int value)
{
    NODE newNode = getNode(value);
    if (last == NULL)
        last = newNode;
    newNode->link = last->link;
    last->link = newNode;
    printf("sucessfully inserted %d\n", value);
    return newNode;
}

NODE delete_front(NODE last)
{
    if (last == NULL)
    {
        printf("csll is empty\n");
        return NULL;
    }
    
    NODE deleteNode = last->link;
    printf("deleted item %d\n", deleteNode->data);
    if (last->link == last)
        last=NULL;
    else
        last->link = deleteNode->link;
    freeNode(deleteNode);
    return last;
}

NODE delete_rear(NODE last)
{
    if (last == NULL)
    {
        printf("csll is empty\n");
        return NULL;
    }
    if (last->link == last)
    {
        printf("deleted item %d\n", last->data);
        freeNode(last);
        return NULL;
    }

    NODE prvs_node = last->link;
    while (prvs_node->link != last)
        prvs_node = prvs_node->link;
    prvs_node->link = last->link;
    printf("deleted item %d\n", last->data);
    freeNode(last);
    return prvs_node;
}

NODE insert_right(NODE last ,int value,int nodeValue){
    if (last == NULL){
        printf("csll is empty\n");
        return NULL;
    }
    NODE currNode = last;
    do{
        if(currNode->data==nodeValue){
            NODE newNode = getNode(value);
            newNode->link = currNode->link;
            currNode->link = newNode;
            printf("sucessfully inserted %d\n", value);
            if(currNode==last)
                return newNode;
            return last;
        }
        currNode=currNode->link;
    }while(currNode!=last);
    printf("could not find node with value %d\n",nodeValue);
    return last;
}

NODE delete_right(NODE last ,int nodeValue){
    if (last == NULL){
        printf("csll is empty\n");
        return NULL;
    }

    // if(last->data==nodeValue)  //possible way
    //     return delete_front(last);

    NODE currNode = last;
    do{
        if(currNode->data==nodeValue){
            if(currNode->link==last)
                if(currNode==last)
                    last=NULL;
                else
                    last=currNode;
            NODE deleteNode = currNode->link;
            currNode->link = currNode->link->link;
            printf("sucessfully deleted %d\n", deleteNode->data);
            freeNode(deleteNode);
            return last;  
        }
        currNode=currNode->link;
    }while(currNode!=last);
    printf("could not find node with value %d\n",nodeValue);
    return last;
}

void display(NODE last)
{
    if (last == NULL)
    {
        printf("csll is empty\n");
        return;
    }
    for (NODE crr = last->link; crr != last; crr = crr->link)
        printf("%d  ", crr->data);
    printf("%d\n", last->data);
}

int main()
{
    NODE last = NULL;
    printf("1: insert front\n");
    printf("2: insert rear\n");
    printf("3: insert right\n");
    printf("4: delete front \n");
    printf("5: delete rear\n");
    printf("6: delete right\n");
    printf("7: display \n");
    printf("8: quit program\n");

    int choice, value,nodeValue;
    while (1)
    {
        printf("Enter the choice: ");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
            printf("Enter the element be inserted: ");
            scanf("%d", &value);
            last = insert_front(last, value);
            break;
        case 2:
            printf("Enter the element be inserted: ");
            scanf("%d", &value);
            last = insert_rear(last, value);
            break;
        case 3:
            printf("Enter the element be inserted: ");
            scanf("%d", &value);
            printf("Enter the node value: ");
            scanf("%d", &nodeValue);
            last = insert_right(last,value,nodeValue);
            break;
        case 4:
            last = delete_front(last);
            break;
        case 5:
            last = delete_rear(last);
            break;
        case 6:
            printf("Enter the node value: ");
            scanf("%d", &nodeValue);
            last = delete_right(last,nodeValue);
            break;
        case 7:
            display(last);
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
