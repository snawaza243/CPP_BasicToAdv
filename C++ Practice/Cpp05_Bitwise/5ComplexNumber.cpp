#include <iostream>
using namespace std;

int main()
{
    int i = 7;
    int i2 = i++;
    int ai = 3 + i;
    cout << ai;
    int i3 = ++i;
    cout << i2 << endl;
    cout << i3 << endl;
}