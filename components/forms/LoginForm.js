/* eslint-disable */
import * as React from 'react';
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  HStack,
  Button,
} from 'native-base';
import {useState, useEffect, useRef} from 'react';
const LoginForm = ({navigation}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    conformPassword: '',
  });
  const passwordFocus = useRef();
  const ConformpasswordFocus = useRef();
  const signupBtnFocus = useRef();
  const [errors, setErrors] = useState({
    gernal: {
      visible: false,
      Message: '',
    },
    emailErr: {
      visible: false,
      Message: '',
    },
    passwordErr: {
      visible: false,
      Message: '',
    },
    conformPasswordErr: {
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
        conformPasswordErr: {
          visible: false,
          Message: '',
        },
        emailErr: {
          visible: false,
          Message: '',
        },
        passwordErr: {
          visible: false,
          Message: '',
        },
      });
    });
  }, [navigation]);
  const [visiblity, setVisiblity] = useState({
    vPass: false,
    vConformPass: false,
  });
  const changePassVisiblity = () => {
    setVisiblity({...visiblity, vPass: !visiblity.vPass});
  };
  const changeConformPassVisiblity = () => {
    setVisiblity({...visiblity, vConformPass: !visiblity.vConformPass});
  };
  const [regexForEmail, setRegexForEmail] = useState(
    /^[A-Za-z_0-9]{3,}@[A-Za-z_0-9]{3,}[.][A-Za-z.]{2,}$/,
  );
  const [regexForPassword, setRegexForPassword] = useState(
    /^(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,16}$/,
  );

  const validate = () => {
    if (
      !formData.email.length &&
      !formData.password.length &&
      !formData.conformPassword.length
    ) {
      setErrors({
        ...errors,
        gernal: {
          visible: true,
          Message: 'All Field Must Be field',
        },
        emailErr: {
          visible: false,
        },
        passwordErr: {
          visible: false,
        },
        conformPasswordErr: {
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
        passwordErr: {
          visible: false,
        },
        conformPasswordErr: {
          visible: false,
        },
      });
      return false;
    } else if (!regexForPassword.test(formData.password)) {
      setErrors({
        ...errors,
        passwordErr: {
          visible: true,
          Message:
            'Invalid Password | Password Should Contain atleast one character',
        },
        gernal: {
          visible: false,
        },
        emailErr: {
          visible: false,
        },
        conformPasswordErr: {
          visible: false,
        },
      });
      return false;
    } else if (formData.password != formData.conformPassword) {
      setErrors({
        ...errors,
        conformPasswordErr: {
          visible: true,
          Message: 'Password And Conformed Password Should be match',
        },
        gernal: {
          visible: false,
        },
        emailErr: {
          visible: false,
        },
        passwordErr: {
          visible: false,
        },
      });
      return false;
    }

    return true;
  };
  const loginUser = () => {
    if (validate()) {
      console.log('Submitted');
      cleanField();
    }
    console.log('Validation Failed');
  };

  const cleanField = () => {
    setFormData({...formData.email});
    setFormData({...formData.password});
    setFormData({...formData.conformPassword});
    setErrors({
      ...errors,
      gernal: {
        visible: false,
        Message: '',
      },
      conformPasswordErr: {
        visible: false,
        Message: '',
      },
      emailErr: {
        visible: false,
        Message: '',
      },
      passwordErr: {
        visible: false,
        Message: '',
      },
    });
  };
  return (
    <Box safeArea p="2" py="8" w="90%" maxW="290">
      <Heading
        size="lg"
        fontWeight="600"
        color="coolGray.800"
        textAlign="center"
        _dark={{
          color: 'warmGray.50',
        }}>
        Welcome Back
      </Heading>
      <Heading
        mt="1"
        _dark={{
          color: 'warmGray.200',
        }}
        color="coolGray.600"
        fontWeight="medium"
        textAlign="center"
        size="xs">
        Sign in to continue in TODO APP!
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
        <FormControl isRequired>
          <FormControl.Label>Password</FormControl.Label>
          <Input
            type={visiblity.vPass ? 'text' : 'password'}
            value={formData.password}
            onChangeText={text => setFormData({...formData, password: text})}
            ref={passwordFocus}
            returnKeyType="next"
            onSubmitEditing={() => {
              ConformpasswordFocus.current.focus();
            }}
            blurOnSubmit={false}
            InputRightElement={
              <Button
                size="xs"
                rounded="none"
                w="1/6"
                h="full"
                onPress={() => changePassVisiblity()}>
                {visiblity.vPass ? 'Hide' : 'Show'}
              </Button>
            }
          />
        </FormControl>
        {errors.passwordErr.visible && (
          <Text style={{color: 'red'}} fontSize="xs">
            {errors.passwordErr.Message}
          </Text>
        )}
        <FormControl isRequired>
          <FormControl.Label>Conform Password</FormControl.Label>
          <Input
            type={visiblity.vConformPass ? 'text' : 'password'}
            ref={ConformpasswordFocus}
            returnKeyType="next"
            onSubmitEditing={() => {
              signupBtnFocus.current.focus();
            }}
            blurOnSubmit={false}
            InputRightElement={
              <Button
                size="xs"
                rounded="none"
                w="1/6"
                h="full"
                onPress={() => changeConformPassVisiblity()}>
                {visiblity.vConformPass ? 'Hide' : 'Show'}
              </Button>
            }
            value={formData.conformPassword}
            onChangeText={text =>
              setFormData({...formData, conformPassword: text})
            }
          />

          <Link
            _text={{
              fontSize: 'xs',
              fontWeight: '500',
              color: 'indigo.500',
            }}
            alignSelf="flex-end"
            mt="1"
            onPress={() => navigation.navigate('ResetPassword')}>
            Forget Password?
          </Link>
        </FormControl>
        {errors.conformPasswordErr.visible && (
          <Text style={{color: 'red'}} fontSize="xs">
            {errors.conformPasswordErr.Message}
          </Text>
        )}
        <Button
          mt="2"
          colorScheme="indigo"
          ref={signupBtnFocus}
          onPress={() => loginUser()}>
          Sign in
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text
            fontSize="sm"
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}>
            I'm a new user.{' '}
          </Text>
          <Link
            _text={{
              color: 'indigo.500',
              fontWeight: 'medium',
              fontSize: 'sm',
            }}
            onPress={() => navigation.navigate('SignUp')}>
            Sign Up
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default LoginForm;
