#include<stdio.h>
int main()
{
int a,b,add,sub,mul,div,mod;
printf("enter the value of a \n");
scanf("%d",&a);
printf("enter the value of b \n");
scanf("%d",&b);
add =a +b;
printf("add of a and b is %d \n",add );
sub=a-b;
printf("sub of a and b is %d \n", sub);
mul = a*b;
printf("mul of a and b is %d \n", mul );
div =a/b;
printf(" div of a and b is %d \n", div);
mod =a%b;
printf(" mod of a and b is %d  \n", mod );
return 0;
}