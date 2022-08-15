import React from 'react'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_USERS } from '../queries/queries'
import { GetUsersQuery } from '../types/generated/graphql'
import Layout from '../components/Layout'

const FetchMain: React.FC = () => {
  return <div>hasura-main</div>
}

export default FetchMain
