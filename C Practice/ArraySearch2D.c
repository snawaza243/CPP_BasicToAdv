// Two dimensional array search
#include<stdio.h>
int main(){
  int rows, columns, srchElement, count=0;
  int i,j;

  //enter the order of matrix
  printf("Enter the number of Row and Column: \n");
  scanf("%d %d", &rows, &columns);

  //create a 2D array of the same order
  int array[rows][columns];

  //Take inputs into the 2D array
  printf("Enter %d elements: \n", (rows*columns));
  for( i=0; i<rows; i++){
    for( j=0; j<columns; j++){
      scanf("%d", &array[i][j]);
    }
  }
  
  printf("Enterd element: \n", (rows*columns));
  for( i=0; i<rows; i++){printf("\n ");
    	for( j=0; j<columns; j++){
      	printf("%d ",array[i][j]);
    }
  }

  //Enter the search element
  printf("\n\nEnter the element to search: \n");
  scanf("%d", &srchElement);

  for( i=0; i<rows; i++){
    for( j=0; j<columns; j++){
      if(array[i][j] == srchElement){
        /*
          *If a match is found, then output the
          *position and increment the count
        */
        printf("Element exist at (%d, %d) \n", i, j);
        count++;
      }
    }
  }

  /*
    *If count remains 0, it means- 
    *the array doesn't had the search element
  */
  if(count==0)
    printf("Not found \n");

  return 0;
}
