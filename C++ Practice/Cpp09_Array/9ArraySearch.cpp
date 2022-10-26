#include <iostream>
using namespace std;

// linear search

bool search(int arr[], int size, int key)
{
    for (int i = 0; i < size; i++)
    {
        if (arr[i] == key)
        {
            return true;
        }
    }
    return false;
}
int main()
{
    int arr[10] = {5, 4, -11, 6, 1, 9, 8, 7, -11, 0};

    cout << "Enter the key: ";
    int key;
    cin >> key;

    bool found = search(arr, 10, key);

    if (found)
    {
        cout << "Key is present." << endl;
    }

    else
    {
        cout << "Key is absent.";
    }

    return 0;
}