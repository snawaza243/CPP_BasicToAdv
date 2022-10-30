#include <iostream>
using namespace std;

// swap alternate array elements

int alterArray(int arr[], int size)
{
    for (int i = 0; i < size; i += 2)
    {
        if (arr[i] <= size)
        {
            swap(arr[i], arr[i + 1]);
        }
        else{
            cout<<arr[size-1];
        }
    }
    return 0;
}

int pArray(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
    return 0;
}

int main()
{

    int oArray[9] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    int eArray[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    alterArray(oArray, 9);
    alterArray(eArray, 10);

    pArray(oArray, 9);
    pArray(eArray, 10);

    return 0;
}