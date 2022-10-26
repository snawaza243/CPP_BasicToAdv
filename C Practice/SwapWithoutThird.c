// C program to swap two numbers with whird variable

#include<stdio.h>
int main()
{
    double a,b;

    printf("Enter number1: ");
    scanf("%lf",&a);

    printf("Enter number2: ");
    scanf("%lf",&b);

    printf("\nBefor swap \n%.2lf \n%.2lf",a,b);

    a = a-b;
    b = a+b;
    a = b-a;

    printf("\nAfter swap \n%.2lf \n%.2lf",a,b);
    return 0;


}