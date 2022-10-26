// Print natural number upto user input number
#include <iostream>
using namespace std;

int main()
{
    // pint upto n integer
    int n;
    cout<<"Enter last number upto print: ";
    cin >> n;
    int i = 1;
    while (i <= n)
    {
        cout << i << " ";
        i = i + 1;
    }
}