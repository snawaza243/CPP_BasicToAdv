#include<string.h>
#include<stdio.h>
#include<conio.h>

// Find sum of ASCII number of string character

int main()
{
    char intputtext[1000];
    int k;

    printf("Enter your string: ");
    scanf("%s",&intputtext);
    int inputsize = strlen(intputtext);

	for (k = 0; intputtext[k] != '\0'; ++k);

	printf("Length of Str is %d", k);

    printf("\n");
    
    char *string = intputtext; 
    size_t i = 0;
    int sum=0;
    for (i=0; i < inputsize; i++)
    {
        printf("%C \t %d\n", string[i], string[i]);         
        sum= sum+string[i];

    }

    printf("\nSum of above number : %d",sum);

}