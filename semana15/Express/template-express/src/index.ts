import express, {Express, Request, Response} from "express"
import cors from "cors"
import { countries } from "./data"


const app:Express = express()

app.use(express.json())
app.use(cors())

type country = {
    "id": number,
    "name": string,
    "capital": string,
    "continent": string
  }

type countriesEditBody = {
    name: string,
    capital: string
 }

//Exercicio 1 - o Get abaixo busca todos os paises
app.get("/countries", (req: Request, res: Response) =>{

    console.log(req.headers)
    console.log(req.query)

    res.send(countries)
})

//Exercicio 2 - O GET abaixo busca por id
app.get("/countries/:id", (req: Request, res: Response) => {

    const result = countries.find(
        (country)=> {return country.id === Number(req.params.id)}
     )
     if (result) {
        res.status(200).send(result)
     } else {
        res.status(404).send("Not found")
     }
})


//Exercicio 3  - busca os paises com filtros 

app.get("/countries/search", (req: Request, res: Response)=>{
    let result: country[] = countries
 
    if (req.query.name) {
       result = result.filter(
          country => country.name.includes(req.query.name as string)
       )
    }
    
    if (req.query.capital) {
       result = result.filter(
          country => country.capital.includes(req.query.capital as string)
       )
    }
    
    if (req.query.continent) {
       result = result.filter(
          country => country.continent.includes(req.query.continent as string)
       )
    }
       if(result.length) {
      res.status(200).send(result)
    }else {
      res.status(404).send('Erro ao tentar fazer requisição')
    }
 })




app.listen (3003, ()=>{
    console.log("servidor pronto!")
})