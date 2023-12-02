import { useEffect, useRef, useState } from 'react';
import { styled } from 'nativewind';
import { View, Text, Pressable, Dimensions, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { Ionicons } from "@expo/vector-icons";

export function FeedItem({ data, currentVisible }){

    const { height: heightScreen } = Dimensions.get("screen");


    const StyledView = styled(View);
    const StyledText= styled(Text);
    const StyledButton = styled(TouchableOpacity);

    const video = useRef(null)
    const [status, setStatus] = useState({})

    function handlePlayer(){
        status.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync();
    }

    useEffect(() => {
        if(currentVisible?.id === data?.id){
            video.current?.playAsync();
        }else {
            video.current?.pauseAsync();
        }
    }, [currentVisible])

    return (

            <Pressable onPress={handlePlayer}>
                
                <Video
                    ref={video}
                    style={{width: '100%', height: heightScreen - 130}}
                    source={{uri: data?.video}}
                    resizeMode='cover'
                    shouldPlay={false}
                    isMuted={false}
                    isLooping={true}
                    onPlaybackStatusUpdate={ status => setStatus(() => status) }
                />
            
                <StyledView className='absolute z-50 bottom-10 mb-2'>
                    <StyledText className='text-white font-bold mb-1 mr-3'>{data?.name}</StyledText>
                    <StyledText className='text-white font-bold mb-1 mr-3' numberOfLines={2}>{data?.description}</StyledText>
                </StyledView>

                <StyledView className='absolute right-5 bottom-20 z-50 gap-3'>
                    <StyledButton className='items-center'>
                        <Ionicons name='heart' color="#fff" size={35} />
                        <StyledText className='text-white'>300k</StyledText>
                    </StyledButton>

                    <StyledButton className='items-center'>
                        <Ionicons name='chatbubble-ellipses' color="#fff" size={35} />
                        <StyledText className='text-white'>20k</StyledText>
                    </StyledButton>

                    <StyledButton className='items-center'>
                        <Ionicons name='bookmark' color="#fff" size={35} />
                    </StyledButton>
                </StyledView>

            </Pressable>
      
    )
}