import { Container, Text, VStack, Heading, Input, Textarea, Button, Box } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddNote = () => {
    if (title.trim() && content.trim()) {
      setNotes([...notes, { title, content }]);
      setTitle("");
      setContent("");
    }
  };

  return (
    <Container centerContent maxW="container.md" py={10} bg="solarizedLight.bg" color="solarizedLight.text">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Note Taking App</Heading>
        <Input 
          placeholder="Note Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          bg="solarizedLight.inputBg" 
          color="solarizedLight.inputText" 
          _placeholder={{ color: "solarizedLight.placeholder" }}
        />
        <Textarea 
          placeholder="Note Content" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          bg="solarizedLight.inputBg" 
          color="solarizedLight.inputText" 
          _placeholder={{ color: "solarizedLight.placeholder" }}
        />
        <Button bg="primary" color="solarizedLight.buttonText" onClick={handleAddNote}>Add Note</Button>
        <Box width="100%" mt={10}>
          {notes.map((note, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" mb={4} bg="solarizedLight.noteBg" color="solarizedLight.noteText">
              <Heading as="h3" size="md">{note.title}</Heading>
              <Text mt={2}>{note.content}</Text>
            </Box>
          ))}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;