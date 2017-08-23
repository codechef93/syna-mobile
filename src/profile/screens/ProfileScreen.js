import * as React  from 'react';
import {StyleSheet} from 'react-native';
import Header from '../components/Header';
import {Container, Content, Background, SafeAreaView,Text,View} from '../../common';
import { useSelector } from 'react-redux'


/* =============================================================================
<ProfileScreen />
============================================================================= */
const ProfileScreen = () => {
  const user = useSelector(state => state.Auth.user)

  return (
    <SafeAreaView>
      <Container backgroundColor="#fff">
        {user?<Content backgroundColor="transparent">
          <Background />

          <Header id={user.code}  constraint = "picturePathway" picturePathway = {user.picturePathway} name={user.fullName} />
          <View style={styles.container}>
      <View flex={1} justifyContent="center">
      <Text style={styles.edit1}>About us</Text>
      <Text style={styles.edit3}>Syna clinic is a state of the art dental practice , we offer specialized dental treatment using the latest technologies to ensure your best interest in a welcoming and responsive environment.</Text>
          <Text style={styles.edit1}> Contact us</Text>
          <Text style={styles.edit}> Phone : +21671267262</Text>
          <Text style={styles.edit}> Email : contact@synaclinic.tn</Text>
          </View>
          </View>
          </Content>:null}
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 25,
   
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
  edit1: {
    marginLeft: 5,
    fontSize: 14,
    color: '#000',
    fontFamily: 'Noah-Bold',
    textTransform: 'uppercase',
    marginBottom:15
  },
  edit: {
    marginLeft: 5,
    fontSize: 12,
    color: '#000',
    textTransform: 'uppercase',
  },
  edit3: {
    marginLeft: 5,
    marginBottom:30,
    marginRight:20,
    fontSize: 12,
    color: '#000',
    textAlign: 'justify',
    textTransform: 'uppercase',
  },
});

export default ProfileScreen;
