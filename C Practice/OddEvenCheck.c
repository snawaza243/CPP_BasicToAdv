// Check whether a number is even or odd

#include<stdio.h>
int main(){
    int num1;

    printf("Enter a number to check even or odd: ");
    scanf("%d",&num1);

    if (num1%2==0)
    {
        printf("Enter number %d is an EVEN number.",num1);
    }

    else
        printf("Enter number %d is an ODD number.",num1);

    getchar;
    return 0;
    
}