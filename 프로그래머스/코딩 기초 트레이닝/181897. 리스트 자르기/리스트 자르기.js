function solution(n, slicer, num_list) {
   if(n===1){
      num_list = num_list.slice(0,slicer[1]+1)
   } 
    if(n===2){
        num_list = num_list.slice(slicer[0])
    }
    if(n===3){
        num_list = num_list.slice(slicer[0],slicer[1]+1)
    }
    if(n===4){
        num_list = num_list.slice(slicer[0],slicer[1]+1).filter((_,i)=>i%slicer[2]===0)
    }
    return num_list
}