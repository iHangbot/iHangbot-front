import axios from 'axios';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, Image } from 'react-native';

function Login({navigation}) {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [btnStyle, setBtnStyle] = useState(loginStyle.btn);
  const [loginErr, setLoginErr] = useState(false);

  const loginInfo = {
    "username": id, 
    "password": pw,
  }

  useEffect(() => {
    (id !== "") && (pw !== "") 
    ? setBtnStyle(loginStyle.active) 
    : setBtnStyle(loginStyle.btn)
    setLoginErr(false);
  }, [id, pw])

  // TODO: 서버 통신
  const requestLogin = () => {
    axios.get(`http://52.79.225.144:8080/member/login`, { params: loginInfo })
      .then((response) => {
        if(response.data.status == 200) {
          successLogin();
        } else {
          console.log(response);
          setLoginErr(true);
        }
      })
      .catch((error) => {
        setLoginErr(true);
      })
  }

  const successLogin = () => {
    setLoginErr(false);  
    navigation.navigate('Main');
  }
    
  return (
    <View style={loginStyle.container}>
      <View>
        <Image source={require('../assets/mainLogo.png')} style={loginStyle.icon}></Image>
        <Text style={loginStyle.iconText}>로그인이 필요한 서비스입니다</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={loginStyle.title}>아이디</Text>
          {
            loginErr === true ? <Text style={loginStyle.loginError}>로그인에 실패하였습니다.</Text>
            : null
          }
        </View>
        <TextInput placeholder="아이디를 입력하세요" onChangeText={(value) => setId(value)} style={loginStyle.form} />
        <Text style={loginStyle.title}>비밀번호</Text>
        <TextInput placeholder="비밀번호를 입력하세요" onChangeText={(value) => setPw(value)} secureTextEntry={true} style={loginStyle.form} />
      </View>
      <View>
        <TouchableOpacity onPress={() => requestLogin()}>
          <Text style={(id !== '' && pw !== '') ? loginStyle.active : loginStyle.btn}>로그인</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => {navigation.navigate('SignUp')}}>
          <Text style={loginStyle.signUp}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const loginStyle = StyleSheet.create({
  icon: {
    width: 150,
    height: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  iconText: {
    textAlign: 'center',
    padding: 25,
    paddingBottom: 0,
    fontWeight: 'bold', 
    fontSize: 10,
    color: '#3f6ad7',
  },
  container: {
    width: width,
    height: height,
    backgroundColor: 'white',
    padding: 40,
    paddingTop: 150,
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    padding: 10,
    paddingLeft: 0,
    paddingBottom: 2.5,
    marginTop: 5,
    color: '#999999',
    fontWeight: 'bold',
  },
  form: {
    height: 50,
    borderColor: '#d9d9d9',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    paddingLeft: 15,
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
  signUp: {
    marginTop: 10,
    color: '#3c78d8',
    textDecorationLine: 'underline',
  },
  loginError: {
    flex: 1,
    padding: 10,
    paddingLeft: 0,
    paddingBottom: 2.5,
    marginTop: 5,
    color: '#cc0000',
    fontWeight: 'bold',
    textAlign: 'right',
  },
})

export default Login;