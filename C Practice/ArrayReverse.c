#include <stdio.h>
int main() {
  int v1[3], v2[3], v3[3], i, j;

  for (i = 0; i < 3; i++) {
    printf("Type a number : \n");
    scanf("%d", &v1[i]);
  }

  for (i = 0; i < 3; i++) {
    printf("Type a number : \n");
    scanf("%d", &v2[i]);
  }

  for (i = 0; i < 3; i++) {
    v3[i] = v1[i] + v2[i];
    scanf("%d", &v3[i]);

    printf("Total : %d ", &v3[i]);
  }
}
