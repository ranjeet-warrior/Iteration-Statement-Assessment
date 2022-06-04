//Printing Pyramid Pattern
const Print_pattern = (N) => 
{
  let i,j;
  for(i=0;i<N;i++){
     let output='';
    for(j=0;j<=i;j++){
      output=output+'*';
    }
    console.log(output);
}
}