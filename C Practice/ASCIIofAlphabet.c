// C program to find ASCII value of a character entered by the user
#include<stdio.h>
int main()
    {
    char a1=97;
    char a2=65;

    printf("\tASCII value of small alphabet\n");
    while (a1<=122)
    {
        printf("THe ASCII value of %c is %d\n",a1,a1);
        a1++;
        
    }


    printf("\tASCII value of capital alphabet\n");
    while (a2<=90)
    {
        printf("THe ASCII value of %c is %d\n",a2,a2);
        a2++;
    }    
}