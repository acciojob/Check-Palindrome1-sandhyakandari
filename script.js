// complete the given function

function palindrome(str){
  let s="";
	for(let i=0;i<str.length;i++){
		  if(str[i]!=' '){
			  s=s+str[i];
		  }
	} let i=0; 
	let r=s.length-1;
	while(i<r){
		if(s[i]!=s[r]){
			return false;
		}
		i++; 
		r--;
	}
return true;
	
}
module.exports = palindrome
