#include <iostream>
using namespace std;

// print sum of all array elements

int arrSum(int arr[], int n)

{
    int sum = 0;

    for (int i = 0; i < n; i++)
    {
        sum = sum + arr[i];
    }

    return sum;
}

int main()
{

    int size;
    cin >> size;

    int num[100];

    for (int i = 0; i < size; i++)
    {
        cout << "arr[" << i << "] = ";
        cin >> num[i];
    }
    
    cout << "Summ of array = " << arrSum(num, size);

    return 0;
}