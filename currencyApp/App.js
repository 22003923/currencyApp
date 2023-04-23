import React,{ useState } from "react"
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native"
const currencyPerLira={
    DOLLAR: 0.052,
    EURO: 0.046,
    POUND: 0.041,
    RUSSIAN_RUBLE: 4.20,
    AUD: 0.077,
    CAD: 0.070,
    YEN: 6.92,
    DIRHAM: 0.19,
    BITCOIN: 0.0000019,
}
const App=()=>
{
    const[inputValue, setInputValue]=useState(0);
    const[resultValue,setResultValue]=useState(0);
    return(
        <>
            <ScrollView backgroundColor="#f2d2c8">
                <SafeAreaView style= {styles.container}>
                    <View style={styles.resultContainer}>
                    <Text style={styles.resultVal}>
                        Result
                    </Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.inputVal} 
                        keyboardType="numeric" 
                        placeholder="Enter Value"
                        placeholderTextColor="#a29c74">

                        </TextInput>
                    </View>
                    <View style={styles.convertButtonContainer}>
                        {Object.keys(currencyPerLira).map((currency)=>(<TouchableOpacity>
                            <Text style={styles.temp}>
                                {currency}
                            </Text>
                        </TouchableOpacity>))}
                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    );
};
export default App;
const styles=StyleSheet.create({
    container: {
        flex:1,
    },
    resultContainer:{
        height: 70,
        marginTop:80,
        justifyContent:"center",
        alignItems:"center",
    },
    resultVal:{
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center",
        color:"#FFFFFF",
    },
    inputContainer:{
        height: 70,
        marginTop:10,
        justifyContent:"center",
        alignItems:"center",
    },
    inputVal:{
        fontSize:30,
        textAlign:"center",
        fontWeight:"bold",
        color:"#FFFFFF",
    },
    convertButtonContainer:
    {
        flexDirection:"row",
        flexWrap:"wrap",
        marginTop:10,
    },
    temp:{
        color:"#FFFFFF"
    }
})