#include <stdio.h>
int main() {
  {
    int b = 6;
    int c = 8;
    printf("Value\bof b is:%d", b);
    printf("\nValue of c is:%d", c);
  }
  {
    int b = 10;
    int c = -10;
    printf("n\nValue of b is:%u", b);
    printf("\nValue of c is:%u", c);
  }
  {
    int a = 0100;
    printf("\nOctal value of a is: %o", a);
    printf("\nInteger value of a is: %d", a);
  }
  {
    int y = 0xA;
    printf("\nHexadecimal value of y is: %x", y);
    printf("\nHexadecimal value of y is: %X", y);
    printf("\nInteger value of y is: %d", y);
  }
  {
    float y = 3.4;
    printf("\nFloating point value of y is: %f", y);
  }
  {
    float y = 3;
    printf("\nExponential value of y is: %e", y);
    printf("\nExponential value of y is: %E", y);
  }
  {
    float y = 3.8;
    printf("\nFloat value of y is: %g", y);
  }
  {
    int y = 5;
    printf("\nAddress value of y in hexadecimal form is: %p", &y);
  }
  {
    char a = 'c';
    printf("\nValue of a is: %c\n", a);
  }
  { printf("%s", "javaTpoint\n"); }
  {
    int x = 900;
    printf("%8d", x);
    printf("\n%-8d", x);
  }
  {
    int x = 12;
    printf("\n%08d", x);
  }
  {
    float x = 12.2;
    printf("\n%.2f", x);
    return 0;
  }
}
