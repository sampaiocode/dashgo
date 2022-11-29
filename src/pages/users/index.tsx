import { useQuery } from 'react-query';
import * as Chakra from '@chakra-ui/react';

import Link from 'next/link';
import Head from 'next/head';

import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

export default function UserList() {
  const { data, isLoading, error } = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users');
    const data = response.json();

    return data;
  });

  console.log(data);

  const isWideVersion = Chakra.useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <>
      <Head>
        <title>Lista de Usúarios | Dashgo</title>
      </Head>

      <Chakra.Box>
        <Header />

        <Chakra.Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />

          <Chakra.Box flex="1" bg="gray.800" p="8" borderRadius={8}>
            <Chakra.Flex mb="8" justify="space-between" align="center">
              <Chakra.Heading size="lg" fontWeight="normal">
                Usuários
              </Chakra.Heading>

              <Link href="/users/create" passHref>
                <Chakra.Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="orange"
                  leftIcon={<Chakra.Icon as={RiAddLine} fontSize="20" />}
                >
                  Criar novo
                </Chakra.Button>
              </Link>
            </Chakra.Flex>

            {isLoading ? (
              <Chakra.Flex justify="center">
                <Chakra.Spinner />
              </Chakra.Flex>
            ) : error ? (
              <Chakra.Flex justify="center">
                <Chakra.Text>Falha ao obter dados dos usuários.</Chakra.Text>
              </Chakra.Flex>
            ) : (
              <>
                <Chakra.Table colorScheme="whiteAlpha">
                  <Chakra.Thead>
                    <Chakra.Tr>
                      <Chakra.Th color="gray.300" width="8" px={['4', '4', '6']}>
                        <Chakra.Checkbox colorScheme="orange" />
                      </Chakra.Th>
                      <Chakra.Th>Usuário</Chakra.Th>
                      {isWideVersion && <Chakra.Th>Data de cadastro</Chakra.Th>}
                      <Chakra.Th width="8"></Chakra.Th>
                    </Chakra.Tr>
                  </Chakra.Thead>

                  <Chakra.Tbody>
                    <Chakra.Tr>
                      <Chakra.Td px={['4', '4', '6']}>
                        <Chakra.Checkbox colorScheme="orange" />
                      </Chakra.Td>
                      <Chakra.Td>
                        <Chakra.Box>
                          <Chakra.Text fontWeight="bold">Deivit Eduardo</Chakra.Text>
                          <Chakra.Text fontSize="sm" color="gray.300">
                            eduardoalmeida5547@gmail.com
                          </Chakra.Text>
                        </Chakra.Box>
                      </Chakra.Td>
                      {isWideVersion && <Chakra.Td>01 de Outubro, 2022</Chakra.Td>}
                      <Chakra.Td>
                        <Chakra.Button
                          as="a"
                          size="sm"
                          fontSize="sm"
                          colorScheme="green"
                          iconSpacing={isWideVersion ? '1.5' : '-0.5'}
                          leftIcon={<Chakra.Icon as={RiPencilLine} fontSize="16" />}
                        >
                          {isWideVersion && 'Editar'}
                        </Chakra.Button>
                      </Chakra.Td>
                    </Chakra.Tr>

                    <Chakra.Tr>
                      <Chakra.Td px={['4', '4', '6']}>
                        <Chakra.Checkbox colorScheme="orange" />
                      </Chakra.Td>
                      <Chakra.Td>
                        <Chakra.Box>
                          <Chakra.Text fontWeight="bold">Deivit Eduardo</Chakra.Text>
                          <Chakra.Text fontSize="sm" color="gray.300">
                            eduardoalmeida5547@gmail.com
                          </Chakra.Text>
                        </Chakra.Box>
                      </Chakra.Td>
                      {isWideVersion && <Chakra.Td>01 de Outubro, 2022</Chakra.Td>}
                      <Chakra.Td>
                        <Chakra.Button
                          as="a"
                          size="sm"
                          fontSize="sm"
                          colorScheme="green"
                          iconSpacing={isWideVersion ? '1.5' : '-0.5'}
                          leftIcon={<Chakra.Icon as={RiPencilLine} fontSize="16" />}
                        >
                          {isWideVersion && 'Editar'}
                        </Chakra.Button>
                      </Chakra.Td>
                    </Chakra.Tr>

                    <Chakra.Tr>
                      <Chakra.Td px={['4', '4', '6']}>
                        <Chakra.Checkbox colorScheme="orange" />
                      </Chakra.Td>
                      <Chakra.Td>
                        <Chakra.Box>
                          <Chakra.Text fontWeight="bold">Deivit Eduardo</Chakra.Text>
                          <Chakra.Text fontSize="sm" color="gray.300">
                            eduardoalmeida5547@gmail.com
                          </Chakra.Text>
                        </Chakra.Box>
                      </Chakra.Td>
                      {isWideVersion && <Chakra.Td>01 de Outubro, 2022</Chakra.Td>}
                      <Chakra.Td>
                        <Chakra.Button
                          as="a"
                          size="sm"
                          fontSize="sm"
                          colorScheme="green"
                          iconSpacing={isWideVersion ? '1.5' : '-0.5'}
                          leftIcon={<Chakra.Icon as={RiPencilLine} fontSize="16" />}
                        >
                          {isWideVersion && 'Editar'}
                        </Chakra.Button>
                      </Chakra.Td>
                    </Chakra.Tr>
                  </Chakra.Tbody>
                </Chakra.Table>
                <Pagination />
              </>
            )}
          </Chakra.Box>
        </Chakra.Flex>
      </Chakra.Box>
    </>
  );
}
