---
title: Program 1
description: Mid-Point Line Algorithm
branches: ["cs"]
subject : cg
sem: 7
type: program
---

## Question
Program to implement Mid Point Line Algorithm. The line coordinates should
be specified by the user.

## Code 
```c
#include<GL/glut.h>
#include<stdio.h>

int x0,y0,x1,y1;

void write(int x,int y){
    glColor3f(0,0,0);
    glPointSize(5);
    glBegin(GL_POINTS);
    glVertex2f(x,y);
    glEnd();
    glFlush();
}

void display(){
    float dx = x1-x0,dy = y1-y0;
    float d = 2*dy - dx;
    float incrE = dy;
    float incrNE = dy-dx;
    int x=x0,y=y0;

    while (x<x1){
        if(d<=0){
            d  = d+2*incrE;
        }else{
            d  = d+2*incrNE;
            y+=1;
        }
        x+=1;
        write(x,y);
    }
}

int main(int pargc, char *argv[]){
    
    printf("Enter x0: ");
    scanf("%d",&x0);
    printf("Enter y0: ");
    scanf("%d",&y0);
    printf("Enter x1: ");
    scanf("%d",&x1);
    printf("Enter y1: ");
    scanf("%d",&y1);

    
    glutInit(&pargc, argv);

    glutInitWindowSize(500,500);
    glutCreateWindow("test windows");

    glClearColor(1,1,1,1);
    glClear(GL_COLOR_BUFFER_BIT);
    gluOrtho2D(0,500,0,500);

    glutDisplayFunc(display);
    glutMainLoop();
    return 0;
}
```