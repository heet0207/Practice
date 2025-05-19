#include<stdio.h>
int main(){
int n1;
int n2;
int n3;
int n4;
int n5;
int total;
float avg;
printf("enter The Value of n1 \n");
scanf("%d",&n1);
printf("enter the value of n2 \n");
scanf("%d",&n2);
printf("enter the value of n3 \n");
scanf("%d",&n3);
printf("enter the value of n4 \n");
scanf("%d",&n4);
printf("enter the value of n5 \n");
scanf("%d",&n5);
total=n1+n2+n3+n4+n5;
avg=total/5.0;
printf("total and average of n1,n2,n3,n4,n5, is %d and %0.2f",total,avg);
return 0;
}