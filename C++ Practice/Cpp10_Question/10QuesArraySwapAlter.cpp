#include <iostream>
using namespace std;

int alterSwap(int arr[], int size)
{
    for (int i = 0; i < size; i += 2)
    {
        if (arr[i] < size)
        {
            swap(arr[i], arr[i + 1]);
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

    int oNum[5] = {1, 2, 3, 4, 5};
    int eNum[6] = {1, 2, 3, 4, 5, 6};

    alterSwap(oNum, 5);
    alterSwap(eNum, 6);

    pArray(oNum, 5);
    pArray(eNum, 6);

    return 0;
}