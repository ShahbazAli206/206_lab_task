import { StyleSheet, Text, View, Image } from 'react-native';

const TitleBar = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} />
      <Text style={styles.TextStyle}>{props.title}</Text>
    </View>
  );}
const styles = StyleSheet.create({
  container: { backgroundColor: "#fff", width: '100%', height: "100%", flex: 1, justifyContent:"center", alignItems: 'center', marginStart:10, flexDirection: 'row',},
  TextStyle: { textAlign: "center", color: "#7a1f5c", fontSize: 20, justifyContent: "center", marginStart:-10, fontWeight: 'bold', width: "100%",},
  logo: { maxHeight: 40, maxWidth: 40, }});
export default TitleBar;