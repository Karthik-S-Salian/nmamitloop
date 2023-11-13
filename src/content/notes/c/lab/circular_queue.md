---
title: Astro in brief
description: Find out what makes Astro awesome!
branches: ["cs","is"]
subject : oops
sem: 3
type: program
---
<pre>
Design, Develop and Implement a menu driven Program in C for the following operations on Circular QUEUE of Characters (Array Implementation of Queue with maximum size MAX)
1. Insert an Element on to Circular QUEUE
2. Delete an Element from Circular QUEUE
3. Demonstrate Overflow and Underflow situations on Circular QUEUE
4. Display the status of Circular QUEUE
5. Exit
Support the program with appropriate functions for each of the above operations
</pre>

```c
#include<stdio.h>
#define MAX 10

int front=-1,rear=-1;
char items[MAX];

void insert(char ele){
	if(front==(rear+1)%MAX){
		printf("circular queue is full\n");
		return;
	}
	rear = (rear+1)%MAX;
	if(front==-1)
		front=0;
	items[rear]=ele;
	printf("%c is successfully inserted\n",ele);
}

void delete(){
	if(front==-1){
		printf("Circular Queue is empty\n");
		return;
	}
	char val = items[front];
	if(front==rear)
		front=rear=-1;
	else
		front=(front+1)%MAX;
	printf("%c is successfully deleted\n",val);

}

void display(){
	if(front==-1){
		printf("Circular Queue is empty\n");
		return;
	}
	for(int i=front;i!=rear;i=(i+1)%MAX)
		printf(" -> %c ",items[i]);	
	printf(" -> %c ->\n",items[rear]);
}

int main(){
	printf("CIRCULAR QUEUE\n");
	char choice;
	char ele;

	printf("enter i for insertion\n");
	printf("enter d for deletion\n");
	printf("enter p for display\n");
	printf("enter e for exiting\n");

	while(1){
		printf("front = %d rear = %d",front,rear);
		printf("Enter the choice: ");
		scanf(" %c",&choice);

		switch(choice){
			case 'i':
				printf("Enter the element: ");
				scanf(" %c",&ele);
				insert(ele);
				break;
			case 'd':
				delete();
				break;
			case 'p':
				display();
				break;
			case 'e':
				printf("exiting...\n");
				return 0;
			default:
				printf("INVALID CHOICE\n");
		}

	}
}
```