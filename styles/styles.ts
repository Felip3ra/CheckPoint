import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: '#0097E2',
        justifyContent: 'center',
    },
    Logo:{
        width: 390,
        height: 293,
    },
    ContainerBackground:{
        flex: 2,
        backgroundColor: '#FBF7F4',
        borderTopLeftRadius: 70,
        
    },
    ContainerInput:{
        marginLeft: 53,
        backgroundColor: 'red',
        flex: 1,
    },
    ContainerLogo:{
        flex: 1,
        backgroundColor: '#0097E2',
        justifyContent: "center",
        alignItems: "center",
    },
    LogoLogin:{
        width: 324,
        height: 243,
    },
    ContainerLogin:{
        flex: 1,
        backgroundColor: '#0097E2',
        
    },
    LabelEmail:{
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        marginTop: 55,
        marginBottom: 5,
    },
    LabelSenha:{
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        marginTop: 8,
        marginBottom: 5,
    },
    TextBox:{
        backgroundColor: '#EDEDED',
        width: 319,
        height: 50,
        borderRadius: 8,
        paddingHorizontal: 10,
    }
})