---
title: Program 8
description: Mouse & Keyboard Interactions
branches: ["cs"]
subject : cg
sem: 7
type: program
---

## Question
Program to create a random object and to implement the suggested mouse and
keyboard interactions through OpenGL function.

## Code 
```c
#include <GL/glut.h>
#include <stdio.h>

void drawTriangle(int x, int y)
{
    glColor3f(1, 0, 1);
    glBegin(GL_TRIANGLES);
    glVertex2f(x, y + 10);
    glVertex2f(x - 10, y);
    glVertex2f(x + 10, y);
    glEnd();
    glFlush();
}

void drawSquare(int x, int y)
{
    glColor3f(0, 1, 1);
    glBegin(GL_POLYGON);
    glVertex2f(x - 10, y - 10);
    glVertex2f(x - 10, y + 10);
    glVertex2f(x + 10, y + 10);
    glVertex2f(x + 10, y - 10);
    glEnd();
    glFlush();
}

void drawPoint(int x, int y)
{
    glColor3f(1, 0, 0);
    glPointSize(10);
    glBegin(GL_POINTS);
    glVertex2f(x, y);
    glEnd();
    glFlush();
}

void display()
{
    glFlush();
}

void mouse(int button, int state, int x, int y)
{
    if (button == GLUT_LEFT_BUTTON && state == GLUT_DOWN)
        drawPoint(x, y);
}

void keyboard(char key, int x, int y)
{
    if (key == 't' || key == 'T')
        drawTriangle(x, y);
    if (key == 's' || key == 'S')
        drawSquare(x, y);
    if (key == 'p' || key == 'P')
        drawPoint(x, y);
}

int main(int argc, char *argv[])
{
    glutInit(&argc, argv);
    glutInitWindowSize(500, 500);
    glutCreateWindow("Mouse and Keyboard Operations");

    glClearColor(1, 1, 1, 1);
    glClear(GL_COLOR_BUFFER_BIT);
    gluOrtho2D(0, 500, 500, 0);

    glutDisplayFunc(display);
    glutMouseFunc(mouse);
    glutKeyboardFunc(keyboard);
    glutMainLoop();
    return 0;
}
```