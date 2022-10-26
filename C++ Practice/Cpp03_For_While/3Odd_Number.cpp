// Print all odd and even number upto given input

#include <iostream>
using namespace std;
int main()
{
    // print n odd number
    int n, num;

    cout << "Enter a number: ";
    cin >> n;
    if (n < 2)
    {
        cout << "Not for valid";
    }

    cout << "\nAll odd number upto" << n << " number." << endl;
    if (n > 0)
    {
        num = 1;
        for (int i = 0; i <= n; i++)
            if (i % 2 == 1)
            {
                cout << i << "\n";
            }
    }

    cout << "\nAll even number upto" << n << " number." << endl;
    if (num < n)
    {
        num = 2;
        for (int i = 0; i < n; i++)
        {
            if (i % 2 == 0)
            {
                int ev = (i % 2);
                cout << i << endl;
            }
        }
    }

    else
        cout << "Enter a valid number.";
}