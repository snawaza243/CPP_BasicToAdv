#include <iostream>
using namespace std;

int main()
{
    int n = 4;
    // int i = 1;
    // while (i <= n)
    // {
    //     int k = 1;
    //     while (k <= i - 1)
    //     {
    //         cout << " ";
    //         k += 1;
    //     }
    //     int j = 1;
    //     while (j <= n - i + 1)
    //     {
    //         cout << i;
    //         j += 1;
    //     }

    //     cout << endl;
    //     i += 1;
    // }
    // //Output
    // // 1111
    // // 222
    // // 33
    // // 4

    // int i = 1;
    // while (i <= n)
    // {
    //     int j = 1;
    //     while (j <= n - i)
    //     {
    //         cout << " ";
    //         j += 1;
    //     }
    //     int k = 1;
    //     while (k <= i)
    //     {
    //         cout << i;
    //         k += 1;
    //     }
    //     cout << endl;
    //     i += 1;
    // }
    //    1
    //   22
    //  333
    // 4444

    // int count = 1;
    // int i = 1;
    // while (i <= n)
    // {
    //     // print space
    //     int k = 1;
    //     while (k <= i - 1)
    //     {
    //         cout << ' ';
    //         k += 1;
    //     }

    //     // print number count
    //     int j = 1;
    //     while (j <= n - i + 1)
    //     {
    //         cout << count;
    //         count += 1;
    //         j += 1;
    //     }

    //     cout << endl;
    //     i += 1;
    // }

    // 1234
    //  567
    //   89
    //    10

    // int i = 1;
    // while (i <= n)
    // {
    //     int j = 1;
    //     while (j <= i - 1)
    //     {
    //         cout << " ";
    //         j += 1;
    //     }
    //     int k = 1;
    //     int count = i;
    //     while (k <= n - i + 1)
    //     {
    //         cout << count;
    //         count += 1;
    //         k += 1;
    //     }
    //     cout << endl;
    //     i += 1;
    // }
    // // 1234
    // //  234
    // //   34
    // //    4

    // int i = 1;
    // while (i <= n)
    // {
    //     int j = 1;
    //     while (j <= i - 1)
    //     {
    //         cout << " ";
    //         j += 1;
    //     }
    //     int k = 1;
    //     while (k <= n - i + 1)
    //     {
    //         cout << k;
    //         k += 1;
    //     }
    //     cout << endl;
    //     i += 1;
    // }
    // 1234
    //  123
    //   12
    //    1

    int i = 1;
    while (i <= n)
    {

        // 1st triangle space
        // int j = 1;
        // while (j <= n - i)
        // {
        //     cout << " ";
        //     j += 1;
        // }

        int sft = n-i;
        while (sft)
        {
            cout<<" ";
            sft-=1;
        }
        

        // 2nd triangle
        int k = 1;
        int count1 = i;
        while (k <= i)
        {
            cout << k;
            //    count1+=1;
            k += 1;
        }

        // 3rd triangle
        int sst = i - 1;
        while (sst)
        {
            cout << sst;
            sst -= 1;
        }

        cout << endl;
        i += 1;
    }
}
