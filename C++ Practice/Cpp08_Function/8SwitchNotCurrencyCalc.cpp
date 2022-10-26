#include <iostream>
using namespace std;

int main()
{
    int num = 1380;
    // cin>>num;

    int hun = num / 100;           // 13
    int hLeft = num - (hun * 100); // 1380-1300=80

    int fty = hLeft / 50;           // 1
    int fLeft = hLeft - (fty * 50); // 80-50=30

    int tty = fLeft / 20;           // 1
    int tLeft = fLeft - (tty * 20); // 30-20=10

    int ten = tLeft / 10; // 1
    int tnLeft = tLeft - (ten * 10);

    int one = tnLeft / 1;
    int oneLeft = tnLeft - (one * 1);

    cout << "100 x " << hun << endl
         << "50 x " << fty << endl
         << "20 x " << ten << endl
         << "10 x " << one << endl;
    return 0;
}