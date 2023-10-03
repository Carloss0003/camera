import { StatusBar, Text, View } from "react-native";

export default function App(){
  return(
    <View>
      <StatusBar hidden={true}/>
      <Text>Olá mundo</Text>
    </View>
  )
}