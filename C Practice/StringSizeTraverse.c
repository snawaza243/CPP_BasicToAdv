#include <conio.h>
#include <stdio.h>
#include <string.h>

// int getSize(char *s) {
//   char *t; // first copy the pointer to not change the original
//   int size = 0;

//   for (t = s; s != '\0'; t++) {
//     size++;
//   }
//   return size;
// }

int main(int argc) {
  char *text = "This is the future";
  char text2[] = "This is the future";

  int s_text = sizeof(text);   // returns size of pointer. 8 in 64-bit machine
  int s_text2 = sizeof(text2); // returns 18. the seeked size.

  printf("First string: %s, size: %d\nSecond string: %s, size: %d\n", text,
         s_text, text2, s_text2);

  return 0;
}