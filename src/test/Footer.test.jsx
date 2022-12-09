import  '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Footer from '../Components/Footer'

describe('Form component', () => {

    let button;
    beforeEach(() => {
        render(<Footer />);
        button = screen.getByRole('button', { name: 'VOLVER HACIA ARRIBA' })
    })

    test('Verifica que el formulario envíe la información de los inputs', async () => {
        fireEvent.click(button)

        const formRes = await screen.findByText(/Gracias Andrés, te contactaremos cuanto antes vía email/i)
        expect(formRes).toBeInTheDocument()
    })

})

// ** Footer **
// 1) Que el botón toTop me lleve a top: 0
// 2) Que los links a las redes sociales me lleven a la página correcta

// ** Card **
// 1) Que a la card le estén llegando bien los props { name, username, id }
// 2) Que se renderice el dentista con los valores correctos (crear un objeto dentista que al pasar por props renderice sus propiedades)
// 3) Que al hacer click en el botón la función esFavorito(id) cambie su valor entre el corazón rojo y el blanco



// JavascriptExecutor executor = (JavascriptExecutor) driver;
// Long value = (Long) executor.executeScript("return window.pageYOffset;");