import * as React from 'react';
import {StyleSheet, TextInput} from 'react-native';

import {View, Text, Touchable} from '../../common';
import Pencil from '../../assets/icons/pencil.svg';

/* =============================================================================
<ProfileItem />
============================================================================= */
const ProfileItem = ({label, value,constraint,submit}) => {
  const [editable, setEditable] = React.useState(false);
  const [val, setVal] = React.useState('');

  const _handleEdit = () => {
    setEditable(true);
  };

  const _handleSave = () => {
    setEditable(false);
  };

  return (
    <View style={styles.container}>
      <View flex={1} justifyContent="center">
        <Text style={styles.label}>{label}</Text>
        {editable && (
          <TextInput
            autoFocus
            onChangeText={setVal}
            defaultValue={constraint == 'password'?'':value}
            style={styles.value}
            onBlur={async()=>{
             await submit(constraint,val)
             _handleSave()
            }}
          />
        )}

        {!editable && <Text style={styles.value}>{(constraint == 'password'&&editable)? '':value}</Text>}
      </View>

      {editable && (
        <Touchable style={styles.editContainer} onPress={_handleSave}>
          <Text style={styles.edit}>Save</Text>
        </Touchable>
      )}

      {!editable &&(!(constraint == 'phone')) && (
        <Touchable style={styles.editContainer} onPress={_handleEdit}>
          <Pencil />

          <Text style={styles.edit}>Edit</Text>
        </Touchable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 74,
    flexDirection: 'row',
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
  },
  label: {
    fontSize: 10,
    color: '#C2C2C2',
    fontFamily: 'Noah-Bold',
    textTransform: 'uppercase',
  },
  value: {
    width: '100%',
    margin: 0,
    padding: 0,
    fontSize: 20,
    color: '#595959',
    fontFamily: 'Noah-Bold',
    textTransform: 'capitalize',
  },
  editContainer: {
    height: '100%',
    paddingRight: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  edit: {
    marginLeft: 5,
    fontSize: 10,
    color: '#000',
    fontFamily: 'Noah-Bold',
    textTransform: 'uppercase',
  },
});

export default ProfileItem;
