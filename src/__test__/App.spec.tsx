import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'

describe('<App />', () => {
    it('should display properly', () => {
        const { getByText } = render(<App />)

        expect(getByText('Hello Vite + React!')).toBeInTheDocument()
    });
});