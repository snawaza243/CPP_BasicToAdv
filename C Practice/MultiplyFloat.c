// C program to multiply two floating-point numbers

#include<stdio.h>
int main(){
    float a,b;
    printf("Enter first float number: ");
    scanf("%f",&a);

    printf("Enter second float number: ");
    scanf("%f",&b);

    float mult= a*b;

    printf("Multiplication will be %f",mult);

    return 0;

}