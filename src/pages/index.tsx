import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Flex, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';

import Head from 'next/head';
import { useRouter } from 'next/router';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigátorio').email('E-mail inválido'),
  password: yup.string().required('Senha obrigátoria')
});

export default function SignIn() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema)
  });

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    router.push('/dashboard');
  };

  return (
    <>
      <Head>
        <title>Login | Dashgo</title>
      </Head>

      <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
        <Flex
          as="form"
          w="100%"
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDirection="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">
            <Input
              name="email"
              type="email"
              label="E-mail"
              error={errors.email}
              {...register('email')}
            />
            <Input
              name="password"
              type="password"
              label="Senha"
              error={errors.password}
              {...register('password')}
            />
          </Stack>

          <Button
            type="submit"
            mt="6"
            colorScheme="orange"
            size="lg"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
