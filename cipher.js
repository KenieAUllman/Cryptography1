function cipher(str) {

var regularAlphabet = ['a','b','c','d','e','f','g','h','i','j',
'k','l','m','n','o','p','q','r','s','t','u'
,'v','w','x','y','z','A','B','C','D','E','F',
'G','H','I','J','K','L','M','N','O','P','Q',
'R','S','T','U','V','W','X','Y','Z']

var cipherAlphabet = ['b','a','z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c']

var resultsStr=[]; 
for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < regularAlphabet.length; j++) {
        if (str[i] === regularAlphabet[j]) {
            resultsStr.push(cipherAlphabet[j])
        }
        
    }
}
return resultsStr.join(''); 
};

console.log(cipher('t qngx zkdminvkbmud'))