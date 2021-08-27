import { Box, Flex, Text, Avatar } from '@chakra-ui/react'
export function Profile() {
  return (
    <Flex align="center">
    <Box mr="4" textAlign="right">
      <Text>Nicolas Barcellos</Text>
      <Text color="gray.300" fontSize="small">
        nicolasbarcellos95@gmail.com
      </Text>
    </Box>
    <Avatar
      size="md"
      name="Nicolas Barcellos"
      src="https://github.com/nicolasbarcellos.png"
    />
  </Flex>
  )
}
