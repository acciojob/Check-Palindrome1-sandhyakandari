// complete the given function

function palindrome(str){
  let s="";
	let strs=str.toLowerCase();
	for(let i=0;i<strs.length;i++){
		  if(strs[i]!=' '){
			  s=s+strs[i];
		  }
	} let i=0; 
	let r=s.length-1;
	while(i<r){
		if(s[i]!==s[r]){
			return false;
		}
		i++; 
		r--;
	}
return true;
	
}
module.exports = palindrome
