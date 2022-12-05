import React from "react";
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from "yup"

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  let valoresIniciales = {
    nombre: '',
    email: ''
  }

  const enviarForm = ( data) => {
    console.log(data);
    alert(`Gracias ${data.nombre}, te contactaremos cuanto antes vía email`)
  }

  const esquemaContacto = Yup.object({
    nombre: Yup.string().min(5, "El nombre debe tener más de 5 letras").required("Debe ingresar un nombre válido"),
    email: Yup.string().email("Debe ingresar un email válido").required("Debe ingresar un email válido")
  })

  const {handleSubmit, handleChange, values, errors} = useFormik({
    initialValues: valoresIniciales,
    onSubmit: enviarForm,
    validationSchema: esquemaContacto
  })

  return (
    <div className="form-container">
      <Typography color='primary' variant='h3' align='center'>Formulario de contacto</Typography>
      <form action="" className="form-container" onSubmit={handleSubmit}>
        <Grid container direction='row' alignItems={'center'} justifyContent='space-evenly' spacing={2} sx={{ width: '100%' }}>
          <Grid item xs={12} md={9}>
            <TextField type='text' name='nombre' label="Nombre completo" values={values.nombre} onChange={ handleChange } error={!!errors?.nombre} helperText={errors.nombre} variant='outlined' fullWidth/>
          </Grid>
          <Grid item xs={12} md={9}>
            <TextField type='email' name='email' label="Email" values={values.email} onChange={ handleChange } error={!!errors?.email} helperText={errors.email} variant='outlined' fullWidth/>
          </Grid>
        </Grid>
        <Button type="submit" variant="contained">Enviar</Button>
      </form>
    </div>
  );
};

export default Form;
