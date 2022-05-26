import {StyleSheet,Text, View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native';

const ProfileCard = (props) => {
  return (
      <TouchableOpacity style={styles.pfcard} onPress={() =>{ return props.nav ? props.nav.navigate('data',{index : props.index,      }):null} } >

        <Image style={styles.pf_img} source={props.data.profileImage} />
        <View style={styles.cardInner}>
          <Text style={styles.name} >{props.data.displayName}</Text>
          <Text style={styles.email}>{props.data.email}</Text>
        </View>
      </TouchableOpacity>);}

const styles = StyleSheet.create({
  name: { fontSize: 18, fontWeight: "bold", color:"green" },
  email: { fontSize: 14, color: "orange"},
  cardInner: { justifyContent: 'flex-start', flexDirection: "column", width: '100%', flex: 1,},
  AMcard: { flex: 1, flexDirection: "column", justifyContent: "center", alignItems: 'center', minHeight: 120, borderRadius: 10, backgroundColor: "white", margin: 10, shadowColor: "grey", shadowOffset: { width: 0, height: 0 }, shadowOpacity: 1, shadowRadius: 15, elevation: 15, paddingBottom: 15,},
  pfcard: { flex: 1, flexDirection: "row", justifyContent: "center", alignItems: 'center', minHeight: 120, borderRadius: 10, backgroundColor: "purple", margin: 10, shadowColor: "grey", shadowOffset: { width: 0, height: 0 }, shadowOpacity: 1, shadowRadius: 15, elevation: 15,},
  pf_img: {maxWidth: 60, maxHeight: 60, marginStart: 15, marginEnd: 15, borderRadius: 10,}
});

export default ProfileCard;