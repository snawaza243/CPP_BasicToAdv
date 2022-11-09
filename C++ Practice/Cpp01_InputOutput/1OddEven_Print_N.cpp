#include <iostream>
using namespace std;

int main()
{
    int i, num, n;

    cout << "Enter a number: ";
    cin >> n;

    cout << "\nAll odd number upto " << n <<endl;
    num = 1;
    for (i = 0; i <= n; i++)
    {
        if (i % 2 == 1)
        {
            cout << i << endl;
        }
    }

    cout << "\nAll even number upto " << n <<endl;
    num = 2;
    for (i = 0; i <= n; i++)
    {
        if (i % 2 == 0)
        {
            cout << i << endl;
        }
    }
}