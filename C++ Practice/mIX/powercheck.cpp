#include <iostream>
#include <math.h>
using namespace std;

int main()
{
    int n, ans;
    cout << "Enter a number: ";
    cin >> n;

    for (int i = 0; i < 30; i++)
    {

        ans = pow(2, i);
        if (n == ans)
        {
            cout << "True, "<< n << " is sqr of "<< i;

            break;
        }
    }
    if (n != ans)
        {
            cout << "False";
   
        }

    
    return 0;
}