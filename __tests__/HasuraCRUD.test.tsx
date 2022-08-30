/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect'
import { render, screen, cleanup } from '@testing-library/react'
import { getPage, initTestHelpers } from 'next-page-tester'
import { setupServer } from 'msw/node'
import { handlers } from '../mock/handlers'

initTestHelpers()

const server = setupServer(...handlers)

beforeAll(() => {
  server.listen()
})
afterEach(() => {
  server.resetHandlers()
  cleanup()
})
afterAll(() => {
  server.close()
})

describe('Hasura CRUD Test Cases', () => {
  it('Should render the list of users by useQuery', async () => {
    const { page } = await getPage({
      route: '/hasura-crud',
    })
    render(page)
    expect(await screen.findByText('Hasura CRUD')).toBeInTheDocument()
    expect(await screen.findByText('Test user A')).toBeInTheDocument()
    expect(
      screen.getByText('2022-08-03T06:18:56.088532+00:00')
    ).toBeInTheDocument()
    expect(
      screen.getByTestId('edit-59097f69-85da-4722-b6ba-7cdd4d75cd5d')
    ).toBeTruthy()
    expect(
      screen.getByTestId('delete-59097f69-85da-4722-b6ba-7cdd4d75cd5d')
    ).toBeTruthy()
    expect(await screen.findByText('Test user B')).toBeInTheDocument()
    expect(
      screen.getByText('2022-08-03T06:19:10.526506+00:00')
    ).toBeInTheDocument()
    expect(
      screen.getByTestId('edit-8e720edc-c289-4351-bb29-40ddfc3b01f6')
    ).toBeTruthy()
    expect(
      screen.getByTestId('delete-8e720edc-c289-4351-bb29-40ddfc3b01f6')
    ).toBeTruthy()
    expect(await screen.findByText('Test user C')).toBeInTheDocument()
    expect(
      screen.getByText('2022-08-03T06:19:18.623051+00:00')
    ).toBeInTheDocument()
    expect(
      screen.getByTestId('edit-ba1d2cf6-6a0f-43e1-91b1-dfc1da8d1c40')
    ).toBeTruthy()
    expect(
      screen.getByTestId('delete-ba1d2cf6-6a0f-43e1-91b1-dfc1da8d1c40')
    ).toBeTruthy()
  })
})
