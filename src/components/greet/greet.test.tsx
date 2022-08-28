import { render, screen } from '@testing-library/react'
import { Greet } from './greet'

/**  Greet should render the text hello and if a name is passed into the component it should render hello followed by the name. */

// Test Driven Development
describe('Greet', () => {
    test('renders correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText(/Hello/i);
        expect(textElement).toBeInTheDocument()
    })
})
