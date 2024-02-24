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
      },
      textButton: {
        color:'white',
        fontSize: 20,
        fontWeight: 'bold',
      },
      connect: {
        color: '#575DFB',
        fontSize: 30,
        fontWeight: 'bold',
        position: 'absolute',
        top: 20,
        left: 29
      },
      connectYou: {
        position: 'absolute',
        top: 60,
        left: 29,
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
      labelHandicap:{
        marginRight: 'auto',
        marginLeft: 18,
        position: 'absolute',
        top : 56
      },
      imgInput:{
        position: 'absolute',
        left: 25,
        bottom: 23,
        height: 20,
        width: 20
      }, 
      picker: {
        position: 'absolute',
        top: 330
      }, 
      viewPassword: {
        marginBottom : 170
      },
      viewNom: {
        marginTop: 70
      }
});
