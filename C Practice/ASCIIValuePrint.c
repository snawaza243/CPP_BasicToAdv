// Display the ascii value of all the characters.

#include <stdio.h>
int main() {
  int k; // variable declaration
  for (k = 0; k <= 255; k++) {
    printf("\nThe ascii value of %c is %d", k, k);
  }
  return 0;
}
