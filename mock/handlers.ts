import { graphql } from 'msw'

export const handlers = [
  graphql.query('GetUsers', (req, res, ctx) => {
    return res(
      ctx.data({
        users: [
          {
            __typename: 'users',
            id: '59097f69-85da-4722-b6ba-7cdd4d75cd5d',
            name: 'Test user A',
            created_at: '2022-08-03T06:18:56.088532+00:00',
          },
          {
            __typename: 'users',
            id: '8e720edc-c289-4351-bb29-40ddfc3b01f6',
            name: 'Test user B',
            created_at: '2022-08-03T06:19:10.526506+00:00',
          },
          {
            __typename: 'users',
            id: 'ba1d2cf6-6a0f-43e1-91b1-dfc1da8d1c40',
            name: 'Test user C',
            created_at: '2022-08-03T06:19:18.623051+00:00',
          },
        ],
      })
    )
  }),
]
