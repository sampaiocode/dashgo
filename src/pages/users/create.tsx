import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import { Input } from '../../components/Form/Input';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

export default function CreateUser() {
  return (
    <>
      <Head>
        <title>Criar usuário | Dashgo</title>
      </Head>

      <Box>
        <Header />

        <Flex w="100%" my="6" mx="auto" px="6" maxW={1480}>
          <Sidebar />

          <Box bg="gray.800" p="8" borderRadius={8} flex="1">
            <Heading size="lg" fontWeight="normal">
              Criar usuário
            </Heading>

            <Divider borderColor="gray.700" my="6" />

            <VStack spacing="8">
              <SimpleGrid minChildWidth="248px" spacing="8" w="100%">
                <Input name="name" label="Nome completo" />
                <Input name="email" type="email" label="E-mail" />
              </SimpleGrid>

              <SimpleGrid minChildWidth="248px" spacing="8" w="100%">
                <Input name="password" type="password" label="Senha" />
                <Input name="password" type="password" label="Confirmação da senha" />
              </SimpleGrid>
            </VStack>

            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                <Button colorScheme="whiteAlpha">Cancelar</Button>
                <Button colorScheme="orange">Salvar</Button>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
