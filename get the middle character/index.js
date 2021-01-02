function getMiddle(s)
{
   let str =  s.split('') //merubah string menjadi array
   let arr= str[Math.floor(str.length/2)] //menemukan median dari array
   let arr1 =str[Math.floor(str.length/2 -1)] //mengambil nilai median - 1 sehingga sama dengan soal codewars

   //cek jika string berjumlah genap atau ganjil
    if(str.length % 2 == 0){
      return arr1+arr
    }else if(str.length % 2 == 1){
        return arr
    }
}

      console.log(getMiddle("test"),"es");
      console.log(getMiddle("testing"),"t");
      console.log(getMiddle("middle"),"dd");
      console.log(getMiddle("A"),"A");

