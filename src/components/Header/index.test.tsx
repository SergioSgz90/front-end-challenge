import { render } from '@testing-library/react'
import { Header } from '../../components/Header/index'

// gherkins - GWT

describe('Given the component Header', () => {
    describe('When the component is rendered', () => {
        test('Then screen should have an image alt', () => {
            render(
                <Header appTitle={''}>
                    <p></p>
                </Header>
            )
            const img = screen.getByAltText()
            expect(img).toBeInTheDocument()
        })