/*Tela inicial com botões para navegar para opções diferentes*/
import React from 'react';
import {View} from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';

import Realm from 'realm';
let realm;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    realm = new Realm({
      path: 'UserDatabase.realm',
      schema: [
        {
          name: 'user_details',
          properties: {
            user_id: {type: 'int', default: 0},
            user_name: 'string',
            user_contact: 'string',
            user_address: 'string',
          },
        },
      ],
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'column',
        }}>
        <View style={{alignItems: 'center', marginTop: 23}}>
          <Mytext text="Exemplo Realm DB" />
        </View>
        <Mybutton
          title="Registro"
          customClick={() => this.props.navigation.navigate('Register')}
        />
        <Mybutton
          title="Atualizar"
          customClick={() => this.props.navigation.navigate('Update')}
        />
        <Mybutton
          title="Visualizar"
          customClick={() => this.props.navigation.navigate('View')}
        />
        <Mybutton
          title="Visualizar Todos"
          customClick={() => this.props.navigation.navigate('ViewAll')}
        />
        <Mybutton
          title="Excluir"
          customClick={() => this.props.navigation.navigate('Delete')}
        />
      </View>
    );
  }
}
