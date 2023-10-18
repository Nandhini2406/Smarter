import { StyleSheet } from "react-native";
import { theme } from "../../../Assets/colors/bgTheme";

export const styles = StyleSheet.create({
    container:{ 
        flex: 1, alignItems: 'center', marginVertical: 10 },
    image:{ 
        width: 250, height: 360, marginVertical: 20 },
    title:{
        color: 'white',
        fontWeight: '500',
        fontSize: 20,
        // padding: 10,
        marginHorizontal: 10,
    },
    text:{},
    prize:{
        color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    },
    rating:{
        fontSize: 18,
        marginTop: 5,
        backgroundColor: 'white',
        paddingHorizontal: 5,
        borderRadius: 5,
    },
    description:{
        color: 'white',
        fontWeight: '500',
        fontSize: 20,
        padding: 10,
    },
});