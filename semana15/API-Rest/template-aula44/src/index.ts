import express, { Request, Response } from "express";
import cors from "cors";

type User = {
  id: number;
  name: string;
  email: string;
  type: string;
  age: number;
};

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: "ADMIN",
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: "NORMAL",
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: "NORMAL",
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: "NORMAL",
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: "ADMIN",
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: "ADMIN",
    age: 60,
  },
];

const app = express();
app.use(express.json());
app.use(cors());

//Exercicio 1 - busca os usuarios na lista
app.get("/users", (req: Request, res: Response) => {
  let codeError: number = 400;
  try {
    const name: string = req.query.name as string;
    const user: User | undefined = users.find((user) => user.name === name);
    if (!user) {
      codeError = 404;
      throw new Error("User not found");
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(codeError).send({ message: error.message });
  }
});


app.get("/users", (req: Request, res: Response) => {
  let codeError = 400;
  try {
    const id: number = Number(req.params.id);
    if (isNaN(id)) {
      codeError = 422;
      throw new Error("Invalid value for id. Please send a number");
    }
    const user = users.find((user) => {
      return user.id === id;
    });
    if (!user) {
      codeError = 404;
      throw new Error("User not found");
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(codeError).send({ message: error.message });
  }
});

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!");
});

app.listen(3003, () => {
  console.log("Server is running at port 3003");
});
