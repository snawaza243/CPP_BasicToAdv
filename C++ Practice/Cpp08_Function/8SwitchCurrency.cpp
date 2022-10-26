#include <iostream>
using namespace std;

// Rupees notes in given amount
int main()
{
    int n;
    int n100, n50, n20, n10, n5, n1;
    n100 = n50 = n20 = n10 = n5 = n1 = 0;

    cout << "Enter the Amount: ";
    cin >> n;
    // n = 1389;
    int m = n;
    switch (n >= 100)
    {
    case 1:
        n100 = n / 100;
        n = n - (n100 * 100);
        break;
    }

    switch (n >= 50)
    {
    case 1:
        n50 = n / 50;
        n = n - (n50 * 50);
        break;
    }

    switch (n >= 20)
    {
    case 1:
        n20 = n / 20;
        n = n - (n20 * 20);
        break;
    }

    switch (n >= 10)
    {
    case 1:
        n10 = n / 10;
        n = n - (n10 * 10);
        break;
    }

    switch (n >= 5)
    {
    case 1:
        n5 = n / 5;
        n = n - (n5 * 5);
        break;
    }
    switch (n >= 1)
    {
    case 1:
        n1 = n / 1;
        n = n - (n1 * 1);
        break;
    }

    cout << "Notes in " << m << endl;
    cout << "100 \tx\t " << n100 << endl;
    cout << "50 \tx\t " << n50 << endl;
    cout << "20 \tx\t " << n20 << endl;
    cout << "10 \tx\t " << n10 << endl;
    cout << "5 \tx\t " << n5 << endl;
    cout << "1 \tx\t " << n1 << endl;

    cout << n100 * 10 << " + " << n50 * 50 << " + " << n20 * 20 << " + " << n10 * 10 << " + " << n5 * 5 << " + " << n1 * 1 << " = " << m;

    return 0;
}