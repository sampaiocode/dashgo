import { Flex, Icon, Input } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

export function SearchBox() {
  return (
    <Flex
      as="label"
      maxW={400}
      color="gray.200"
      bg="gray.800"
      py="4"
      px="8"
      ml="6"
      borderRadius="full"
      position="relative"
      flex="1"
      alignSelf="center"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{
          color: 'gray.400'
        }}
      />

      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
