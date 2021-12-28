import { GraphQLObjectType,GraphQLInt,GraphQLString,GraphQLSchema,GraphQLList} from "graphql";
import userType from "../types/user.js";
import * as mock from '../mocks/MOCK_DATA.json'

const mainQuery = new GraphQLObjectType({
 name:'queryType',
 fields:{
  getAllUser: {
   type: new GraphQLList(userType),
   args: {id: {type: GraphQLInt}},
   resolve(parent,args){
     return mock.default;
   }
  }
 }
});

const mutation =  new GraphQLObjectType({
 name:'mutation',
 fields:{
  createUser:{
   type: userType,
   args: {
    first_name: { type: GraphQLString},
    last_name: { type: GraphQLString},
    city: { type: GraphQLString},
    gender: { type: GraphQLString},
    email: {type: GraphQLString},
    ip_address: {type: GraphQLString}
   },
   resolve(parent,args){
    
    mock.default.push({
     id:mock.default.length+1,
     first_name:args.first_name, 
     last_name:args.last_name,
     city:args.city,
     gender:args.gender,
     email:args.email,
     ip_address: args.ip_address
    });
    return args
   }
  }
 }
});

const schema = new GraphQLSchema({query:mainQuery, mutation});
export default schema