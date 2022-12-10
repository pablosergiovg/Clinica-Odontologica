import { fireEvent, render, screen } from '@testing-library/react'
import Form from '../Components/Form'

describe('Form component', () => {
    let inputName;
    let inputEmail;
    let button;
    beforeEach(() => {
        render(<Form />);
        inputName = screen.getByLabelText('Nombre completo');
        inputEmail = screen.getByLabelText('Email');
        button = screen.getByRole('button', { name: 'Enviar' })
    })

    test('Verifica que el valor del campo "nombreCompleto" cambie tras el input del usuario', async () => {
        fireEvent.change(inputName, {
            target: { value: 'Andrés' }
        })
        expect(inputName.value).toBe('Andrés')
    })

    test('Verifica que el formulario envíe la información de los inputs', async () => {
        fireEvent.change(inputName, {
            target: { value: 'Andrés' }
        })
        fireEvent.change(inputEmail, {
            target: { value: '8il.andre@gmail.com' }
        })
        fireEvent.click(button)

        const formRes = await screen.findByText(/Gracias Andrés, te contactaremos cuanto antes vía email/i)
        expect(formRes).toBeInTheDocument()
    })
})