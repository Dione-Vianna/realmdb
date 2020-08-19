/*Tela para deletar o usuário*/
import React from 'react';
import {Button, Text, View, Alert} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import Realm from 'realm';
let realm;
export default class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    realm = new Realm({path: 'UserDatabase.realm'});
    this.state = {
      input_user_id: '',
    };
  }
  deleteUser = () => {
    var that = this;
    const {input_user_id} = this.state;

    realm.write(() => {
      var ID = this.state.input_user_id;

      if (
        realm.objects('user_details').filtered('user_id =' + input_user_id)
          .length > 0
      ) {
        realm.delete(
          realm.objects('user_details').filtered('user_id =' + input_user_id),
        );
        var user_details = realm.objects('user_details');
        console.log(user_details);
        Alert.alert(
          'Sucesso',
          'Usuário excluído com sucesso',
          [
            {
              text: 'Ok',
              onPress: () => that.props.navigation.navigate('HomeScreen'),
            },
          ],
          {cancelable: false},
        );
      } else {
        alert('Insira um ID de usuário válido');
      }
    });
  };
  render() {
    return (
      <>
        <View style={{backgroundColor: 'white', flex: 1}}>
          <Mytextinput
            placeholder="Insira o ID do usuário"
            onChangeText={(input_user_id) => this.setState({input_user_id})}
          />
          <Mybutton
            title="Deletar usuário"
            customClick={this.deleteUser.bind(this)}
          />
        </View>
      </>
    );
  }
}
