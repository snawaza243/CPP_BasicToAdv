#include <iostream>
using namespace std;

void printCounting(int num)
{
    for (int i = 1; i <= num; i++)
    {
        cout << i << endl;
    }
    return ;
    // void fun no need return but can be use empty rerun only
}
int main()
{
    int n=5;
    // cin >> n;
    printCounting(n);

    return 0;
}