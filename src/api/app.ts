import {Supplier} from "../bl/Supplier";
import { Application } from "express";

const express = require('express')
const app: Application = express()

const supplier = new Supplier();

app.get('/', (req, res)=>{
    res.send(supplier.getNamedFile());
})

app.listen(3000, ()=> console.log("server is up!"))