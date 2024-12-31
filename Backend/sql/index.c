
#include <stdio.h>

int main()
{
  if(printf("hello ") ==1)
 {
    
 }
 else
 {
     printf("world");
 }
}

// *************** three larget number ***************************

#include<stdio.h>

int main(){
    int a,b,c;
    
    printf("enter the three number:");
    scanf("%d %d %d",&a,&b, &c);
    
    if(a > b){
        if(a>c)
        {
            printf("enter the A number");
        }
        else{
            printf("enter the b number");
        }
    }
    else {
        if(b>c)
        {
            printf("enter the b number");
        }
        else
        {
            printf("entert the c number");
        }
    }
}
    
    //******************************** four largest number *******************************************/


    #include<stdio.h>

    int main()
    {
        int a,b,c,d;

        printf("enter the four number:");
        scanf("%d %d %d %d", &a,&b,&c,&d);


        if(a>b &&  a>c && a>d){
            printf("enter the a number");
        }
        else if(b>a && b>c && b>d)
        {
            printf("enter the b number");
        }
        else if(c>a && c>b && c>d)
        {
            printf("enter the c number");
        }
        else{
            printf("enter the d number");
        }
    }