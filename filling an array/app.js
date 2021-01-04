const arr = (N) =>{
    if(N == null){
        return N = []
    }
    var temp = Array.from(Array(N).keys())
    return temp

}
console.log(arr(), [])
console.log(arr(4), [0,1,2,3])
console.log(arr(5))

    
