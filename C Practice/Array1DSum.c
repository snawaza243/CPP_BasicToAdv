#include <conio.h>
#include <stdio.h>

int main() {
  int arr[20] = {1, 2, 3, 42, 5, 4, 3};
  int sum = 0;
  int i;
  for (i = 0; i < 20; i++) {
    sum += arr[i];
  }
  float len = 7;
  float mean = sum / len;

  printf("%f", mean);
  return 0;
  for (i = 0; i < 20; i++) {
    printf(sum);
  }
}
