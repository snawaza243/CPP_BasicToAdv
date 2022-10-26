// Sum of natural number upto user input

#include <iostream>
using namespace std;

int main()
{

    // sum upto n number
    int n, i, sum = 0;
    cout << "Enter a number: ";
    cin >> n;
    while (i <= n)
    {
        cout<<i<<endl;
        sum += i;
        i += 1;
    }
    cout << "Sum will be : " << sum;
}