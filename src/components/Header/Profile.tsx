import { Avatar, Text, Box, Flex } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Deivit Eduardo</Text>
          <Text color="gray.300" fontSize="small">
            eduardoalmeida5547@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Deivit Eduardo" src="https://github.com/sampaiocode.png" />
    </Flex>
  );
}
