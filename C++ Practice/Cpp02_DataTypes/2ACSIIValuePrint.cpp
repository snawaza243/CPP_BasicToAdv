#include <iostream>
using namespace std;
int main()
{
    // print ASCII value
    int i;
    for (i = 0; i < 253; i++)
    {
        cout << "Value: " << i << " and character : " << (char)i << endl;
    }


    return 0;
}