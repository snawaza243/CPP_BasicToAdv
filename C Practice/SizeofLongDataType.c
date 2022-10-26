// C program to demonstrate the working of keyword long

#include<stdio.h>
int main()
{
    int a;;
    long int b;
    long long int c;
    double d;
    long double e;

    printf("Size of int \t\t : %lu",sizeof(a));
    printf("\nSize of long int \t : %lu",sizeof(b));
    printf("\nSize of long long int \t : %lu",sizeof(c));
    printf("\nSize of double \t\t : %lu",sizeof(d));
    printf("\nSize of long double \t : %lu",sizeof(e));

    return 0;
}
