import React from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

const App = () => {

    const [numero, setNumero] = useState(10);

    function handleNumero() {

        const novoNumero = Math.floor(Math.random() * 10);
        setNumero(novoNumero);

    }

    return (
        <SafeAreaView style={style.container}>
            <Text style={style.numero}>{numero}</Text>
            <TouchableOpacity onPress={handleNumero} style={style.botao}>
                <Text>Gerar número aleatório</Text>
            </TouchableOpacity>
        </SafeAreaView>

    );

};

const style = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        fontSize: 24,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numero: {
        fontSize: 38,
        color: 'pink',
        fontWeight: 'bold',
    },
    botao: {
        backgroundColor: 'pink',
        width: '80%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
})

export default App;
