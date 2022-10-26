#include <iostream>
#include<math.h>
using namespace std;
int main()
{
    int i, n, ans;
    try
    {
        for (i = 0; i < 30; i++)
        {
            ans = pow(2, i);
            if (n == ans)
            {
                cout << "True";
            }

            else
            {
                throw(n);
            }
        }
    }
    catch (int num)
    {
        cout << "Number " << n << " is not pow";
    }

    return 0;
}