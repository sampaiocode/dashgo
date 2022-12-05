import {
  useBreakpointValue,
  Flex,
  Text,
  Heading,
  Button,
  Icon,
  Spinner,
  Table,
  Thead,
  Tr,
  Th,
  Checkbox,
  Tbody,
  Td,
  Box
} from '@chakra-ui/react';

import Link from 'next/link';
import Head from 'next/head';

import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

import { useUsers } from '../../hooks/useUsers';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

export default function UserList() {
  const { data, isLoading, isFetching, error } = useUsers();

  console.log(data);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <>
      <Head>
        <title>Lista de Usúarios | Dashgo</title>
      </Head>

      <Box>
        <Header />

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />

          <Box flex="1" bg="gray.800" p="8" borderRadius={8}>
            <Flex mb="8" justify="space-between" align="center">
              <Heading size="lg" fontWeight="normal">
                Usuários
                {!isLoading && isFetching && <Spinner size="sm" ml="4" color="gray.500" />}
              </Heading>

              <Link href="/users/create" passHref>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="orange"
                  leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                >
                  Criar novo
                </Button>
              </Link>
            </Flex>

            {isLoading ? (
              <Flex justify="center">
                <Spinner />
              </Flex>
            ) : error ? (
              <Flex justify="center">
                <Text>Falha ao obter dados dos usuários.</Text>
              </Flex>
            ) : (
              <>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th color="gray.300" width="8" px={['4', '4', '6']}>
                        <Checkbox colorScheme="orange" />
                      </Th>
                      <Th>Usuário</Th>
                      {isWideVersion && <Th>Data de cadastro</Th>}
                      <Th width="8"></Th>
                    </Tr>
                  </Thead>

                  <Tbody>
                    {data.map(user => {
                      return (
                        <Tr key={user.id}>
                          <Td px={['4', '4', '6']}>
                            <Checkbox colorScheme="orange" />
                          </Td>
                          <Td>
                            <Box>
                              <Text fontWeight="bold">{user.name}</Text>
                              <Text fontSize="sm" color="gray.300">
                                {user.email}
                              </Text>
                            </Box>
                          </Td>
                          {isWideVersion && <Td>{user.createdAt}</Td>}
                          <Td>
                            <Button
                              as="a"
                              size="sm"
                              fontSize="sm"
                              colorScheme="green"
                              iconSpacing={isWideVersion ? '1.5' : '-0.5'}
                              leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                            >
                              {isWideVersion && 'Editar'}
                            </Button>
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>

                <Pagination totalCountOfRegisters={200} currentPage={5} onPageChange={() => {}} />
              </>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  );
}
