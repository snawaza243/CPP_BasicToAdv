#include <iostream>
using namespace std;

int main()
{
    // check prime number or not
    int n;
    int i=2;
    cout << "Enter a number: ";
    cin >> n;
    while (i < n)
    {
        if (n % i == 0)
        {
            cout << "Not prime for "  << i << endl;
        }
        else
        {
            cout << "Prime for " << i << endl;
        }
        i += 1;
    }
}