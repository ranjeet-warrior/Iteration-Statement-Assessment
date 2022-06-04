//Finding the fives
const Find_Five = (N) => 
{
	 let count=0;
	 let digit;
	 while(N!==0){
	   digit=N%10;
	   N=parseInt(N/10);
	   if (digit==5){
	     count++;
	   }
	 }
	 return count;
};