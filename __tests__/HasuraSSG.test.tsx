/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

describe('SSG Test Cases', () => {
  it('Should render the list of users pre-fetched by getStaticProps', async () => {
    const { page } = await getPage({
      route: '/hasura-ssg',
    })
    render(page)
    expect(await screen.findByText('SSG+ISR')).toBeInTheDocument()
    expect(screen.getByText('Test user A')).toBeInTheDocument()
    expect(screen.getByText('Test user B')).toBeInTheDocument()
    expect(screen.getByText('Test user C')).toBeInTheDocument()
    userEvent.click(
      screen.getByTestId('link-59097f69-85da-4722-b6ba-7cdd4d75cd5d')
    )
    expect(await screen.findByText('User detail')).toBeInTheDocument()
    expect(
      screen.getByText('ID :59097f69-85da-4722-b6ba-7cdd4d75cd5d')
    ).toBeInTheDocument()
    expect(screen.getByText('Test user A')).toBeInTheDocument()
    expect(
      screen.getByText('2022-08-03T06:18:56.088532+00:00')
    ).toBeInTheDocument()
    expect(screen.getByTestId('back-to-main')).toBeTruthy()
  })
})
