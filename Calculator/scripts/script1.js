
    function Sum(){
        var str = document.getElementById('n1').value;
        var s1=str.split(''),arrNumb=new Array(), arrSymb=new Array();
        var k=0, m=0;
        for (var i=0; i<s1.length; i++){
            if(s1[i] ==='*' || s1[i] ==='/' || s1[i] ==='+' || s1[i] ==='-'){
                arrSymb[k]=s1[i];
                k++;
        } 
    }
    k=0; arrNumb[0]='';
    while(m<s1.length){
        if(s1[m] ==='*' || s1[m] ==='/' || s1[m] ==='+' || s1[m] ==='-'){
            m++; 
            k++;
            arrNumb[k]='';
        }
            else{
                arrNumb[k]+=s1[m];
                m++;
            }
    }
    for (var i=0; i<arrSymb.length; i++){             
        if(arrSymb[i] ==='*'){                            //mul
            arrNumb[i+1]=arrNumb[i+1]*arrNumb[i];
            arrNumb[i]=0;
    }
    if(arrSymb[i] ==='/'){                                //div
        arrNumb[i+1]=arrNumb[i]/arrNumb[i+1];
        arrNumb[i]=0;
} 
}
    for(var i = 0; i<arrSymb.length;i++){                  //min
        if(arrSymb[i] ==='-')
        for (var j = i+1; j<arrNumb.length;j++){
           if(arrNumb[j] != 0){
               arrNumb[j]=arrNumb[i]-arrNumb[j];
               arrNumb[i]=0;
               break;
           } 
        } 
    }
    for(var i = 0; i<arrSymb.length;i++){                   //plus
    if(arrSymb[i] ==='+')
        for (var j = i+1; j<arrNumb.length;j++){
           if(arrNumb[j] !=0){
               arrNumb[j]=Number(arrNumb[j])+Number(arrNumb[i]);
               arrNumb[i]=0;
               break;
           } 
        } 
    }
        document.getElementById('n1').value=arrNumb[arrNumb.length-1];
      }