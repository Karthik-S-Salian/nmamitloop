---
title: Astro in brief
description: Find out what makes Astro awesome!
branches: ["cs","is"]
subject : oops
sem: 3
type: program
---


## Heapsort

```c
#include<stdio.h>

void swap(int * a,int * b){
  int temp = *a;
  *a = *b;
  *b = temp;
}

void heapify(int arr[],int n,int i){
  int largest = i;
  int left = 2*i+1;
  int right = 2*i+2;
  
  if(left<n && arr[left]>arr[largest])
    largest = left;

  if(right <n && arr[right]>arr[largest])
    largest = right;
  
  if(largest!=i){
    swap(arr+largest,arr+i);
    heapify(arr,n,largest);
  }
}

void heapsort(int arr[],int n){
  for(int i= n/2-1;i>=0;i--)
    heapify(arr,n,i);

  for(int i=n-1;i>0;i--){
    swap(arr,arr+i);
    heapify(arr,i,0);
  }
}

int main(){
  int arr[] = {1, 12, 9, 5, 6, 10};
    int n = sizeof(arr) / sizeof(arr[0]);
  
    heapsort(arr, n);
  
    printf("Sorted array is \n");
    for(int i=0;i<n;i++){
      printf("%d\t",arr[i]);
    }
}
```