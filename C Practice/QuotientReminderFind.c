// C program to find quotient and remainder of Two Integers

#include<stdio.h>
int main ()
{
    int a;
    int b;
    printf("Enter first number: ");
    scanf("%d",&a);

    printf("Enter second number: ");
    scanf("%d",&b);

    int quotient=a/b;
    int reminder=a%b;

    printf("Quotient will be %d and \n Reminder will be %d ",quotient, reminder);

    return 0;

}