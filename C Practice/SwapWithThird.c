// C program to swap two numbers with third variable

#include<stdio.h>
int main()
{
    double a,b,c;

    printf("Enter number1: ");
    scanf("%lf",&a);

    printf("Enter number2: ");
    scanf("%lf",&b);

    printf("\nBefor swap \n%lf \n%.2lf",a,b);
    c = a;
    a = b;
    b = c;

    printf("\nAfter swap \n%lf \n%.2lf",a,b);
    return 0;


}