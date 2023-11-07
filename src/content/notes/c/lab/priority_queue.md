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

#define MAX 5

int front = 0, rear = -1, items[MAX];

void insert(int ele){
	if(rear+1==MAX){
		printf("queue is full\n");
		return;
	}
	for(int i=++rear;i>=front;i--){
		if((i==front) || (items[i-1]<ele)){
			items[i] = ele;
			break;
		}
		items[i] = items[i-1];
	}
	printf("%d is successfully inserted\n", ele);
}

void delete(int ele)
{
	int found = 0;
	for (int i = front; i <= rear; i++)
	{
        if (found){
            items[i] = items[i + 1];
            continue;
        }
		if (items[i] == ele)
		{
			found = 1;
			rear--;
		}
	}
	if (found)
		printf("%d is successfully deleted\n", ele);
	else
		printf("%d is not found", ele);
}

void display()
{
	if (front > rear)
	{
		printf("priority queue is empty\n");
		return;
	}
	for (int i = front; i < rear; i++)
		printf("%d -> ", items[i]);
	printf("%d\n", items[rear]);
}

int main()
{
	printf("priority queue\n");
	int value, choice;
	printf("1: insert element\n");
	printf("2: delete element\n");
	printf("3: display stack\n");
	printf("4: quit program\n");
	while (1)
	{
		printf("Enter the choice: ");
		scanf("%d", &choice);

		switch (choice)
		{
		case 1:
			printf("Enter the element to insert: ");
			scanf("%d", &value);
			insert(value);
			break;
		case 2:
			printf("Enter the element to be deleted: ");
			scanf("%d", &value);
			delete (value);
			break;
		case 3:
			display();
			break;
		case 4:
			printf("exiting...");
			return 0;
		default:
			printf("INVALID CHOICE\n");
		}
	}
	return 0;
}

```