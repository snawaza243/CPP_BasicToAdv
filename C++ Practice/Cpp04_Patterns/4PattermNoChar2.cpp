#include <iostream>
using namespace std;

int pat41(int n)
{
    int i = 1;
    while (i <= n)
    {
        int j = 1;
        while (j <= n)
        {
            cout << n - j + 1;
            j += 1;
        }
        cout << endl;
        i += 1;
    }
    return 0;
}

int pat42(int n)
{
    int i = 1;
    int count = 0;
    while (i <= n)
    {
        int j = 1;
        while (j <= n)
        {
            cout << count << " \t";
            count += 1;
            j += 1;
        }
        cout << endl;

        i += 1;
    }
    return 0;
}

int pat43(int n)
{
    int i = 1;
    while (i <= n)
    {
        int j = 1;
        while (j <= i)
        {
            cout << "* ";
            // cout<<i; //for 1,22,333,4444;
            j += 1;
        }
        cout << endl;
        i += 1;
    }
    return 0;
}

int pat44(int n)
{
    int count = 1;
    int i = 1;
    while (i <= n)
    {
        int j = 1;
        int start = i;
        while (j <= i)
        {
            cout << start;
            start += 1;
            j += 1;
        }
        cout << endl;
        i += 1;
    }
    return 0;
}

int pat45(int n)
{
    // solve here
    int count = 1;
    int i = 1;
    while (i <= n)
    {
        int j = 1;
        while (j <= i)
        {
            cout << i << " ";
            i += 1;
            j += 1;
        }
        cout << endl;
        i += 1;
    }
    return 0;
}

int pat46(int n)
{
    int i = 1;
    while (i <= n)
    {
        int j = 1;
        while (j <= n)
        {
            // cout << j <<" ";
            // 1 2 3 4 5
            // 1 2 3 4 5
            // 1 2 3 4 5
            // 1 2 3 4 5
            // 1 2 3 4 5
            // cout<<n-j+1;
            // 54321
            // 54321
            // 54321
            // 54321
            // 54321
            j += 1;
        }
        cout << endl;
        i += 1;
    }

    return 0;
}

int pat47(int n)
{
    int count = 1;
    int i = 1;
    while (i <= n)
    {
        int j = 1;
        while (j <= n)
        {
            cout << count << " \t";
            // 1       2       3
            // 4       5       6
            // 7       8       9
            count += 1;
            j += 1;
        }
        cout << endl;
        i += 1;
    }
    return 0;
}

int pat48(int n)
{
    int i = 1;
    while (i <= n)
    {
        int j = 1;
        while (j <= i)
        {
            // cout << "* ";
            // *
            // * *
            // * * *

            cout << i << " ";
            // 1
            // 2 2
            // 3 3 3
            j += 1;
        }
        cout << endl;
        i += 1;
    }
    return 0;
}
int pat49(int n)
{
    int count = 1;
    int i = 1;
    while (i <= n)
    {
        int j = 1;
        while (j <= i)
        {
            cout << count << " ";
            count += 1;
            j += 1;
            // 1
            // 2 3
            // 4 5 6
        }
        cout << endl;
        i += 1;
    }
    return 0;
}

int pat410(int n)
{
    int i = 1;
    while (i <= n)
    {
        int j = 1;
        int count = i;
        while (j <= i)
        {
            cout << count << " ";
            count += 1;
            j += 1;
            // 1
            // 2 3
            // 3 4 5
        }
        cout << endl;
        i += 1;
    }
    return 0;
}

int pat411(int n)
{
    int i = 1;
    while (i <= n)
    {
        int j = 1;
        while (j <= i)
        {
            cout << i - j + 1 << " ";
            j += 1;
        }
        cout << endl;
        i += 1;
    }
    return 0;
}

int pat(int n)
{
    int i = 1;
    while (i <= n)
    {
        int j = 1;
        while (j <= n)
        {
            char ch = 'A' + i + j - 2;
            cout << ch;
            j += 1;
        }
        cout << endl;
        i += 1;
    }

    return 0;
}
int main()
{
    int n = 3;
    pat(n);
}