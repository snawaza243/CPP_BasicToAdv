#include<stdio.h>
#include<conio.h>
int main()
{
	int a[10][10], i,j, N, nonzero=0;
	int sum=0;
	printf("Enter the size of sqare matrix (max 10x10): ",N);
	scanf("%d", &N);
	
	printf("Enter the elements of %dx%d matrix:\n" ,N,N);
	    
	for(i=0;i<N;i++)
	{
		for(j=0;j<N;j++)
		
		{
		printf("Enter elements of a[%d[%d]: ",i,j);
		scanf("%d", &a[i][j]);
	
		}
	}
	
	printf("\nEnterd elementc are:\n");
	for(i=0;i<N;i++)
			
		for(j=0;j<N;j++)
		{
		printf("%d ",a[i][j]);
		 	if (j == N - 1) 
			{
				printf("\n\n");
			}
		}
	
for(i = 0; i < N; i++)
for(j = 0;j<N;j++)
  	{
   		sum = sum + a[i][j];
  	}

	
	printf("\nSum of above digonal elements %d",sum);
	
	getch();
}
