// Check whether a character is a vowel or consonant
#include <stdint.h>
int main()
{
    char letter;

    printf("Enter a word to check vowel or consonant: ");
    scanf("%c", &letter);

    int smallchar = ((letter == 'a') || (letter == 'e') || (letter == 'i') || (letter == 'o') || (letter == 'u'));
    int capitalchar = ((letter == 'A') || (letter == 'E') || (letter == 'I') || (letter == 'O') || (letter == 'U'));

    if (smallchar || capitalchar)
    {
        printf("Your enterd character \"%c\" is a vowel.", letter);
    }

    else
    {
        printf("Your enterd character \"%c\" is a consonant.", letter);
    }

    return 0;
}