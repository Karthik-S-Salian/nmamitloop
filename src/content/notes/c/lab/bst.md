---
title: Astro in brief
description: Find out what makes Astro awesome!
branches: ["cs","is"]
subject : oops
sem: 3
type: program
---

Design, Develop and Implement a menu driven Program in C for the following operations on Binary Search Tree(BST) of Integers
1. Create a BST of N Integers: 6, 9, 5, 2, 8, 15, 24, 14, 7, 8, 5, 2
2. Traverse the BST in Inorder, Preorder and Post Order
3. Search the BST for a given element (KEY) and report the appropriate message
4. Exit

```c
#include <stdio.h>
#include <stdlib.h>

struct Node
{
    int value;
    struct Node *left_subtree, *right_subtree;
};

typedef struct Node *NODE;

NODE get_node(int value)
{
    NODE node = (NODE)malloc(sizeof(struct Node));
    node->value = value;
    node->left_subtree = node->right_subtree = NULL;
    return node;
}

NODE insert(NODE root, int value)
{
    if (root == NULL)
    {
        NODE new_node = get_node(value);
        return new_node;
    }
    if (value == root->value)
    {
        printf("KEY ALREADY EXISTS\n");
        return root;
    }
    if (value < root->value)
        root->left_subtree = insert(root->left_subtree, value);
    else
        root->right_subtree = insert(root->right_subtree, value);
    return root;
}

void inorder(NODE root)
{
    if (root == NULL)
        return;
    inorder(root->left_subtree);
    printf("%d  ", root->value);
    inorder(root->right_subtree);
}

void preorder(NODE root)
{
    if (root == NULL)
        return;
    printf("%d  ", root->value);
    preorder(root->left_subtree);
    preorder(root->right_subtree);
}

void postorder(NODE root)
{
    if (root == NULL)
        return;
    postorder(root->left_subtree);
    postorder(root->right_subtree);
    printf("%d  ", root->value);
}

int main()
{
    printf("Binary Tree\n");
    printf("1: insert\n");
    printf("2: Traverse\n");
    printf("3: exit\n");
    int choice = 0, n = 0, value;
    NODE root = NULL;
    while (1)
    {
        printf("Enter the choice: ");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
            printf("Enter the number of elements for the BST: ");
            scanf("%d", &n);
            for (int i = 0; i < n; i++)
            {
                printf("Enter the number: ");
                scanf("%d", &value);
                root = insert(root, value);
            }
            break;
        case 2:
            if (root == NULL)
                printf("Tree is empty\n");
            else
            {
                printf("INORDER\n");
                inorder(root);
                printf("\nPREORDER\n");
                preorder(root);
                printf("\nPOSTORDER\n");
                postorder(root);
                printf("\n");
            }
            break;
        case 3:
            printf("exiting ...");
            return 0;
        default:
            printf("INVALID CHOICE\n");
        }
    }
    return 0;
}
```