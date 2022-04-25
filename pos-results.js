let allPossibleResults = [];


for (a=1;a<11;a++) {
  for (b=1;b<11;b++) {
    for (c=1;c<11;c++) {
      for (d=1;d<11;d++) { 
        for (e=1;e<11;e++) { 
                    allPossibleResults.push([a,b,c,d,e])
                  }
                }
              }
            }
          }
        
          
 console.log(allPossibleResults)