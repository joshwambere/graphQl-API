import express  from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/index.js";



const app = express(),PORT=3000;


app.use('/graphql',graphqlHTTP({
 schema,
 graphiql:true
}))
app.listen(PORT,()=>{
 console.log(`server running on port ${PORT}`);
})

export default app;