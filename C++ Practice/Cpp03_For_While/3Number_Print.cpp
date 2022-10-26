// Print natural number upto given input
#include <iostream>
using namespace std;
int main()
{
    int n, num = 1;
    cout << "Enter n number list: ";
    cin >> n;
    if (num < n)
    {
        for (int i = 0; i < n; i++)
        {
            cout << num << "\n";
            num = num + 1;
        }
    }
    return 0;
}
