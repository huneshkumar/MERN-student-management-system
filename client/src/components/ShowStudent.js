import {
  Heading,
  Select,
  Flex,
  Spinner,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Table, Tbody, Td, Thead, Tr } from "@chakra-ui/table";
import React, { useState, useCallback } from "react";
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Input } from "@chakra-ui/input";

function ShowStudent(props) {
  const [Delete, setDelete] = useState(false);
  const [update, setUpdate] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  // const onDrop = useCallback(acceptedFiles => {
  //     // Do something with the files
  // }, [])
  // const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <>
      <Stack
        h="100vh"
        alignItems="center"
        justify="start"
        p="20px"
        w="100%"
        spacing="3"
      >
        <Flex
          w="100%"
          display="flex"
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <Text fontSize="30px" fontWeight="700">
            Student Data
          </Text>
          <HStack alignSelf="flex-end">
            <Button
              onClick={() => {
                onOpen();
                setUpdate(false);
              }}
              w="193px"
              border="1px solid #8D8C90"
              bg="black"
              fontWeight="800"
              fontSize="16px"
              color="white"
              cursor="pointer"
              _hover={{ color: "black", background: "transparent" }}
              mt="40px"
            >
              Create New
            </Button>
          </HStack>
        </Flex>
        <Table size="sm" variant="unstyled">
          <Thead>
            <Tr bg="black" color="white" fontSize="13px" fontWeight="700">
              <Td border="0.75px solid #9A9A9A">ID</Td>
              <Td border="0.75px solid #9A9A9A">Name</Td>
              <Td border="0.75px solid #9A9A9A">Grade</Td>
            </Tr>
          </Thead>
          <Tbody>
            <Tr cursor="pointer" onClick={onOpen} >
              <Td
                border="0.75px solid #9A9A9A"
                fontSize="13px"
                fontWeight="700"
              >
                id
              </Td>
              <Td
                border="0.75px solid #9A9A9A"
                fontSize="13px"
                fontWeight="700"
              >
                name
              </Td>
              <Td
                border="0.75px solid #9A9A9A"
                fontSize="13px"
                fontWeight="700"
              >
                grade
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <Button
          bg="black"
          w="193px"
          h="41px"
          border="1px solid #9A9A9A"
          mr={4}
          color="white"
          fontSize="16px"
          fontWeight="800"
        >
          Signout
        </Button>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered={true}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Stack>
              <Text fontSize="30px" fontWeight="700">
                {update === true ? "Update Activity" : "Create New Activity"}
              </Text>
              <SimpleGrid columns={3} gap={5}>
                {/* column 1 */}
                <Stack spacing={4}>
                  <HStack>
                    <Text fontSize="13px" w="300px" textAlign="end">
                      Student ID
                    </Text>
                    <Input
                      h="50px"
                      disabled={true}
                      border="0.75px solid #9A9A9A"
                      borderRadius="none"
                    />
                  </HStack>
                  <HStack>
                    <Text fontSize="13px" w="300px" textAlign="end">
                      Student Name
                    </Text>
                    <Input
                      h="50px"
                      border="0.75px solid #9A9A9A"
                      borderRadius="none"
                    />
                  </HStack>

                  <HStack align="start">
                    <Text fontSize="13px" w="300px" textAlign="end">
                      Student Grade
                    </Text>
                    <Input
                      h="50px"
                      border="0.75px solid #9A9A9A"
                      borderRadius="none"
                    />
                  </HStack>
                </Stack>
              </SimpleGrid>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              bg="transparent"
              w="193px"
              h="41px"
              border="1px solid #9A9A9A"
              mr={4}
              color="#9A9A9A"
              fontSize="16px"
              fontWeight="800"
              onClick={onClose}
            >
              Cancel
            </Button>

            {update === true ? (
              <HStack>
                <Button
                  bg="black"
                  w="193px"
                  h="41px"
                  border="1px solid #9A9A9A"
                  mr={4}
                  color="white"
                  fontSize="16px"
                  fontWeight="800"
                >
                  Update
                </Button>
              </HStack>
            ) : (
              <Button
                bg="black"
                w="193px"
                h="41px"
                border="1px solid #9A9A9A"
                mr={4}
                color="white"
                fontSize="16px"
                fontWeight="800"
              >
                Save
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ShowStudent;
