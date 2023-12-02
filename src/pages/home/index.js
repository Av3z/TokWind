import { View, Text, TouchableOpacity, FlatList } from "react-native"
import { styled } from "nativewind"
import { FeedItem } from "../../components/FeedItem";
import { useState, useRef } from "react";

export function Home(){

    const StyledView = styled(View);
    const StyledText = styled(Text);
    const StyledButton = styled(TouchableOpacity);

    let feedItems = [ 
        {
          id: '1', 
          video: 'https://i.imgur.com/Cnz1CPK.mp4',
          name: '@sujeitoprogramador',
          description: 'Criando o ShortDev do zero com RN',
         },
        {
          id: '2', 
          video: 'https://i.imgur.com/E0tK2bY.mp4',
          name: '@henriquesilva',
          description: 'Fala turma, estou aprendendo React Native com sujeito programador',
         },
        {
          id: '3', 
          video: 'https://i.imgur.com/mPFvFyX.mp4',
          name: '@sujeitoprogramador',
          description: 'Aprendendo a trabalhar com Drag and Drop no React Native',
         }
      ]

      const [showItem, setShowItem] = useState(feedItems[0]);

      const onViewRef = useRef(({ viewableItems }) => {

        if(viewableItems && viewableItems.length > 0 ){
            setShowItem(feedItems[viewableItems[0].index])
            console.log(showItem)
        }
      });

    return(
        <StyledView className="bg-black">
            <StyledView className="flex-row items-center justify-center right-0 left-0 top-10 gap-2 mt-5 z-50">
                <StyledButton>
                    <StyledText className="text-white font-bold mb-1">Seguindo</StyledText>
                </StyledButton>

                <StyledButton>
                    <StyledText className="text-white font-bold mb-1">Pra você</StyledText>
                    <StyledView className="self-center bg-white h-1 w-4"></StyledView>
                </StyledButton>
            </StyledView>

            <FlatList 
                data={feedItems}
                renderItem={ ({item}) => <FeedItem data={item} currentVisible={showItem}/>}
                onViewableItemsChanged={onViewRef.current}
            />
        </StyledView>
    )
}