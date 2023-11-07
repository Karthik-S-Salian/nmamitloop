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
    int value;
    struct Node *rlink, *llink;
};

typedef struct Node *NODE;

NODE get_node(int value)
{
    NODE node = (NODE)malloc(sizeof(NODE));
    node->value = value;
    node->rlink = NULL;
    node->llink = NULL;
    return node;
}

void free_node(NODE node)
{
    free(node);
}

NODE insert_front(NODE first, int value)
{
    NODE new_node = get_node(value);
    printf("sucessully inserted %d \n", value);
    if (first == NULL)
        return new_node;
    first->llink = new_node;
    new_node->rlink = first;
    return new_node;
}

NODE insert_rear(NODE first, int value)
{
    NODE new_node = get_node(value);
    printf("sucessully inserted %d \n", value);
    if (first == NULL)
        return new_node;
    NODE last_node = first;
    while (last_node->rlink != NULL)
        last_node = last_node->rlink;
    last_node->rlink = new_node;
    new_node->llink = last_node;
    return first;
}

NODE insert_at(NODE first, int value, int index)
{
    // first node has index of 1 ; not to write for lab
    NODE new_node = get_node(value);
    if (first == NULL)
        return new_node;
    if (index == 1)
        return insert_front(first, value);
    NODE curr_node = first;
    for (int pos = 1; (pos < index - 1 && curr_node->rlink != NULL); pos++)
        curr_node = curr_node->rlink;
    new_node->rlink = curr_node->rlink;
    if (curr_node->rlink != NULL)
        curr_node->rlink->llink = new_node;
    curr_node->rlink = new_node;
    new_node->llink = curr_node;
    printf("sucessully inserted %d \n", value);
    return first;
}

NODE delete_front(NODE first)
{
    if (first == NULL)
    {
        printf("DLL is empty\n");
        return NULL;
    }
    NODE next_node = first->rlink;
    if (next_node != NULL)
        next_node->llink = NULL;
    printf("sucessully deleted %d \n", first->value);
    free_node(first);
    return next_node;
}

NODE delete_rear(NODE first)
{
    if (first == NULL)
    {
        printf("DLL is empty\n");
        return NULL;
    }
    NODE last_node = first;
    while (last_node->rlink != NULL)
        last_node = last_node->rlink;
    if (last_node->llink == NULL)
        first = NULL;
    else
        last_node->llink->rlink = NULL;
    printf("sucessully deleted %d \n", last_node->value);
    free_node(last_node);
    return first;
}

NODE delete_at(NODE first, int index)
{
    // first node has index of 1 ; not to write for lab
    if (first == NULL)
    {
        printf("DLL is empty\n");
        return NULL;
    }
    if (index == 1)
        return delete_front(first);
    NODE delete_node = first->rlink;
    int pos = 2;
    while (delete_node != NULL)
    {
        if (pos == index)
        {
            delete_node->llink->rlink = delete_node->rlink;
            if (delete_node->rlink != NULL)
                delete_node->rlink->llink = delete_node->llink;
            printf("sucessully deleted %d \n", delete_node->value);
            free_node(delete_node);
            return first;
        }
        delete_node = delete_node->rlink;
        pos++;
    }
    printf("could not delete : index out of range\n");
    return first;
}

void display(NODE first)
{
    if (first == NULL)
        printf("DLL is empty\n");
    else
    {
        int count = 0;
        for (NODE curr_node = first; curr_node != NULL; curr_node = curr_node->rlink, count++)
            printf("%d ", curr_node->value);
        printf("\nThere are %d nodes\n", count);
    }
}

int main()
{
    printf("dll\n");
    printf("1: insert front\n");
    printf("2: insert rear\n");
    printf("3: delete front \n");
    printf("4: delete rear\n");
    printf("5: insert at\n");
    printf("6: delete at\n");
    printf("7: display \n");
    printf("8: quit program\n");

    int choice, value, position;
    NODE first = NULL;
    while (1)
    {
        printf("Enter the choice: ");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
            printf("Enter the element be inserted: ");
            scanf("%d", &value);
            first = insert_front(first, value);
            break;
        case 2:
            printf("Enter the element be inserted: ");
            scanf("%d", &value);
            first = insert_rear(first, value);
            break;
        case 3:
            first = delete_front(first);
            break;
        case 4:
            first = delete_rear(first);
            break;
        case 5:
            printf("Enter the element be inserted: ");
            scanf("%d", &value);
            printf("Enter the position: ");
            scanf("%d", &position);
            first = insert_at(first, value, position);
            break;
        case 6:
            printf("Enter the position: ");
            scanf("%d", &position);
            first = delete_at(first, position);
            break;
        case 7:
            display(first);
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