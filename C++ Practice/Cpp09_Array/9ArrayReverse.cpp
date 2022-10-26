#include <iostream>
using namespace std;
// reverse array with swap function
int revArray(
    int arr[], int size)
{
    int start = 0;
    int end = size - 1;
    while (start <= end)
    {
        swap(arr[start], arr[end]);
        start++;
        end--;
    }

    return 0;
}

int pArray(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
    return 0;
}

int main()
{

    int oArr[5] = {1, 2, 3, 4, 5};
    int eArr[6] = {1, 2, 3, 4, 5, 6};

    revArray(oArr, 5);
    revArray(eArr, 6);
    pArray(oArr, 5);
    cout << endl;
    pArray(eArr, 6);
    return 0;
}