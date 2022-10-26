#include <iostream>
using namespace std;

int printArray(int arr[], int size)
{
    cout << "Printing the array" << endl;
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
    return 0;
}
int main()
{
    // int array[15] = {1, 45, 58, 8, 88, 86};
    // int size = sizeof(array) / sizeof(array[7]);
    // cout << size;
    // printArray(array, size);

    char ch[5] = {'s', 'h', 'a', 'h'};

    for (int i = 0; i < 3; i++)
    {
        cout << ch[i];
    }

    return 0;
}