import {
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
// import theme from "././theme";

export default function Order() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box isOpen={isOpen}>
        <Box onMouseEnter={onOpen} onMouseLeave={onClose} h="100vh"></Box>
        <Drawer
          placement="left"
          onClose={onClose}
          isOpen={isOpen}
          // size="xs"
        >
          <DrawerOverlay />
          <DrawerContent
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            maxW="10vh"
          >
            <DrawerHeader borderBottomWidth="1px">Hover Drawer</DrawerHeader>
            <DrawerBody>
              <p>Some ...</p>
              <p>Some ...</p>
              <p>Some ...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}
