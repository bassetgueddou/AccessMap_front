import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center'
      },
      formInput: {
        borderColor: '#575DFB',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 22,
        width: 340,
        padding: 10,
        margin: 10,
        paddingLeft: 48,
        fontSize: 20,
      },
      formButton: {
        backgroundColor: '#575DFB',
        width: 340,
        padding: 12,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 30
      },
      textButton: {
        color:'white',
        fontSize: 20,
        fontWeight: 'bold',
      },
      connect: {
        color: '#575DFB',
        fontSize: 30,
        fontWeight: 'bold'
      },
      connectYou: {
        position: 'absolute',
        top: 60,
        left: 29
      },
      btnGoogleContinue: {
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 2,
        width: 340,
        height: 50,
        marginBottom: 35,
      },
      imgGoogle: {
        height: 20,
        width: 20,
        position: 'absolute',
        left: 60,
        bottom: 15,
      },
      txtGoogleContinue: {
        textAlign: 'center',
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 15,
        left: 95
      },
      flexRow: {
        flexDirection: 'row',
      }, 
      login: {
        color: '#575DFB',
        textDecorationLine: 'underline',
      },
      marginBottom: {
        marginBottom: 30,
      },
      label: {
        marginRight: 'auto',
        marginLeft: 18
      },
      emailLabel:{
        marginRight: 'auto',
        marginLeft: 18,
        marginTop: 13
      },
      forgot: {
        color: '#575DFB',
        textDecorationLine: 'underline',
        marginRight: 'auto',
        marginLeft: 18
      },
      imgInput:{
        position: 'absolute',
        left: 25,
        bottom: 23,
        height: 20,
        width: 20
      }
});
