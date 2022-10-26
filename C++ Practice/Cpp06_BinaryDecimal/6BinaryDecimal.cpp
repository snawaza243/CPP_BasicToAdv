#include <iostream>
#include <math.h>
using namespace std;

int getBinary(int n)
{
    int ans = 0;
    int root = n;
    int i = 0;
    while (n != 0)
    {
        int bit = n & 1;
        ans = (bit * pow(10, i) + ans);
        // n = n >> 1;
        n /= 2;
        i++;
    }
    cout << "Binary of Digit " << root << " : " << ans << endl;
    return ans;
}

int getDeci(int n)
{
    int root = n;
    int ans = 0;
    int i = 0;
    while (n != 0)
    {
        int digi = n % 10;
        if (digi == 1)
        {
            ans = ans + pow(2, i);
        }
        n = n / 10;

        i++;
    }
    cout << "Digit of Binary " << root << " : " << ans << endl;
    return 0;
}

int main()
{
    int c, n;
    cout << "What do you wan to calculate?\n\t1. Digit to Binary.\n\t2. Binary to Digit\n\nEnter your choice: ";
    cin >> c;

    if (c == 1)
    {
        cout << "Enter Digit: ";
        cin >> n;
        getBinary(n);
    }
    else if (c == 2)
    {
        cout << "Enter Binary: ";
        cin >> n;
        getDeci(n);
    }
    else
    {
        cout << "Sorry! invalid option";
    }
    return 0;
}