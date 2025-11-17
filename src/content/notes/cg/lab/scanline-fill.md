---
title: Program 4
description: Scan-Line Fill Algorithm Algorithm
branches: ["cs"]
subject : cg
sem: 7
type: program
---

## Question
Program to fill any given polygon using scan-line area filling algorithm. vertices
for the polygon should be specified by the user.

## Code 
```c
#include <GL/glut.h>
#include <stdio.h>
#include<unistd.h>

float x1 = 0, y1 = 0, x2 = 0, y2 = 10, x3 = 10, y3 = 10, x4 = 10, y4 = 0;

void edgedetect(float x1, float y1, float x2, float y2, int *le, int *re)
{
    float mx, x, temp;
    if (y2 < y1)
    {
        temp = y1;
        y1 = y2;
        y2 = temp;

        temp = x1;
        x1 = x2;
        x2 = temp;
    }

    if (y1 == y2)
    {
        mx = x2 - x1;
    }
    else
    {
        mx = (x2 - x1) / (y2 - y1);
    }

    x = x1;
    for (int i = y1; i <= y2; i++)
    {
        if (x < (float)le[i])
            le[i] = (int)x;
        if (x > (float)re[i])
            re[i] = (int)x;
        x += mx;
    }
}

void draw_pixel(int x, int y)
{
    glColor3f(0, 1, 0);
    glPointSize(5);
    glBegin(GL_POINTS);
    glVertex2f(x, y);
    glEnd();
    glFlush();
}

void scanline()
{
    int le[500], re[500];

    for (int i = 0; i < 500; i++)
    {
        le[i] = 500;
        re[i] = 0;
    }

    edgedetect(x1, y1, x2, y2, le, re);
    edgedetect(x2, y2, x3, y3, le, re);
    edgedetect(x3, y3, x4, y4, le, re);
    edgedetect(x4, y4, x1, y1, le, re);

    for (int y = 0; y < 500; y++)
    {
        for (int x = le[y]; x <= re[y]; x++)
        {
            draw_pixel(x, y);
            nanosleep(1000);
        }
    }
}

void display()
{

    glColor3f(0, 0, 1);
    glBegin(GL_LINE_LOOP);
    glVertex2f(x1, y1);
    glVertex2f(x2, y2);
    glVertex2f(x3, y3);
    glVertex2f(x4, y4);
    glEnd();

    scanline();
}
int main(int argc, char *argv[])
{
    glutInit(&argc, argv);
    glutInitWindowSize(500, 500);
    glutCreateWindow("hello");

    glClearColor(1, 1, 1, 1);
    glClear(GL_COLOR_BUFFER_BIT);
    gluOrtho2D(0, 50, 0, 50);

    glutDisplayFunc(display);
    glutMainLoop();
}
```