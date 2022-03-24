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
const SignUpForm = ({navigation}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    address: '',
    phone: '',
    password: '',
    conformPassword: '',
  });
  const lastNameFocus = useRef();
  const userNameFocus = useRef();
  const addressFocus = useRef();
  const phoneFocus = useRef();
  const passwordFocus = useRef();
  const ConformpasswordFocus = useRef();
  const signupBtnFocus = useRef();
  const emailFocus = useRef();

  const [errors, setErrors] = useState({
    gernal: {
      visible: false,
      Message: '',
    },
    firstName: {
      visible: false,
      Message: '',
    },
    lastName: {
      visible: false,
      Message: '',
    },
    userName: {
      visible: false,
      Message: '',
    },
    phone: {
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
        firstName: {
          visible: false,
          Message: '',
        },
        lastName: {
          visible: false,
          Message: '',
        },
        userName: {
          visible: false,
          Message: '',
        },
        phone: {
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
  const [regexForName, setRegexForName] = useState(
    /^[A-Za-z_0-9]{3,}@[A-Za-z_0-9]{3,}[.][A-Za-z.]{2,}$/,
  );
  const [phoneRegex, setPhoneRegex] = useState(
    /^[A-Za-z_0-9]{3,}@[A-Za-z_0-9]{3,}[.][A-Za-z.]{2,}$/,
  );
  const [regexForEmail, setRegexForEmail] = useState(
    /^[A-Za-z_0-9]{3,}@[A-Za-z_0-9]{3,}[.][A-Za-z.]{2,}$/,
  );
  const [regexForPassword, setRegexForPassword] = useState(
    /^(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,16}$/,
  );

  const validate = () => {
    if (
      formData.email.length &&
      !formData.email.length &&
      formData.password.length &&
      !formData.password.length &&
      formData.firstName.length &&
      !formData.firstName.length &&
      formData.lastName.length &&
      !formData.lastName.length &&
      formData.username.length &&
      !formData.username.length &&
      formData.address.length &&
      !formData.address.length
    ) {
      setErrors({
        ...errors,
        gernal: {
          visible: true,
          Message: 'All Field Must Be field',
        },
        firstName: {
          visible: false,
        },
        lastName: {
          visible: false,
        },
        userName: {
          visible: false,
        },
        phone: {
          visible: false,
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
    } else if (
      !regexForName.test(formData.firstName) ||
      !regexForName.test(formData.lastName) ||
      !regexForName.test(formData.username)
    ) {
      setErrors({
        ...errors,
        gernal: {
          visible: false,
        },
        firstName: {
          visible: !regexForName.test(formData.firstName) ? true : false,
          Message: !regexForName.test(formData.firstName)
            ? 'Invalid FirstName'
            : '',
        },
        lastName: {
          visible: !regexForName.test(formData.lastName) ? true : false,
          Message: !regexForName.test(formData.lastName)
            ? 'Invalid Lastname'
            : '',
        },
        userName: {
          visible: !regexForName.test(formData.username) ? true : false,
          Message: !regexForName.test(formData.username)
            ? 'Invalid username'
            : '',
        },
        phone: {
          visible: false,
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
    } else if (!regexForName.test(formData.phone)) {
      setErrors({
        ...errors,
        gernal: {
          visible: false,
        },
        firstName: {
          visible: false,
        },
        lastName: {
          visible: false,
        },
        userName: {
          visible: false,
        },
        phone: {
          visible: true,
          Message: 'Invalid Phone Number',
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
        firstName: {
          visible: false,
        },
        lastName: {
          visible: false,
        },
        userName: {
          visible: false,
        },
        phone: {
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
        firstName: {
          visible: false,
        },
        lastName: {
          visible: false,
        },
        userName: {
          visible: false,
        },
        phone: {
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
        firstName: {
          visible: false,
        },
        lastName: {
          visible: false,
        },
        userName: {
          visible: false,
        },
        phone: {
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
  const signupUser = () => {
    if (validate()) {
      console.log('I got all req data Submitted');
      cleanField();
    } else {
      123456;
      console.log('Validation Failed');
    }
  };

  const cleanField = () => {
    setFormData({...formData.firstName});
    setFormData({...formData.lastName});
    setFormData({...formData.username});
    setFormData({...formData.address});
    setFormData({...formData.phone});
    setFormData({...formData.email});
    setFormData({...formData.password});
    setFormData({...formData.conformPassword});
    setErrors({
      ...errors,
      gernal: {
        visible: false,
        Message: '',
      },
      firstName: {
        visible: false,
        Message: '',
      },
      lastName: {
        visible: false,
        Message: '',
      },
      userName: {
        visible: false,
        Message: '',
      },
      phone: {
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
          <FormControl.Label>First Name</FormControl.Label>
          <Input
            value={formData.firstName}
            onChangeText={text => setFormData({...formData, firstName: text})}
            returnKeyType="next"
            onSubmitEditing={() => {
              lastNameFocus.current.focus();
            }}
            blurOnSubmit={false}
          />
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label>Last Name</FormControl.Label>
          <Input
            value={formData.lastName}
            onChangeText={text => setFormData({...formData, lastName: text})}
            returnKeyType="next"
            onSubmitEditing={() => {
              userNameFocus.current.focus();
            }}
            blurOnSubmit={false}
          />
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label>Username</FormControl.Label>
          <Input
            value={formData.username}
            onChangeText={text => setFormData({...formData, username: text})}
            returnKeyType="next"
            onSubmitEditing={() => {
              addressFocus.current.focus();
            }}
            blurOnSubmit={false}
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Address</FormControl.Label>
          <Input
            value={formData.address}
            onChangeText={text => setFormData({...formData, address: text})}
            returnKeyType="next"
            onSubmitEditing={() => {
              phoneFocus.current.focus();
            }}
            blurOnSubmit={false}
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Phone</FormControl.Label>
          <Input
            value={formData.phone}
            onChangeText={text => setFormData({...formData, phone: text})}
            returnKeyType="next"
            onSubmitEditing={() => {
              emailFocus.current.focus();
            }}
            blurOnSubmit={false}
          />
        </FormControl>
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
          onPress={() => signupUser()}>
          Sign Up
        </Button>
      </VStack>
    </Box>
  );
};

export default SignUpForm;
