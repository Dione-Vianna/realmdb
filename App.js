/*Exemplo de banco de dados RealM no React Native*/
import React from 'react';

//Importar navegação
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Importar arquivos externos
import HomeScreen from './pages/HomeScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewUser from './pages/ViewUser';
import ViewAllUser from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';

const App = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
      title: 'Home',
      headerStyle: {backgroundColor: '#000'},
      headerTintColor: '#ffffff',
    },
  },
  View: {
    screen: ViewUser,
    navigationOptions: {
      title: 'Ver usuário',
      headerStyle: {backgroundColor: '#3a59b7'},
      headerTintColor: '#ffffff',
    },
  },
  ViewAll: {
    screen: ViewAllUser,
    navigationOptions: {
      title: 'Ver todos os usuários',
      headerStyle: {backgroundColor: '#3a59b7'},
      headerTintColor: '#fff',
    },
  },
  Update: {
    screen: UpdateUser,
    navigationOptions: {
      title: 'Atualizar usuário',
      headerStyle: {backgroundColor: '#3a59b7'},
      headerTintColor: '#ffffff',
    },
  },
  Register: {
    screen: RegisterUser,
    navigationOptions: {
      title: 'Registrar usuário',
      headerStyle: {backgroundColor: '#3a59b7'},
      headerTintColor: '#ffffff',
    },
  },
  Delete: {
    screen: DeleteUser,
    navigationOptions: {
      title: 'Deletar usuário',
      headerStyle: {backgroundColor: '#3a59b7'},
      headerTintColor: '#ffffff',
    },
  },
});
export default createAppContainer(App);
