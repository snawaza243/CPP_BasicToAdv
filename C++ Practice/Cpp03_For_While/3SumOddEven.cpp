#include <iostream>
using namespace std;

int main()
{
    // SUM OF EVEN/ODD NUMBER UPTO N
    int i, n;
    int sum = 0;
    cout<<"Enter a number: ";
    cin >> n;
    for (i = 0; i < n; i++)
    {
        if (i % 2 == 0) // for even number
        // if (i % 2 != 0) // for even number
        {
            cout << i << endl;
            sum += i;
        }
    }
    cout << "Sum will be: " << sum;
}