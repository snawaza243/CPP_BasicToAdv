// Program to calculate the sum of upto given user input

#include <iostream>
using namespace std;

int main()
{
    // sum of n
    int n, sum;

    cout << "Enter a number to sum: ";
    cin >> n;

    if (sum < n)
    {
        sum = 0;
        for (int i = 1; i <= n; i++)
        {
            sum += i;
        }
        cout << sum << "\n";
    }
}