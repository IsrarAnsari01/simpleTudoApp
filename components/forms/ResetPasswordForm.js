/* eslint-disable */
import * as React from 'react';
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
} from 'native-base';
import {useState, useEffect} from 'react';
const ResetPasswordForm = ({navigation}) => {
  const [formData, setFormData] = useState({
    email: '',
  });
  const [errors, setErrors] = useState({
    gernal: {
      visible: false,
      Message: '',
    },
    emailErr: {
      visible: false,
      Message: '',
    },
  });
  useEffect(() => {
    navigation.addListener('focus', () => {
      setErrors({
        ...errors,
        gernal: {
          visible: false,
          Message: '',
        },
        emailErr: {
          visible: false,
          Message: '',
        },
      });
    });
  }, [navigation]);
  const [regexForEmail, setRegexForEmail] = useState(
    /^[A-Za-z_0-9]{3,}@[A-Za-z_0-9]{3,}[.][A-Za-z.]{2,}$/,
  );

  const validate = () => {
    if (!formData.email.length) {
      setErrors({
        ...errors,
        gernal: {
          visible: true,
          Message: 'Password Field Must be field',
        },
        emailErr: {
          visible: false,
        },
      });
      return false;
    } else if (!regexForEmail.test(formData.email)) {
      setErrors({
        ...errors,
        emailErr: {
          visible: true,
          Message: 'Invalid Email Address',
        },
        gernal: {
          visible: false,
        },
      });
      return false;
    }
    return true;
  };
  const resetPassword = () => {
    if (validate()) {
      console.log('Submitted');
      cleanField();
    }
    console.log('Validation Failed');
  };

  const cleanField = () => {
    setFormData({...formData.email});
    setErrors({
      ...errors,
      gernal: {
        visible: false,
        Message: '',
      },
      emailErr: {
        visible: false,
        Message: '',
      },
    });
  };
  return (
    <Box safeArea p="2" py="8" w="90%" maxW="290">
      <Heading
        size="lg"
        fontWeight="400"
        color="coolGray.800"
        textAlign="center"
        _dark={{
          color: 'warmGray.50',
        }}>
        Loss Password!
      </Heading>
      <Heading
        mt="1"
        _dark={{
          color: 'warmGray.200',
        }}
        color="coolGray.600"
        fontWeight="300"
        textAlign="center"
        size="xs">
        Enter Your Email Address we will send you Your new Password
      </Heading>
      <VStack space={3} mt="5">
        {errors.gernal.visible && (
          <Heading
            mt="1"
            _dark={{
              color: 'warmGray.200',
            }}
            color="error.500"
            fontWeight="medium"
            textAlign="center"
            size="xs">
            {errors.gernal.Message}
          </Heading>
        )}
        <FormControl isRequired>
          <FormControl.Label>Email ID</FormControl.Label>
          <Input
            value={formData.email}
            onChangeText={text => setFormData({...formData, email: text})}
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordFocus.current.focus();
            }}
            blurOnSubmit={false}
          />
        </FormControl>
        {errors.emailErr.visible && (
          <Text style={{color: 'red'}} fontSize="xs">
            {errors.emailErr.Message}
          </Text>
        )}
        <Button mt="2" colorScheme="indigo" onPress={() => resetPassword()}>
          Send Mail
        </Button>
      </VStack>
    </Box>
  );
};

export default ResetPasswordForm;
