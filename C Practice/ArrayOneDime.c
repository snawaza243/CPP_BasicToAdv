#include<stdio.h>
#include<conio.h>

int main(){
	int i,no;
	int array[100];
	
	printf("Enter size of array: ");
	scanf("%d",&no);
	printf("Enter elements :\n");
	for(i=0;i<no;i++){
		printf("array [%d]: ",i);
		scanf("%d",&array[i]);
	}
	
	printf("\nElements are \n");
	for(i=0;i<no;i++)
	
	{
		printf("%d\n",array[i]);
	}
	
	return 0;
}
