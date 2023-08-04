var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export const  signUpStyle = StyleSheet.create({
    container: {
      width: width,
      height: height,
      backgroundColor: 'white',
      padding: 40,
      flex: 1,
      marginLeft: 'auto',
      marginRight: 'auto',
      justifyContent: 'center', 
    },
    title: {
      paddingTop: 7,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 2.5,
      marginTop: 5,
      color: '#999999',
      fontWeight: 'bold',
    },
    highlight: {
      paddingTop: 7,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 2.5,
      marginTop: 5,
      color: '#cc0000',
      fontWeight: 'bold',
    },
    pwErr: {
      flex: 1,
      paddingTop: 7,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 2.5,
      marginTop: 5,
      color: '#cc0000',
      fontWeight: 'bold',
      textAlign: 'right',
    },
    pwPass: {
      flex: 1,
      paddingTop: 7,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 2.5,
      marginTop: 5,
      color: '#3f6ad7',
      fontWeight: 'bold',
      textAlign: 'right',
    },
    form: {
      height: 50,
      borderColor: '#d9d9d9',
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      paddingLeft: 15,
    },
    formAge: {
      flexDirection: 'row',
      paddingLeft: 30,
    },
    fxForm: {
      height: 50,
      borderColor: '#d9d9d9',
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      paddingLeft: 15,
      marginLeft: 30,
      width: 135,
    },
    fx: {
      flexDirection: 'row',
    },
    radioText: {
      padding: 7,
      paddingLeft: 3,
      color: '#999999',
    },
    btn: {
      textAlign: 'center',
      paddingTop: 15,
      paddingBottom: 15,
      marginTop: 20,
      color: 'white',
      backgroundColor: '#6487b7',
      borderRadius: 5,
      fontSize: 15,
    },
    active: {
      textAlign: 'center',
      paddingTop: 15,
      paddingBottom: 15,
      marginTop: 20,
      color: 'white',
      backgroundColor: '#1c4587',
      borderRadius: 5,
      fontSize: 15,
    },
    signUpErr: {
      paddingTop: 7,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 2.5,
      marginTop: 5,
      color: '#cc0000',
      fontWeight: 'bold',
      textAlign: 'right',
    },
  })