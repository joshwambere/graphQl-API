import { GraphQLObjectType,GraphQLInt,GraphQLString } from "graphql"

const userType = new GraphQLObjectType({
 name:'user',
 fields: ()=>({
  id: {type: GraphQLInt},
  first_name: {type: GraphQLString},
  last_name: {type: GraphQLString},
  city: {type: GraphQLString},
  gender: {type: GraphQLString},
  email: {type: GraphQLString},
  ip_address: {type: GraphQLString}
  
 })
})

export default userType