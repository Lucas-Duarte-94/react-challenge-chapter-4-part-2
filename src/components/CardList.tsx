import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onOpen, onClose } = useDisclosure()

  // TODO SELECTED IMAGE URL STATE
  const [selectedImageURL, setSelectedImageURL] = useState("");

  // TODO FUNCTION HANDLE VIEW IMAGE
  function handleViewImage(url: string) {
    setSelectedImageURL(url)
    onOpen()
  }

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid gap={"40px"} templateColumns="auto auto auto">
        {cards?.map(card => {
          return (
            <Card key={card.id} data={card} viewImage={handleViewImage} />
          )
        })}
      </SimpleGrid>

      {/* TODO MODALVIEWIMAGE */}
      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={selectedImageURL} />
    </>
  );
}
