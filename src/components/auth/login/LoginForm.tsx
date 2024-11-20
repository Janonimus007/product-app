import React, { useState } from "react";
import { useFormik } from "formik";
import { Box, Button, FormControl, Input, VStack, Text, Icon, Pressable,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { initialValues, validationSchema } from "./LoginForm.data";
import { styles } from "./LoginForm.styles";
import axios from 'axios';
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { ToastError } from "../../global/toast/ToastError";
// import  ToastError  from "../../global/toast/ToastError";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {

        console.log("Formulario enviado con éxito:", formValues);
        const response = await axios.post('https://fakestoreapi.com/auth/login', {
          username: formValues.username, 
          password: formValues.password, 
        });
    
        console.log('Respuesta del servidor:', response.data);

      } catch (error :any) {
        console.log("este es el error -> ", error.message);
        ToastError('Usuario o contraseña incorrectos')
      }
    },
  });

  return (
    <Box  style={styles.containerForm}>
      <VStack >

        <Text style={styles.titleForm}>Iniciar sesion</Text>

        <FormControl style={styles.inputContainer} isInvalid={!!formik.errors.username}>
          <FormControl.Label >Nombre de usuario</FormControl.Label>
          <Input
            placeholder="EJ: janonimus007"
            value={formik.values.username}
            onChangeText={(value) => formik.setFieldValue("username", value)}
          />
          {formik.errors.username && (
            <FormControl.ErrorMessage>
              {formik.errors.username}
            </FormControl.ErrorMessage>
          )}
        </FormControl>

        <FormControl style={styles.inputContainer}  isInvalid={!!formik.errors.password}>
          <FormControl.Label >Contraseña</FormControl.Label>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Introduce tu contraseña"
            value={formik.values.password}
            onChangeText={(value) => formik.setFieldValue("password", value)}
            InputRightElement={
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <Icon
                  as={<MaterialIcons name={showPassword ? "visibility" : "visibility-off"} />}
                  size={5}
                  mr={2}
                  color="muted.400"
                />
              </Pressable>
            }
          />
          {formik.errors.password && (
            <FormControl.ErrorMessage>
              {formik.errors.password}
            </FormControl.ErrorMessage>
          )}
        </FormControl>

        <Button style={styles.buttonForm} onPress={()=>formik.handleSubmit()} >
          Iniciar Sesión
        </Button>            

      </VStack>
    </Box>
  );
};
