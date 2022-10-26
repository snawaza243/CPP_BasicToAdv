#include <iostream>
using namespace std;

int main()
{
    int n = 3;
    int i = 1;

    while (i <= n)
    {
        int j = 1;
        while (j <= n - i + 1)
        {
            cout << j;
            j += 1;
        }

        int sp1 = i - 1;
        while (sp1)
        {
            cout << "*";
            sp1 -= 1;
        }

        int sp2 = i - 1;
        while (sp2)
        {
            cout << '*';
            sp2 -= 1;
        }

        int k = 1;
        int sp3 = n - i + 1;
        while (k <= n , sp3>0)
        {
            cout << sp3;
            sp3 -= 1;
            k += 1;
        }

        cout << endl;
        i += 1;
    }

// 1234554321
// 1234**4321
// 123****321
// 12******21
// 1********1

    return 0;
}