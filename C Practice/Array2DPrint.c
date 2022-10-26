#include <conio.h>
#include <stdio.h>

int main() {
  int a[10][10], i, j, N, nonzero = 0;
  int sum = 0;
  printf("Enter the size of sqare matrix (max 10x10): ", N);
  scanf("%d", &N);

  printf("Enter the elements of %dx%d matrix:\n", N, N);

  for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++)

    {
      printf("Enter elements of a[%d[%d]: ", i, j);
      scanf("%d", &a[i][j]);
    }
  }

  printf("\Original elements are:\n");
  for (i = 0; i < N; i++)

    for (j = 0; j < N; j++) {
      printf("%d ", a[i][j]);
      if (j == N - 1) {
        printf("\n\n");
      }
    }

  int length = sizeof(a) / sizeof(a[0][0]);
  for (i = length - 1; i >= 0; i--)
    for (j = length - 1; j >= 0; j--) {
      printf("%d ", a[i][j]);
    }

  getch();
}
