#include<string.h>
#include<stdio.h>
#include<conio.h>

int main()
{

    char *string = "hello world"; /* This 11 chars long, excluding the 0-terminator. */
    size_t i = 0;
    for (; i < 11; i++)
    {
        printf("%c\n", string[i]); /* Print each character of the string. */
    }

    size_t length = strlen(string);
    for (; i < length; i++)
    {
        printf("%c\n", string[i]); /* Print each character of the string. */
    }

    while (string[i] != '\0')
    {                              /* Stop looping when we reach the null-character. */
        printf("%c\n", string[i]); /* Print each character of the string. */
        i++;
    }
}