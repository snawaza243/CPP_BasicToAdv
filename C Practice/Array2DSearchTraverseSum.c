/*
	Name: Shahnawaz Alam
	Roll No: 11202722 (D1)
	Subject Name: Data Structure & Algorithms 
	Subject Code: BCSE-502L
	Practical No: 01
	Practical Name: Implement 2D array 9x9 and perform search, traversal and sum of all elements. 
	
	
*/
#include<stdio.h>

int main()
{	
	/* Data type declaring */
	int i,j;
	int srchElement;
	int sum=0, count=0;
	int arr[9][9]={{1,2,3,4,5,6,7,8,9},
					{2,3,4,5,6,7,8,9,1},
					{3,4,5,6,7,8,9,1,2},
					{4,5,6,7,8,9,1,2,3},
					{5,6,7,8,9,1,2,3,4},
					{6,7,8,9,1,2,3,4,5},
					{7,8,9,1,2,3,4,5,6},
					{8,9,1,2,3,4,5,6,7},
					{9,1,2,3,4,5,6,7,8}}; 	
 
	
	/* Entering the data in 2D array by user */
/*	int arr[9][9];
	printf("Enter the elements of 2D Array (9x9): \n");
	for(i=0;i<9;i++){
		for(j=0;j<9;j++){
			printf("Enter the value of arr[%d][%d]",i,j);
			scanf("%d",&arr[i][j]);
		}
	}
*/

/* Note: For enter the value by yourself uncomment code-line 31 to 39 and comment to code-line 19 28 
	For using entered value keep uncomment to the code-line 19 to 28 and comment to the code-line 31 to 3  
*/

	/* Printing the data of entered 2D array*/	
	printf("\n Your elements of 2D Arra (9x9): \n");
	for(i=0;i<9;i++){printf("\n");
		for(j=0;j<9;j++){
			printf(" %d	",arr[i][j]);
				
		}
	}
	
	/* Displaying the sum of entered elements */
	for(i=0;i<9;i++){
			printf("\n");
			for(j=0;j<9;j++){
				sum=sum+arr[i][j];
			}
		}
	printf("Sum will be: %d	",sum);
	
	
	/* Searching the element in existing arra */
	
	printf("\n\nEnter the element to search: ");
  		scanf("%d", &srchElement);

	for( i=0; i<9; i++){
	    for( j=0; j<9; j++){
	      		if(arr[i][j] == srchElement){
						printf("Entered element %d",srchElement);
						printf(" exist at (%d, %d) \n", i, j);
		       		count++;
	      	}
	    }
	  }
	  
	/* Printing the traversal data of entered 2D array*/	
	printf("\n Your traversal elements of 2D Arra (9x9): \n");
	for(i=0;i<9;i++){    
		 for(j=0;j<9;j++){    
		   printf("arr[%d] [%d] = %d \n",i,j,arr[i][j]);    
		}
	}
	
	return 0;
	
	

}

