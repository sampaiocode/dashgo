import { Box, Button, Stack } from '@chakra-ui/react';

export function Pagination() {
  return (
    <Stack direction="row" mt="8" spacing="6" align="center" justify="space-between">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack direction="row" spacing="2">
        <Button
          size="sm"
          w="4"
          fontSize="xs"
          colorScheme="orange"
          disabled
          _disabled={{
            bgColor: 'orange.500',
            cursor: 'default'
          }}
        >
          1
        </Button>

        <Button
          size="sm"
          w="4"
          fontSize="xs"
          bg="gray.700"
          _hover={{
            bg: 'gray.500'
          }}
        >
          2
        </Button>

        <Button
          size="sm"
          w="4"
          fontSize="xs"
          bg="gray.700"
          _hover={{
            bg: 'gray.500'
          }}
        >
          3
        </Button>
      </Stack>
    </Stack>
  );
}
