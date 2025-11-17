---
title: Program 7
description: Rotate an object about a fixed point
branches: ["cs"]
subject : cg
sem: 7
type: program
---

## Question
Program to create a random figure and rotate it about a given fixed point using
transformation matrices. Make provision for the user to enter pivot point for the
rotation

## Code 
```c
#include <GL/glut.h>
#include <math.h>
#include <stdio.h>


float house[][2] = {
        

                        {150,240},

    {100,200},                         {200,200},

                {140,150},{160,150},

    {100,100}  ,{140,100},{160,100},   {200,100}
};

float theta, h = 100, k = 100;

void drawhouse(){
    //roof
    glColor3f(1.0, 0.0, 0.0);
    glBegin(GL_LINE_LOOP);
    glVertex2f(house[0][0], house[0][1]);
    glVertex2f(house[1][0], house[1][1]);
    glVertex2f(house[2][0], house[2][1]);
    glEnd();

    //main cube 
    glBegin(GL_LINE_LOOP);
    glVertex2f(house[1][0], house[1][1]);
    glVertex2f(house[2][0], house[2][1]);
    glVertex2f(house[8][0], house[8][1]);
    glVertex2f(house[5][0], house[5][1]);
    glEnd();

    //door
    glBegin(GL_LINE_LOOP);
    glVertex2f(house[3][0], house[3][1]);
    glVertex2f(house[4][0], house[4][1]);
    glVertex2f(house[7][0], house[7][1]);
    glVertex2f(house[6][0], house[6][1]);
    glEnd();
}

void display()
{
    float m[16];
    for (int i=0;i<16;i++)
        m[i]=0;
    
    m[0] = cos(theta);
    m[1] = sin(theta);
    m[4] = -sin(theta);
    m[5] = cos(theta);
    m[12] = -h * (cos(theta) - 1) + k*sin(theta);
    m[13] = -k*(cos(theta)-1)  - h*sin(theta);
    m[10]=1;
    m[15] = 1;

    drawhouse();
    glPushMatrix();
    glMultMatrixf(m);
    drawhouse();
    glPopMatrix();
    glFlush();
}

int main(int argc, char *argv[])
{

    printf("enter thetha: ");
    scanf("%f", &theta);
    theta = theta*3.141/180;

    glutInit(&argc, argv);
    glutInitWindowSize(500, 500);
    glutCreateWindow("hello");

    glClearColor(1, 1, 1, 1);
    glClear(GL_COLOR_BUFFER_BIT);
    gluOrtho2D(0, 500, 0, 500);

    glutDisplayFunc(display);
    glutMainLoop();
}
```