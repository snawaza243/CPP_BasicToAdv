#include <stdio.h>

int main() {
  int a[10][10], i, nonzero = 0, zero = 0, odd, even, N;

  printf("Enter the size of square matrix (max 10x10): \n", N);
  scanf("%d", &N);

  for (i = 0; i < N; i++)
    scanf("%d", &a[i]);

  for (i = 0; i < N; i++) {
    if (a[i] == 0) {
      zero++;
    } else if (a[i] != 0) {
      nonzero++;
    } else if ((a[i] % 2) == 0) {
      even++;
    } else if ((a[i] % 2) != 0) {
      odd++;
    }
  }
  printf("Even No: %d\nOdd No: %d", even, odd);

  printf("\nZeros: %d\nNon Zeros: %d", zero, nonzero);
}
