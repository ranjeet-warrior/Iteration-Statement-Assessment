//Check for number as Prime or not
const Prime_Check = (N) => 
{
	 for (let i = 2; i < N; i++) {
    if (N % i !== 0) {
      return "YES";
    } 
    else {
      return "NO"; 
    }
}
};