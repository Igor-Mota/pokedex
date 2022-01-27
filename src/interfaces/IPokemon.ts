export interface IPokemon {
  id:number
  name:string
  url:string 
  sprites?:{
    front_shiny?:string
  }
}
