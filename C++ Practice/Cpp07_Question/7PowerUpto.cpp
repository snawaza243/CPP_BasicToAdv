#include <iostream>
#include<math.h>
using namespace std;

int main()
{
    int n = 15;

    for (int i = 0; i <= pow(2,30); i++)
    {
        if (n==pow(2,i))
        {
            cout<<"True";
        }
        
    }
    
    return 0;
}