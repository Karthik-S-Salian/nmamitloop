---
title: Astro in brief
description: Find out what makes Astro awesome!
branches: ["cs","is"]
subject : oops
sem: 3
type: program
---

Design, Develop and Implement a Program in C for converting an Infix Expression to Postfix Expression. Program should support for both parenthesizedand free parenthesized expressions with the operators: +, -, *, /, %(Remainder), ^(Power) and alphanumeric operands.

```c
#include<stdio.h>

#define MAX 20

int F(char symbol){
	switch(symbol){
		case '+':
		case '-': return 2;
		case '*':
		case '/': return 4;
		case '$':
		case '^': return 5;
		case '(': return 0;
		case '#': return -1;
		default: return 8;
	}
}

int G(char symbol){
	switch(symbol){
		case '+':
		case '-': return 1;
		case '*':
		case '/': return 3;
		case '$':
		case '^': return 6;
		case '(': return 9;
		case ')': return 0;
		default: return 7;
	}
}


void infixToPostfix(char infix[]){
	int top=0,j=0;
    char s[MAX],postfix[MAX],symbol;
    s[top] ='#';

    for(int i=0;infix[i]!='\0';i++){
        symbol = infix[i];
        while (F(s[top])>G(s[top]))
            postfix[j++] = s[top--];
        if(F(s[top])!=G(symbol))
            s[++top] = symbol;
        else
            top--;
    }

    while(s[top]!='#')
        postfix[j++] = s[top--];
    postfix[j] = '\0';
    puts(postfix);
}

int main(){
    printf("infix to postfix\n");
    char infix[MAX];
    printf("Enter the infix expression\n");
    gets(infix);
    infixToPostfix(infix);
    return 0;
}
```