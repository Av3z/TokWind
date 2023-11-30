import { Entypo } from '@expo/vector-icons'
import { styled } from 'nativewind'
import { View } from 'react-native'


export function ButtonNew({ size }){

    const StyledView = styled(View)

    return (
        <StyledView className="border-4 rounded-xl border-l-cyan-500 border-r-pink-500">
            <StyledView className="bg-white p-1 rounded-sm">
                <Entypo name="plus" size={size} color="#000" />
            </StyledView>
        </StyledView>
    )
}