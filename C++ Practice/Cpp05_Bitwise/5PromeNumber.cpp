#include <iostream>
using namespace std;

int main()
{
    // prime number;
    int n;
    cout << "Enter a number: ";
    cin >> n;

    for (int i = 2; i < n; i++)
    {
        if (n % i != 0)
        {
            cout << "Number " << n << " is prime " << endl;
            break;
        }
        else
        {
            cout << "Number " << n << " is not prime " << endl;

            break;
        }
    }

    bool isPrime = 1;
    for (int i = 2; i < n; i++)
    {
        if (n % i == 0)
        {
            isPrime = 0;
            break;
        }
    }
    if (isPrime == 0)
    {
        cout << "Number " << n << " is not a prime" << endl;
    }
    else
    {
        cout << "Number " << n << " is a prime number" << endl;
    }
        // continue;

    for (int i = 1; i <= 5; i++)
    {
        cout << "\nHi \t" << i << endl;
        cout << "Hey \t" << i << endl;
        continue;
        cout << "Reply to kar dijiye" << endl;
    }

    for (int i = 0; i < 5; i++)
    {
        cout << i << " ";
        i++;
    } // 0 2 4

    for (int i = 0; i <= 15; i += 2)
    {
        cout << i << " ";
        if (i & 1)
        {
            continue;
        }
        i++;
        // 0 3 5 7 9 11 13 15
    }

    for (int i = 0; i < 5; i++)
    {
        for (int j = i; j <= 5; j++)
        {
            cout << i << " " << j << endl;
        }
    }

    // 0 0 0 1 0 2 0 3 0 4 0 5 1 1 1 2 1 3 1 4 1 5 2 2 2 3 2 4 2 5 3 3 3 4 3 5 4 4 4 5
}