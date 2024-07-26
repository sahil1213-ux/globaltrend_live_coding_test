import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
// import {Formik} from 'formik';
import {Formik} from 'formik';
import {} from 'yup';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  name: Yup.string().required('Name is required'),
});

export default function SignUp() {
  return (
    <Formik
      initialValues={{email: '', password: '', name: ''}}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log(values);
      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View>
          <TextInput
            placeholder="Enter the Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {touched.email && errors.email && <Text>{errors.email}</Text>}

          <TextInput
            placeholder="Enter the Password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
          />
          {touched.password && errors.password && (
            <Text>{errors.password}</Text>
          )}
          <TextInput
            placeholder="Enter the Name"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />
          {touched.name && errors.name && <Text>{errors.name}</Text>}

          <Button title="Register" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
}
