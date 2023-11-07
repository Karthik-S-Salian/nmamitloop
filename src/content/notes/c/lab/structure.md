---
title: Astro in brief
description: Find out what makes Astro awesome!
branches: ["cs","is"]
subject : oops
sem: 3
type: program
---

```c
#include<stdio.h>
#include<stdlib.h>

#define MAX 10

struct Student
{
    int rollNo;
    char name[25];
    int semester;
    int marks[3];
};

void create_student(struct Student * students,int no_student){
    struct Student * currStudent = students;

    for(int i=0;i<no_student;i++){
        printf("Enter the student %d detail\n",i+1);
        printf("Enter the roll no: ");
        scanf("%d",&currStudent->rollNo);
        printf("Enter the name: ");
        scanf("%s",currStudent->name);
        printf("Enter the semester: ");
        scanf("%d",&currStudent->semester);
        printf("Enter marks in 3 subjects: ");
        for(int j=0;j<3;j++)
            scanf("%d",&currStudent->marks[j]);
        currStudent++;
        printf("\n");
    }
}

void display_student(struct Student * students,int no_student){
    struct Student * currStudent = students;

    for(int i=0;i<no_student;i++){
        printf("student %d detail\n",i+1);
        printf("roll no: %d\n",currStudent->rollNo);
        printf("name: %s\n",currStudent->name);
        printf("semester: %d\n",currStudent->semester);
        printf("marks in 3 subjects: ");
        for(int j=0;j<3;j++)
            printf("%d ",currStudent->marks[j]);
        currStudent++;
        printf("\n");
    }
}

void studentwise_totalmarks(struct Student * students,int no_student){
    struct Student * currStudent = students;

    for(int i=0;i<no_student;i++){
        int total =0;
        for(int j=0;j<3;j++)
            total+=currStudent->marks[j];
        printf("total mark of student %d is %d\n",i+1,total);
    }
}

void subjectwise_totalmarks(struct Student * students,int no_student){
    struct Student * currStudent = students;
    int total[] = {0,0,0};
    for(int i=0;i<no_student;i++){
        for(int j=0;j<3;j++)
            total[j]+=currStudent->marks[j];
    }

    for(int j=0;j<3;j++)
        printf("total mark in subject %d is %d\n",j+1,total[j]);
}

int main(){
    int size;
    printf("Enter the no of students: ");
    scanf("%d",&size);

    struct Student * students = malloc(size*sizeof(struct Student));
    if(students==NULL){
        printf("Could not allocate memory BETTER LUCK NEXT TIME 😎\n");
        return 0;
    }

    create_student(students,size);
    display_student(students,size);
    studentwise_totalmarks(students,size);
    subjectwise_totalmarks(students,size);
}


```