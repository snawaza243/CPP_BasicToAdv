#include <iostream>
using namespace std;

// find unique number from the array
int findUnique(int arr[], int size)
{
    int unique = 0;
    for (int i = 0; i < size; i++)
    {
        cout << unique << " ^ " << i << " = ";
        unique = unique ^ i;
        cout << (unique) << endl;
    }
    cout << "Answer: " << unique;
    return 0;
}
int main()
{

    // int arr[5] = {2, 4, 7, 2, 7};
    // findUnique(arr, 5);

    int arr[20];
    int n;
    cout << "Enter array size: ";
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        cout << "Enter " << i + 1 << " number :";
        cin >> arr[i];
    }

    for (int i = 0; i < n; i++)
    {
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    
    findUnique(arr, n);

    return 0;
}
