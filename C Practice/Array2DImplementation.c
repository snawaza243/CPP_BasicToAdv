/*
        Subject: Data Structure
        Practicle No: 01
        Practicle Name: Implement 2D array 9x9 and perform serach, traversal and
   sum of all elemetns.

*/
#include <stdio.h>

int main() {
  /* Data type declaring */
  int i, j;
  int arr[9][9];
  int srchElement;
  int sum = 0, count = 0;

  /* Entering the data in 2D array*/
  printf("Enter the elements of 2D Array (9x9): \n");
  for (i = 0; i < 9; i++) {
    for (j = 0; j < 9; j++) {
      printf("Enter the value of arr[%d][%d]", i, j);
      scanf("%d", &arr[i][j]);
    }
  }

  /* Printing the data of entered 2D array*/

  printf("\n Your elements of 2D Array (9x9): \n");
  for (i = 0; i < 9; i++) {
    printf("\n");
    for (j = 0; j < 9; j++) {
      printf(" %d	", arr[i][j]);
    }
  }

  /* Calculating the sum of entered elements */
  printf("\n");
  for (i = 0; i < 9; i++) {
    printf("\n");
    for (j = 0; j < 9; j++) {
      sum = sum + arr[i][j];
    }
  }
  printf(" Sum will be: %d	", sum);

  /* Searching the element in existing array */

  printf("\n\nEnter the element to search: ");
  scanf("%d", &srchElement);

  for (i = 0; i < 9; i++) {
    for (j = 0; j < 9; j++) {
      if (arr[i][j] == srchElement) {
        printf("Entered element %d", srchElement);
        printf(" exist at (%d, %d) \n", i, j);
        count++;
      }
    }
  }
  return 0;
}
