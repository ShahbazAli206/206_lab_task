import { useState } from 'react';
import { StyleSheet,View, ScrollView } from 'react-native';
import ProfileCard from './propfilecards';
import User_Array from '../rec/data';





export default function  ProfileScreen(props) {
    const [user, setUser] = useState(User_Array);

  return (
    <View style={styles.container}>

      <ScrollView styles={{ height: "100%", width: "100%" }}>
       {user.map((item, index) => { return  <ProfileCard key={index} data={item} /> })}
      </ScrollView>

    </View>

  );
}


const styles = StyleSheet.create({
  container: {justifyContent: 'flex-start',  flexDirection: "column",  width: '100%',  flex: 1,},
  row: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "100%", marginStart: 20 },
  title: {  fontSize: 18,  fontWeight: "bold",  marginTop: 10,  marginBottom: 10,},
  name: { fontSize: 14,  fontWeight: "bold", },
  cardInner: { justifyContent: 'flex-start', flexDirection: "column", width: '100%', flex: 1, },
  slidercard: {  borderRadius: 10,  backgroundColor: "white",  margin: 10,  height: 200,  shadowColor: "grey",  shadowOffset: { width: 0, height: 0 },  shadowOpacity: 1,  shadowRadius: 15,  paddingBottom: 15,},
  AMcard: { flex: 1, flexDirection: "column", justifyContent: "center", alignItems: 'center', minHeight: 120, borderRadius: 10, backgroundColor: "white", margin: 10, shadowColor: "grey", shadowOffset: { width: 0, height: 0 }, shadowOpacity: 1, shadowRadius: 15, elevation: 15, paddingBottom: 15,},
  pfcard: {  flex: 1,  flexDirection: "row",  justifyContent: "center",  alignItems: 'center',  minHeight: 120,  borderRadius: 10,  backgroundColor: "yellow",  margin: 10,  shadowColor: "purple",  shadowOffset: { width: 0, height: 0 },  shadowOpacity: 0.8,  shadowRadius: 18,  elevation: 18,},
  pf_img: {  maxWidth: 45,  maxHeight: 45,  marginStart: 18,  marginEnd: 18,  borderRadius: 25, }, 
  email: { fontSize: 12,},
  value: { fontSize: 14},
  key: {fontWeight: "bold", fontSize: 16, marginEnd: 10},


});

