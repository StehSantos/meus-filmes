import react from "react";
import{View, Text, TextInput, TouchableOpacity,StyleSheet} from 'react-native';
   
export default function Home (){
        return(

        <View style={styles.container}>
            <Text style={styles.titulo}> Meus Filmes</Text>
            <Text style={styles.subtitulo}> Olá Steh, boa noite!</Text>

            <TextInput  style={styles.campo}
                placeholder="Nome do Filme"/>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Adicionar</Text>
                </TouchableOpacity>

           
        </View>

        );
        }
// Criando os estilos
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#836FFF',
        paddingVertical:70,
        paddingHorizontal:20
    },

    titulo:{
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom:10,
        alignSelf: 'center'
    },

    subtitulo:{
        color:'#FFF',
        fontSize:30,
    },

    campo:{
        backgroundColor: '#1F1E25',
        color:'#FFF',
        fontSize:18,
        marginTop:30,
        borderRadius:7,
        padding:15
    },

    button:{
        backgroundColor: '#A370F7',
        padding:15,
        borderRadius:7,
        alignItems: 'center',
        marginTop:10
    },
    buttonText:{
        color: '#FFF',
        fontSize:17,
        fontWeight:'bold'
    },
}); //fim dos estilos



