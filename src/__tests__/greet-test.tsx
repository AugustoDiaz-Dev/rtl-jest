import { render, screen } from '@testing-library/react'
import { Greet } from '../components/greet/greet'

/**  Greet should render the text hello and if a name is passed into the component it should render hello followed by the name. */

// Test Driven Development
describe('Greet', () => {
    test('renders correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText('Hello');
        expect(textElement).toBeInTheDocument()
    })

    describe('Nested', () => {
        test('renders with a name', () => {
            render(<Greet name='Augusto' />)
            const textElement = screen.getByText('Hello Augusto')
            expect(textElement).toBeInTheDocument()
        })
    })

})
