import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {FontAwesome6} from "@expo/vector-icons";



const styles = StyleSheet.create({

    boxText: {
        fontSize: 25,
        marginLeft: 10,
        color:'white',
        textAlign:'center',
    },
    title: {
        flex:1,
        flexDirection: "row",
        width: 400,
        marginTop: 30,
        backgroundColor: 'navy',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius:12,
    },

    description:{
        flex:1,
        width: 400,
        marginTop: 30,
        backgroundColor: 'steelblue',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius:12,


    }
});


const GetABoat = ({ name, description, picture,icon_color,icon_name,width,height}) => {
  return (

      <View style={{backgroundColor:'powderblue'}}>
          <View style={[styles.title, {flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}]}>
              <FontAwesome6 name={icon_name} size={28} color={icon_color} />
              <Text style={[styles.boxText, { fontSize: 32, flexShrink: 1, fontWeight: 'bold' }]}>
                  {name}
              </Text>
          </View>

              {/*<Text style={{textAlign:'center'}}>{description}</Text>*/}
          <View style={styles.title}>
              <Image source={picture} style={{width, height}}/>
          </View>

          <View style={styles.description} >
              <Text style={[styles.boxText,{textAlign:'center',}]}>{description}</Text>
          </View>
            {/*<Image source={picture} style={{width, height}}/>*/}
      </View>
  );
};

export default GetABoat;
