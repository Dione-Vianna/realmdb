/*Tela para atualizar o usuário*/
import React from 'react';
import {
  View,
  YellowBox,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
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
      user_name: '',
      user_contact: '',
      user_address: '',
    };
  }
  searchUser = () => {
    const {input_user_id} = this.state;
    if (input_user_id === '') {
      alert('Precisa preencher o campo Id');
    }
    console.log(this.state.input_user_id);
    var user_details = realm
      .objects('user_details')
      .filtered('user_id =' + input_user_id);
    console.log(user_details);
    if (user_details.length > 0) {
      this.setState({
        user_name: user_details[0].user_name,
      });
      this.setState({
        user_contact: user_details[0].user_contact,
      });
      this.setState({
        user_address: user_details[0].user_address,
      });
    } else {
      alert('Nenhum usuário encontrado');
      this.setState({
        user_name: '',
      });
      this.setState({
        user_contact: '',
      });
      this.setState({
        user_address: '',
      });
    }
  };
  updateUser = () => {
    var that = this;
    const {input_user_id} = this.state;
    const {user_name} = this.state;
    const {user_contact} = this.state;
    const {user_address} = this.state;
    if (input_user_id) {
      if (user_name) {
        if (user_contact) {
          if (user_address) {
            realm.write(() => {
              var ID = this.state.input_user_id;
              console.log('ID', ID);
              var obj = realm
                .objects('user_details')
                .filtered('user_id =' + this.state.input_user_id);
              console.log('obj', obj);
              if (obj.length > 0) {
                obj[0].user_name = this.state.user_name;
                obj[0].user_contact = this.state.user_contact;
                obj[0].user_address = this.state.user_address;
                Alert.alert(
                  'Sucesso',
                  'Usuário atualizado com sucesso',
                  [
                    {
                      text: 'Ok',
                      onPress: () =>
                        that.props.navigation.navigate('HomeScreen'),
                    },
                  ],
                  {cancelable: false},
                );
              } else {
                alert('Falha na atualização do usuário');
              }
            });
          } else {
            alert('Por favor preencha o endereço');
          }
        } else {
          alert('Por favor, preencha o número de contato');
        }
      } else {
        alert('Por favor preencha o nome');
      }
    } else {
      alert('Preencha o ID do usuário');
    }
  };

  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{flex: 1, justifyContent: 'space-between'}}>
            <Mytextinput
              placeholder="Insira o ID do usuário"
              onChangeText={(input_user_id) => this.setState({input_user_id})}
            />
            <Mybutton
              title="Pesquisar usuário"
              customClick={this.searchUser.bind(this)}
            />
            <Mytextinput
              placeholder="Insira o nome"
              value={this.state.user_name}
              onChangeText={(user_name) => this.setState({user_name})}
            />
            <Mytextinput
              placeholder="Insira o número do contato"
              value={'' + this.state.user_contact}
              onChangeText={(user_contact) => this.setState({user_contact})}
              maxLength={10}
              keyboardType="numeric"
            />
            <Mytextinput
              value={this.state.user_address}
              placeholder="Insira o endereço"
              onChangeText={(user_address) => this.setState({user_address})}
              maxLength={225}
              numberOfLines={5}
              multiline={true}
              style={{textAlignVertical: 'top'}}
            />
            <Mybutton
              title="Atualizar usuário"
              customClick={this.updateUser.bind(this)}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}
