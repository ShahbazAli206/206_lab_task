import { View, StyleSheet,ScrollView } from 'react-native';
import ProfileCard from './propfilecards';

const PersonalInfo = {
  id: "46546464",
  displayName: "Muhammad Shahbaz Ali",
  profileImage: require('../assets/mine_img.jpg'),
  bio: "i am a boy, my age is 22, i am studying in comsats university in wah campus, in compputer science discipline. for details info you can contact me. Thanks.",
  email: "sa38299793@gamil.com"}

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>

      <ScrollView styles={{ height: "100%", width: "100%" }}>
        <ProfileCard data={PersonalInfo} />
      </ScrollView>
    </View>);}


const styles = StyleSheet.create({
  container: {   justifyContent: 'flex-start', flexDirection: "column",  width: '100%',  flex: 1,},
  row: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "100%", marginStart: 30 },
  key: { fontWeight: "bold", fontSize: 16, marginEnd: 10  },
  value: { fontSize: 17},
  title: { fontSize: 18, fontWeight: "bold", marginTop: 14, marginBottom: 10, },
  name: {  fontSize: 14,  fontWeight: "bold", },
  
  email: {  fontSize: 12,},
  cardInner: {  justifyContent: 'flex-start',  flexDirection: "column",  width: '100%',  flex: 1,},
  slidercard: {   borderRadius: 10,   backgroundColor: "aqua",   margin: 10,   height: 200,   shadowColor: "grey",   shadowOffset: { width: 0, height: 0 },   shadowOpacity: 1,   shadowRadius: 15,   paddingBottom: 15,},
  AMcard: { flex: 1, flexDirection: "column", justifyContent: "center", alignItems: 'center', minHeight: 120, borderRadius: 10, backgroundColor: "aqua", margin: 10, shadowColor: "grey", shadowOffset: { width: 0, height: 0 }, shadowOpacity: 1, shadowRadius: 15, elevation: 15, paddingBottom: 15,},
  pfcard: {   flex: 1,   flexDirection: "row",   justifyContent: "center",   alignItems: 'center',   minHeight: 120,   borderRadius: 10,   backgroundColor: "aqua",   margin: 10,   shadowColor: "grey",   shadowOffset: { width: 0, height: 0 },   shadowOpacity: 1,   shadowRadius: 15,   elevation: 15,},
  pf_img: {  maxWidth: 40,  maxHeight: 45,  marginStart: 18,  marginEnd: 15,  borderRadius: 30,  }});

export default HomeScreen;