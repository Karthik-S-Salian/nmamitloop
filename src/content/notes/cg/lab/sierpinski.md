---
title: Program 5
description: Sierpinski Gasket
branches: ["cs"]
subject : cg
sem: 7
type: program
---

## Question
.Program to recursively subdivide a triangle to form 2D Sierpinski gasket. The
number of recursive steps is to be specified by the user

## Code 
```c
#include <GL/glut.h>
#include <stdio.h>

int n;

void triangle(float *a, float *b, float *c)
{
    glColor3f(1, 0, 0);
    glBegin(GL_TRIANGLES);
    glVertex2f(a[0], a[1]);
    glVertex2f(b[0], b[1]);
    glVertex2f(c[0], c[1]);
    glEnd();
    glFlush();
}

void draw_traingle(float *a, float *b, float *c, int k)
{
    if (k > 0)
    {
        float ab[2], ac[2], bc[2];

        ab[0] = (a[0] + b[0]) / 2;
        ab[1] = (a[1] + b[1]) / 2;
        ac[0] = (a[0] + c[0]) / 2;
        ac[1] = (a[1] + c[1]) / 2;
        bc[0] = (b[0] + c[0]) / 2;
        bc[1] = (b[1] + c[1]) / 2;

        draw_traingle(a, ab, ac, k - 1);
        draw_traingle(b, bc, ab, k - 1);
        draw_traingle(c, ac, bc, k - 1);
    }
    else
    {
        triangle(a, b, c);
    }
}

void display()
{
    float a[] = {1, 1};
    float b[] = {7, 1};
    float c[] = {4, 5};

    draw_traingle(a, b, c, n);
}
int main(int argc, char *argv[])
{

    printf("enter n: ");
    scanf("%d", &n);

    glutInit(&argc, argv);
    glutInitWindowSize(500, 500);
    glutCreateWindow("hello world");

    glClearColor(1, 1, 1, 1);
    glClear(GL_COLOR_BUFFER_BIT);
    gluOrtho2D(0, 10, 0, 10);

    glutDisplayFunc(display);
    glutMainLoop();
}
```