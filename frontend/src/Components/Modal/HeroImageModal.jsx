import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useToast } from '@chakra-ui/react'
export default function HeroImageModal() {
  const [imageURL, setImageURL] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
const [loading,setLoading]= useState(false)
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const toast = useToast()
  const handleImageURL = (e) => {
    e.preventDefault();
    setLoading(true)
    console.log(imageURL);
    axios
      .post("http://localhost:3113/changeHeroImage",{ imageURL })
      .then((res) => {
        console.log(res);
        setLoading(false)
        toast({
            title: 'Image Changed.',
            description: "We've changed hero image for homepage.",
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
     {!loading? <Button colorScheme="cyan"
       onClick={onOpen}>Change Hero Image</Button>:<Spinner
       thickness='4px'
       speed='0.65s'
       emptyColor='gray.200'
       color='blue.500'
       size='xl'
     />}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Enter URL for hero image..</FormLabel>
              <Input
                value={imageURL}
                onChange={(e) => setImageURL(e.target.value)}
                placeholder="Hero image url"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={(e) => {
                handleImageURL(e);
                onClose();
              }}
              colorScheme="blue"
              mr={3}
            >
              Change
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
