// Find the largest number among three
#include <stdio.h>
int main()
{
    int n1, n2, n3;

    printf("Enter 1st number: ");
    scanf("%d", &n1);

    printf("Enter 2nd number: ");
    scanf("%d", &n2);

    printf("Enter 3rd number: ");
    scanf("%d", &n3);

    if (n1 > n2 && n3)
    {
        printf("Enterd number %d is greatrer than %d and %d.", n1, n2, n3);
    }

    else if (n2 > n1 && n3)
    {
        printf("Enterd num %d is greatrer than %d and %d.", n2, n1, n3);
    }
    
    else{
        printf("Enterd number %d is greater than %d and %d.",n3, n1, n2);

    }

    return 0;
}