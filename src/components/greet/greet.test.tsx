import { render, screen } from '@testing-library/react'
import { Greet } from './greet'

test('Greet renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText(/Hello Augusto!/i)
    expect(textElement).toBeInTheDocument()
});