#include<stdio.h>  
   
  
void main()  
{  
    int a[100], b[100], i, j,N;  
  
  	printf("Enter number of array :",N);
  	scanf("%d",&N);
  	
    printf("Enter %d integer numbers\n", N);  
    for(i = 0; i < N; i++)  
        scanf("%d", &a[i]);  
  
    printf("\n\nCopying elements from array a to b, in reverse order\n");  
    for(i = N - 1, j = 0; i >= 0; i--, j++)  
        b[j] = a[i];  
  
    printf("\nOriginal(a[%d])\nCopy(b[%d])\n", N, N);  
    for(i = 0; i < N; i++)  
        printf("%4d\t\t-->%6d\n", a[i], b[i]);  
  
    return 0;  
}  
