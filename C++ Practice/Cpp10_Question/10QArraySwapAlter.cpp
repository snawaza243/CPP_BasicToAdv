#include <iostream>
using namespace std;

void swapAlter(int arr[], int size)
{
    for (int i = 0; i < size; i += 2)
    {
        if (i + 1 < size)
        {
            swap(arr[i], arr[i + 1]);
            
        }
        else
        {
            cout << arr[size - 1];
        }
    }
}

void printSwap(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}
int main()
{
    int oddArray[10] = {1, 2, 3, 4, 5};
    int evenArray[10] = {1, 2, 3, 4, 56};
    swapAlter(oddArray, 5);
    printSwap(oddArray, 5);
}