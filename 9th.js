//printing the table
const Print_Table = (N) => 
{
  let res='';
	for(let i=1;i<=10;i++){
	  res=N+' '+'*'+' '+i+' '+ '=' +' '+ N*i;
	  console.log(res);
	}
	
};
//  Output // 3*1=3
// 3*2=6
// 3*3=9