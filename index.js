function stringTo2dArray(string, d1, d2) {
	var a=string.split(d1).map(function(x){return x.split(d2)});
     var numberArray = a.map(N=> N.map(Number));
    return numberArray
}


function insertInput(){
    var n=document.getElementById("inputText2").value
    var string=document.getElementById("inputText1").value
    var adj= stringTo2dArray(string,","," ")
    var trans = transitive(adj,n)
    for(let i=0;i<4;i++){
        document.write(trans[i][0]+ ' ' + trans[i][1]+ ' ' + trans[i][2]+ ' ' + trans[i][3] +'<br>')
    }
    
}

function transitive(adjarr,n){
  var A = adjarr.map(function(array){
        return array
    })
    
    for(let k=0;k<n;k++)
    { 
        for(let i=0;i<n;i++){
            
            for(let j=0;j<n;j++){
                A[i][j] = A[i][j] ||(A[i][k] && A[k][j])
            }
        } 
     }
     
     return A
}