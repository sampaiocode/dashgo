import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue
} from '@chakra-ui/react';
import Head from 'next/head';

import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

export default function UserList() {
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
              </Heading>

              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="orange"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Flex>

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
                <Tr>
                  <Td px={['4', '4', '6']}>
                    <Checkbox colorScheme="orange" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Deivit Eduardo</Text>
                      <Text fontSize="sm" color="gray.300">
                        eduardoalmeida5547@gmail.com
                      </Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>01 de Outubro, 2022</Td>}
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

                <Tr>
                  <Td px={['4', '4', '6']}>
                    <Checkbox colorScheme="orange" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Deivit Eduardo</Text>
                      <Text fontSize="sm" color="gray.300">
                        eduardoalmeida5547@gmail.com
                      </Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>01 de Outubro, 2022</Td>}
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

                <Tr>
                  <Td px={['4', '4', '6']}>
                    <Checkbox colorScheme="orange" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Deivit Eduardo</Text>
                      <Text fontSize="sm" color="gray.300">
                        eduardoalmeida5547@gmail.com
                      </Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>01 de Outubro, 2022</Td>}
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
              </Tbody>
            </Table>

            <Pagination />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
