#include <iostream>
using namespace std;

// Triangle patterns
int main()
{
    int n = 4;
    // int i = 1;
    // while (i<=n)
    // {
    //     int sp = n-i;
    //     while(sp)
    //     {
    //         cout<<" ";
    //         sp = sp -1;
    //     }
    //     //     *
    //     //    * *
    //     //   * * *
    //     //  * * * *
    //     // * * * * *
    //     int j=1;
    //     while (j<=i)
    //     {
    //         cout<<"* ";
    //         j+=1;
    //     }
    //     cout<<endl;
    //     i+=1;
    // }

    // int i = 1;
    // while (i <= n)
    // {
    //     int sp = n - i;
    //     while (sp)
    //     {
    //         cout << " ";
    //         sp = sp - 1;
    //     }
    // //    *
    // //   **
    // //  ***
    // // ****
    //     int j = 1;
    //     while (j <= i)
    //     {
    //         cout << "*";
    //         j += 1;
    //     }
    //     cout << endl;
    //     i += 1;
    // }

    // int i = 1;
    // while (i <= n)
    // {
    //     int sp = n - i;
    //     while (sp)
    //     {
    //         cout << " ";
    //         sp = sp - 1;
    //     }

    //     int j = 1;
    //     while (j <= i)
    //     {
    //         cout << "*";
    //         j += 1;
    //     }
    //     //    *
    //     //   ***
    //     //  *****
    //     // *******
    //     int k = 2;
    //     while (k <= i)
    //     {
    //         cout << "*";
    //         k += 1;
    //     }
    //     cout << endl;
    //     i += 1;
    // }


    // int i = 1;
    // while (i <= n)
    // {
    //     int j = 1;
    //     while (j <= n-i+1)
    //     {
    //         cout<<"*" ;
    //         j+=1;
    //     }
    //     // ****
    //     // ***
    //     // **
    //     // *
    //     cout << endl;
    //     i += 1;
    // }


    // int i = 1;
    // while (i <= n)
    // {
    //     int j = 1;
    //     while (j <= i - 1)
    //     {
    //         cout << " ";
    //         j += 1;
    //     }
    //     int l = 1;
    //     while (l <= n - i + 1)
    //     {
    //         cout << "*";
    //         l += 1;
    //     }
    //     int k = 1;
    //     while (k <= n - i )
    //     {
    //         cout << "*";
    //         k += 1;
    //     }
    //     cout << endl;
    //     i += 1;
    //     // ****
    //     //  ***
    //     //   **
    //     //    *
    // }

    int i = 1;
    while (i <= n)
    {
        int j = 1;
        while (j <= i - 1)
        {
            cout << " ";
            j += 1;
        }
        int l = 1;
        while (l <= n - i + 1)
        {
            cout << "*";
            l += 1;
        }
        int k = 1;
        while (k <= n - i)
        {
            cout << "*";
            k += 1;
        }

        cout << endl;
        i += 1;

        // *******
        //  *****
        //   ***
        //    *
    }

    return 0;
}