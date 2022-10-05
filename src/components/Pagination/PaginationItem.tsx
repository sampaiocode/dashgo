import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
}

export function PaginationItem({ isCurrent = false, number }: PaginationItemProps) {
  if (isCurrent) {
    return (
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
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      w="4"
      fontSize="xs"
      bg="gray.700"
      _hover={{
        bg: 'gray.500'
      }}
    >
      {number}
    </Button>
  );
}
