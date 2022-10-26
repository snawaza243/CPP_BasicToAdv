#include <iostream>
using namespace std;

int pat41(int n)
{
    int count = 1;
    int i = 1;
    while (i <= n)
    {
        int j = 1;
        while (j <= n)
        {
            char a = 'A' + i - 1;
            cout << (char)a << " ";
            count += 1;
            j += 1;
            // A A A
            // B B B
            // C C C
        }
        cout << endl;
        i += 1;
    }
    return 0;
}

int pat42(int n)
{
    int i = 1;
    while (i <= n)
    {
        int j = 1;
        while (j <= n)
        {
            char ch = 'A' + i + j - 2;
            // A B C
            // B C D
            // C D E

            // char ch = 'A' + i -1;
            // A A A
            // B B B
            // C C C
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

            char cha = 'A' + i - 1;
            // A
            // B B
            // C C C

            cout << cha << " ";
            j += 1;
        }

        cout << endl;
        i += 1;
    }

    return 0;
}

int pat44(int n)
{
    int i = 1;
    while (i <= n)
    {
        int j = 1;

        while (j <= i)
        {
            char ch = 'A' + i + j - 2;
            cout << ch << " ";
            j += 1;
        }
        cout << endl;
        i += 1;
    }
}
int pat45(int n)
{
    int i = 1;
    while (i <= n)
    {
        int j = 1;
        char ch = 'A' + n - i;
        while (j <= i)
        {
            cout << (char)ch;
            ch += 1;
            j += 1;
        }
        cout << endl;
        i += 1;
    }
}

int pat(int n)
{
    char count = 'A';
    int i = 1;
    while (i <= n)
    {
        int j = 1;
        while (j <= i)
        {
            // char ch = 'A' + i - j - 1;
            cout << count << " ";
            count += 1;
            j += 1;
        }
        cout << endl;
        i += 1;
    }
    return 0;
}

int main()
{
    int n = 5;
    pat(n);
}