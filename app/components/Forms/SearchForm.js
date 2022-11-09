import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  Stack,
  Box,
  FormLabel,
  DrawerCloseButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
  DrawerFooter,
  Checkbox,
  CheckboxGroup,
} from '@chakra-ui/react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDisclosure } from '@chakra-ui/react';

function SearchDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  return (
    <>
      <FontAwesomeIcon
        icon={faSearch}
        onClick={onOpen}
        size='lg'
        cursor='pointer'
      />
      <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
        size='md'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Search any Recipes
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                <FormLabel htmlFor='username'>Recipe</FormLabel>
                <Input
                  ref={firstField}
                  id='username'
                  placeholder='Please enter recipe'
                />
              </Box>

              {/* <Box>
                <FormLabel htmlFor='url'>Url</FormLabel>
                <InputGroup>
                  <InputLeftAddon>http://</InputLeftAddon>
                  <Input
                    type='url'
                    id='url'
                    placeholder='Please enter domain'
                  />
                  <InputRightAddon>.com</InputRightAddon>
                </InputGroup>
              </Box> */}

              <Box>
                <FormLabel htmlFor='owner'>Select Cuisine</FormLabel>
                <Select id='owner' defaultValue='segun'>
                  <option value='segun'>Italian</option>
                  <option value='kola'>Jamaica</option>
                  <option value='kola'>Indian</option>
                  <option value='kola'>Indonesian</option>
                  <option value='kola'>Pakistan</option>
                  <option value='kola'>African</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor='owner'>Select Diet</FormLabel>
                <Select id='owner' defaultValue='segun'>
                  <option value='segun'>Vegetarian</option>
                  <option value='kola'>Vegan</option>
                  <option value='kola'>Primal</option>
                  <option value='kola'>Gluten Free</option>
                  <option value='kola'>Ketogenic</option>
                </Select>
              </Box>

              <Box>
                <CheckboxGroup colorScheme='green'>
                  <Checkbox value=''>Add Recipe Information</Checkbox>
                  <br />
                  <br />
                  <Checkbox value=''>Add Recipe Nutrition</Checkbox>
                </CheckboxGroup>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme=''
              color='white'
              variant='solid'
              background='black'
            >
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SearchDrawer;
