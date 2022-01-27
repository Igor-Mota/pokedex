const jsonToCsv = (json:object | Array<object>) => {
  
  var control:string = '';
  var keys:Array<string> = [];
  var compare = keys[keys.length -1]

  if(Array.isArray(json)){
    for(var key in json[0]){
      keys.push(key)
    }
    control = `${keys.join().toString()}\n`
    
      json.forEach( (el:any) => {  
        for(var key in el){
        if(key !== compare){
           control += `${el[key]}},`
         }else{
           control += `${el[key]};`
         }
        }
      })
      control = control.replace(/\}+/gm,``)
      control = control.replace(/([png])\,/gm, '$1\n')
      control = control.replace(/\n(https)/gm,',$1')
  }
  return control
}
export { jsonToCsv }
