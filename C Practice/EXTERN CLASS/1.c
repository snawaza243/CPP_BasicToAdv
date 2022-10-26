#include <stdio.h>
 
int count ;
extern void write_extern();
 
 main() {
   count = 5;
   extern void write_extern();
   printf(count);
   
}
