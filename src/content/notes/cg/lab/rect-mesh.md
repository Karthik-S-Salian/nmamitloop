---
title: Program 6
description: Rectangular Mesh
branches: ["cs"]
subject : cg
sem: 7
type: program
---

## Question
Program to display a set of values {f(i, j)} as a rectangular mesh. Number of
rows and columns for the mesh generation must be taken from the user.

## Code 
```c
#include <GL/glut.h>

int maxx = 20, maxy = 25, dx = 10, dy = 15, x0 = 50, y0 = 50;

void display()
{
    int x, y;
    for (int i = 0; i < maxx; i++)
    {
        for (int j = 0; j < maxy; j++)
        {
            x = x0 + i * dx;
            y = y0 + j * dy;
            glColor3f(0, 0, 0);
            glBegin(GL_LINE_LOOP);

            glVertex2f(x, y);
            glVertex2f(x, y + dy);
            glVertex2f(x + dx, y + dy);
            glVertex2f(x + dx, y);

            glEnd();
            glFlush();
        }
    }
}

int main(int argc, char *argv[])
{
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