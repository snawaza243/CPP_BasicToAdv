#include<stdio.h>
#include<conio.h>
int main()
{
	int a[10][10], i,j, N,M, nonzero=0;
	int sum=0;
	printf("Enter the size of sqare matrix (max 10x10): ",N);
	scanf("%d", &N);
	
	printf("Enter the size of sqare matrix (max 10x10): ",M);
	scanf("%d", &M);
	printf("Enter the elements of %dx%d matrix:\n" ,N,M);
	    
	for(i=0;i<N;i++)
	{
		for(j=0;j<M;j++)
		
		{
		printf("Enter elements of a[%d[%d]: ",i,j);
		scanf("%d", &a[i][j]);
	
		}
	}
	
	printf("\nEnterd elementc are:\n");
	for(i=0;i<N;i++)
			
		for(j=0;j<M;j++)
		{
		printf("%d ",a[i][j]);
		 	if (j == N - 1 || i==M-1) 
			{
				printf("\n\n");
			}
		}
	
    for ( j = 1; j < M; j++) 
		{
                  for ( i=j-1 ; i>=0 ; i--) 
				  {
                        sum= sum + a[i][j];
                  }
                  
           }

	
	printf("\nSum of above digonal elements %d",sum);
	
	getch();
}
