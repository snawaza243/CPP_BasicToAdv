// C program to add two integers entered by the User
// Using function

#include<stdio.h>

int addNum(int num1, int num2){
    int sum=num1+num2;
    return sum;

}
int main()
{
    int an1;
    int an2;
    printf("Enter 1st number: ");
    scanf("%d",&an1);

    printf("Enter 2nd number: ");
    scanf("%d",&an2);

    int adding=addNum(an1, an2);
    printf("Sum of two number will be %d",adding);
    return 0;
    
}

