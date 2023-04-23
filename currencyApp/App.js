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
import Snackbar from "react-native-snackbar";
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
    const buttonPressed=(currency)=>
    {
        if(!inputValue)
        {
            Snackbar.show({
                text:"Please enter a value",
                duration:Snackbar.LENGTH_SHORT,
                backgroundColor:"#625C5C",
                textColor:"#FFFFFF",

            });
        }
        let result = parseFloat(inputValue)*currencyPerLira[currency];
        setResultValue(result.toFixed(2));
    }
    return(
        <>
            <ScrollView backgroundColor="#f2d2c8"
            keyboardShouldPersistTaps="handled"
            contentInsetAdjustmentBehavior="automatic"
            >
                <SafeAreaView style= {styles.container}>
                    <View style={styles.resultContainer}>
                    <Text style={styles.resultVal}>
                        {resultValue}
                    </Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.inputVal} 
                        keyboardType="numeric" 
                        placeholder="Enter Value"
                        placeholderTextColor="#a29c74"
                        value={inputValue}
                        onChangeText={(inputValue)=>setInputValue(inputValue)}>
                            
                        </TextInput>
                    </View>
                    <View style={styles.convertButtonContainer}>
                        {Object.keys(currencyPerLira).map((currency)=>(<TouchableOpacity key={currency} style={styles.converterButton} onPress={buttonPressed(cu
                        )
                        }>
                            <Text style={styles.convertButtonText}>
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
    converterButton:{
        alignItems:"center",
        justifyContent:"center",
        height:100,
        backgroundColor:"#98c9cc",
        width:"33.3%",
        marginTop:5,
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
    convertButtonText:{
        color:"#FFFFFF",
        fontSize:15,
        fontWeight: "bold",
    }
})