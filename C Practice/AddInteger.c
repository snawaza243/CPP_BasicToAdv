// C program to add two integers entered by the User
#include<stdio.h>
int main()
{
    int num1;
    int num2;
    printf("Enter 1st number: ");
    scanf("%d",&num1);

    printf("Enter 2nd number: ");
    scanf("%d",&num2);

    int sum=num1+num2;
    printf("Sum of two number will be %d",sum);
    return num1+num2;
}