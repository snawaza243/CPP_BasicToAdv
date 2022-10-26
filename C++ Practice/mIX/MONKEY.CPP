#include <iostream>
#include <math.h>
using namespace std;

int main()
{
    for (int i = 0; i < 30; i++)
    {
        if (pow(2, i) <= 100)
        {
            cout << pow(2, i) << endl;
        }
    }

    return 0;
}