import React, { useState, FormEvent } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import {
  GET_USERS,
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
} from '../queries/queries'
import {
  GetUsersQuery,
  CreateUserMutation,
  DeleteUserMutation,
  UpdateUserMutation,
} from '../types/generated/graphql'
import Layout from '../components/Layout'

const HasuraCRUD: React.FC = () => {
  const { data, error } = useQuery<GetUsersQuery>(GET_USERS, {
    fetchPolicy: 'cache-and-network',
  })

  return (
    <Layout title="HasuraCRUD">
      <p className="mb-3 font-bold">Hasura CRUD</p>
    </Layout>
  )
}

export default HasuraCRUD
