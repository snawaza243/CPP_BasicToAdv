#include <conio.h>
#include <stdio.h>

int main() {
  int a[10][10], i, j, N, nonzero = 0;

  printf("Enter the size of square matrix (max 10x10): ", N);
  scanf("%d", &N);

  printf("Enter the elements of %dx%d matrix:\n", N, N);

  for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++)

    {
      printf("Enter elements of a[%d[%d]: ", i, j);
      scanf("%d", &a[i][j]);
    }
  }
  for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) {
      if (a[i][j] != 0)
        nonzero++;
    }
  }

  printf("\nNo of non-zero emements: %d", nonzero);

  getch();
}
