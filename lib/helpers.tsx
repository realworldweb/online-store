const removeProductNotes = (str:string) => {
    let end = false;
return [...str].reduce((acc: string[], val: string) => {
    

    if(val === '-' || end ){
      end = true;
      return acc;
    } 

        acc.push(val)
    
return acc;
},[]).join('');

}

export{
    removeProductNotes
}