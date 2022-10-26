#include <iostream>
using namespace std;

// Unique number with xor
int uniqArray(int arr[], int size)
{
    int ans = 0;
    for (int i = 0; i < size; i++)
    {
        ans = ans ^ arr[i];
    }
    // cout << ans;
    return ans;

 
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

    int size = 11;
    int arr[size] = {4, 5, 6, 7, 44, 7, 6, 5, 4};
    pArray(arr, size);
    cout << uniqArray(arr, size);

    return 0;
}