import  '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Card from '../Components/Card'

describe('Form component', () => {

    const odontologo = {
        id: "1",
        name: "Andrés",
        username: "sufriendoTesting"
    }
    beforeEach(() => {
        render(<Card />);
        button = screen.getByRole('button', { name: 'VOLVER HACIA ARRIBA' })
    })

    test('Verifica que el formulario envíe la información de los inputs', async () => {
        fireEvent.click(button)

        const formRes = await screen.findByText(/Gracias Andrés, te contactaremos cuanto antes vía email/i)
        expect(formRes).toBeInTheDocument()
    })

})


// 1. TESTEAS QUE EL COMPONENTE SE ESTÉ RENDERIZANDO Y ESTÉ ASUMIENDO LAS PROPS.
test('renders content', () => {
    const note = {
      content: 'Testing con Create React App',
      important: true
    }
  
    const { container } = render(
      <Note note={note} />
    )
    //EVALUAR EL CONTENIDO DE UN COMPONENTE
    //1.
    expect(container).toHaveTextContent(
      'Testing con Create React App'
    )
    //ACCEDE Y EVALÚA UN ELEMENTO DENTRO DEL COMPONENTE.
    const Button = screen.getByRole("button", {
      name: "make not important"
    })
    expect(Button).toHaveTextContent("make not important")
  
  })