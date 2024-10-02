import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // renderiza o componente
    const { container } = render(<Main />)
    // busca o elemento e verifica a existência dele
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    // snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
