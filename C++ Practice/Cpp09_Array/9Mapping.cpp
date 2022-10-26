#include <iostream>
#include <unordered_map>

using namespace std;

int main()
{
    unordered_map<string, int> map;

    map["Hello"] = 1;
    map["Hey"] = 2;
    map["Hii"] = 3;

    for (auto x : map)
        cout << x.first << " " << x.second << endl;

    return 0;
}