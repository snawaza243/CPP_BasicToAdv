#include <conio.h>
#include <stdio.h>


int main() {
  int a = 0, b = 1; /* Here a=first number & b=second number*/
  int i, n, no;     /* Here no=last number term & n=next*/

  printf("Enter term no: ");
  scanf("%d", &no);

  for (i = 0; i < no; i++)
    if (i <= 1) {
      n = i;
    } else {
      n = a + b;
      a = b;
      b = n;
    }
  printf("%d", n);
  getch();
}
