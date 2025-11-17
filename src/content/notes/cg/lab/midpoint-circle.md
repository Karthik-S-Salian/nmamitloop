---
title: Program 2
description: Mid-Point Circle Algorithm
branches: ["cs"]
subject : cg
sem: 7
type: program
---

## Question
Program to implement Mid Point Circle Algorithm. The radius should be
specified by the user.

## Code 
```c
#include<GL/glut.h>
#include<stdio.h>

int r;

void write(float x,float y){
    glColor3f(0,0,0);
    glPointSize(5);
    glBegin(GL_POINTS);
    glVertex2f(x,y);
    glEnd();
    glFlush();
}

void display(){
    float x=0,y=r;
    float d=5.0/4.0 - r;

    while(y>x){
        if(d<0){
            d +=2.0*x+3.0;
        }else{
            d+=2.0*(x-y) + 5.0;
            y--;
        }
        x++;

        write(x,y);
        write(y,x);
        write(-x,y);
        write(x,-y);
        write(y,-x);
        write(-y,x);
        write(-x,-y);
        write(-y,-x);
    }
}

int main(int argc, char *argv[]){
    printf("Enter r: ");
    scanf("%d",&r);

    glutInit(&argc,argv);
    glutInitWindowSize(500,500);
    glutCreateWindow("test");

    glClearColor(1,1,1,1);
    glClear(GL_COLOR_BUFFER_BIT);
    gluOrtho2D(-900,900,-900,900);

    glutDisplayFunc(display);
    glutMainLoop();
    return 0;
}
```
