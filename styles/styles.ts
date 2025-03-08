import { StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';

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
        marginRight: 40,
        
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
        
        width: 200,
        height: 50,
        
        paddingHorizontal: 10,
    },
    BtnEsqueciSenha:{
        justifyContent: "flex-end",
        flexDirection: "row",
        marginTop: 10,
    },
    BtnTextEsqueciSenha:{
        fontSize: 14,
        color: '#0097E2',
        fontFamily: 'Montserrat-Regular'
    },
    BtnAcessar:{
        backgroundColor: '#0097E2',
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        marginTop: 15,
    },
    BtnTextAcessar:{
        color: 'white',
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Montserrat-Regular"
    },
    BtnTextCadastro:{
        fontSize: 16,
        color: '#0097E2',
        fontFamily: 'Montserrat-Regular'
    },
    LabelConfirmeSenha:{
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        marginTop: 8,
        marginBottom: 5,
    },
    ContainerSuperiorHome:{
        flex: 2,
        backgroundColor: '#0097E2',
        justifyContent: "center",
        alignItems: "center",
    },
    ContainerPrincipalHome:{
        flex: 1,
        
        justifyContent: 'center',
    },
    ContainerLista:{
        flex: 2,
        backgroundColor: '#FBF7F4',
        
    },
    BtnPonto:{
        width: 60,
        height: 60,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: "center",
        marginBottom: 50,
    },
    LabelData:{
        fontFamily: 'Montserrat-Regular',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FBF7F4'
    },
    ContainerLabelRing:{
        flexDirection: 'row',
        marginTop: 44,
    },
    LabelNome:{
        fontFamily: 'Montserrat-Regular',
        fontSize: 24,
        marginRight: 56,
    },
    containerCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
        
    },
    card:{
        width: 200,
        
        alignItems: "center",
        justifyContent: "center"
    },
    LabelCard:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: '100%'
    },
    ProgressBar:{
        height: 10,
        marginTop: 10,
        borderRadius: 15
    },
    SolicitacaoItem:{
        borderColor: '#D6D6D6',
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        gap: 10,
        marginBottom: 10
    },
    ContainerStatus:{
        
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderColor: "#D6D6D6",
        borderWidth: 1,
        gap: 10
    }
})