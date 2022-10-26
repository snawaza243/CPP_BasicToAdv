#include <iostream>
using namespace std;

int rev(int n)
{
    int rev = 0;
    while (n != 0)
    {
        int rem = n % 10;
        rev = rev * 10 + rem;
        n = n / 10;
    }
    cout << rev;
    return 0;
}

int main()
{
    // reverse integer
    // compliment of base 10 integer
    // number compliment
    // binary to decimal
    // sqrt
    // power

    int arr [3] = {1, 2, 3};
    int l = sizeof(arr)/sizeof(arr[0]);

    for (int i = 0; i < l; i++)
    {
        cout<<arr[i]<<" ";
    }
    


    return 0;
}