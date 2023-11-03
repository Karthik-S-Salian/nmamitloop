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
#include<stdio.h>
#include<stdlib.h>

struct Node{
    struct Node * next_node;
    struct Node * prvs_node;
    int value;
};

typedef struct Node * NODE;

NODE get_node(int value){
    NODE node =  (NODE)malloc(sizeof(struct Node));
    node->value = value;
    return node;
}

NODE create_cdll(){
    NODE head = get_node(0);
    head->next_node = head;
    head->prvs_node = head;
    return head;
}

void insert_front(NODE head,int value){
    NODE new_node =  get_node(value);
    new_node->next_node = head->next_node;
    new_node->next_node->prvs_node = new_node;
    head->next_node = new_node;
    new_node->prvs_node = head;
    head->value++;
    printf("successfully inserted %d\n",value);
}

void insert_rear(NODE head,int value){
    NODE new_node =  get_node(value);
    new_node->next_node = head;
    new_node->prvs_node = head->prvs_node;
    new_node->prvs_node->next_node = new_node;
    head->prvs_node = new_node;
    head->value++;
    printf("successfully inserted %d\n",value);
}

void insert_at(NODE head,int value, int position){
    if(position>head->value+1 || position<1)
        printf("invalid position : expected in range [1,%d]\n",head->value+1);
    else{
        NODE curr_node = head;
        int i=1;
        while(i++<position)
            curr_node = curr_node->next_node;
        NODE new_node =  get_node(value);
        new_node->next_node = curr_node->next_node;
        new_node->next_node->prvs_node = new_node;
        curr_node->next_node = new_node;
        new_node->prvs_node = curr_node;
        head->value++;
        printf("successfully inserted %d\n",value);
    }
}

void delete_front(NODE head){
    if (head->value==0)
        printf("csll is empty\n");
    else{
        NODE first_node  =  head->next_node;
        head->next_node = first_node->next_node;
        head->next_node->prvs_node = head;
        head->value--;
        printf("deleted node %d\n", first_node->value);
        free(first_node);
    }
}

void delete_rear(NODE head){
    if (head->value==0)
        printf("csll is empty\n");
    else{
        NODE last_node  =  head->prvs_node;
        head->prvs_node = last_node->prvs_node;
        head->prvs_node->next_node = head;
        head->value--;
        printf("deleted node %d\n", last_node->value);
        free(last_node);
    }
}

void delete_at(NODE head,int position){
    if(head->value==0)
        printf("csll is empty\n");
    else if(position>head->value || position<1)
        printf("invalid position : expected in range [1,%d]\n",head->value);
    else{
        NODE curr_node = head->next_node;
        int i=1;
        while(i++<position)
            curr_node = curr_node->next_node;
        curr_node->prvs_node->next_node = curr_node->next_node;
        curr_node->next_node->prvs_node = curr_node->prvs_node;
        head->value--;
        printf("deleted node %d\n", curr_node->value);
        free(curr_node);
    }
}

void display(NODE head){
    if (head->value == 0)
        printf("csll is empty");
    for (NODE crr = head->next_node; crr != head; crr = crr->next_node)
        printf("%d  ", crr->value);
    printf("\nno of nodes = %d \n", head->value);
}

int main(){
    printf("cdll\n");
    printf("1: insert front\n");
    printf("2: insert rear\n");
    printf("3: delete front \n");
    printf("4: delete rear\n");
    printf("5: insert at\n");
    printf("6: delete at\n");
    printf("7: display \n");
    printf("8: quit program\n");

    int choice, value, position;
    NODE head = create_cdll();
    while (1){
        printf("Enter the choice: ");
        scanf("%d", &choice);
        switch (choice){
        case 1:
            printf("Enter the element to be inserted: ");
            scanf("%d", &value);
            insert_front(head, value);
            break;
        case 2:
            printf("Enter the element to be inserted: ");
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
            printf("Enter the element to be inserted: ");
            scanf("%d", &value);
            printf("Enter the position: ");
            scanf("%d", &position);
            insert_at(head, value, position);
            break;
        case 6:
            printf("Enter the position: ");
            scanf("%d", &position);
            delete_at(head, position);
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

