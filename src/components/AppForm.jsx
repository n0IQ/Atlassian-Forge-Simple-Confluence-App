import ForgeUI, { Fragment, useState, TextField, Form, Text, Button, useEffect } from '@forge/ui'

const AppForm = () => {
    const [formData, setFormData] = useState(null);
    const [isFormFilled, setIsFormFilled] = useState(false);

    const onSubmit = (data) => {
      // console.log("Form Data", data);
      setFormData(data);
      setIsFormFilled(true);
    }

    const goBack = () => {
      setFormData(null);
      setIsFormFilled(false);
    }

  return (
    <Fragment>
      {isFormFilled ? (
        <Fragment>
          <Text>Hello, {formData && formData.name}</Text>
          <Button onClick={goBack} text='Go Back'></Button>
        </Fragment>
      ) : (
        <Fragment> 
          <Text>Simple Forge Form</Text>
          <Form onSubmit={onSubmit}>
           <TextField label='Name' name='name'/>
         </Form>
       </Fragment>
      )}
    </Fragment>
  )
}

export default AppForm