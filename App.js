import React,{useRef,useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { SketchCanvas, SketchCanvasRef } from 'rn-perfect-sketch-canvas';
const Height=Dimensions.get('window').height
const Width=Dimensions.get('window').width
function App() {
  const [isVisible,setIsVisible]=useState(false)
  const [drawcolor,setDrawColor]=useState('red')
  const canvasRef = useRef();
  const penColor=['white','black','red','darkred','blue','lightblue','green','darkgreen','yellow','pink','orange','purple','gray','brown']
  

  const ColorPicker=()=>{
    return(
      <View style={styles.penColorPickerContainer}>
        <FlatList
        style={{height:'100%',width:'100%'}}
        horizontal={true}
        data={penColor}
        renderItem={({item}) => {
          return(
            <TouchableOpacity onPress={()=>{
                setDrawColor(item)
            }}  style={{height:30,margin:15,top:15, width:30,backgroundColor:item}}>
             
            </TouchableOpacity>
    )
        }}
        keyExtractor={item => item}
      />
      </View>
    )
  }
  return (
<View style={styles.body}>
<SketchCanvas
        ref={canvasRef}
        strokeColor={drawcolor}
        strokeWidth={8}
        containerStyle={styles.container}
      
      />
      <View style={styles.EditOptionsContainer}>
        <TouchableOpacity onPress={canvasRef.current?.undo} style={styles.EditButton}>
          <View style={styles.EditIconView}>
      <Image
      style={styles.IconImage}
      source={require('../projectcanvas/src/Images/undo.png')}
      />
      </View>
      <Text style={styles.IconTitleText}>Undo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={canvasRef.current?.redo} style={styles.EditButton}>
          <View style={styles.EditIconView}>
      <Image
      style={styles.IconImage}
      source={require('../projectcanvas/src/Images/redo.png')}
      />
      </View>
      <Text style={styles.IconTitleText}>Redo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={canvasRef.current?.save} style={styles.EditButton}>
          <View style={styles.EditIconView}>
      <Image
      style={styles.IconImage}
      source={require('../projectcanvas/src/Images/download.png')}
      />
      </View>
      <Text style={styles.IconTitleText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={canvasRef.current?.reset} style={styles.EditButton}>
          <View style={styles.EditIconView}>
      <Image
      style={styles.IconImage}
      source={require('../projectcanvas/src/Images/reset.png')}
      />
      </View>
      <Text style={styles.IconTitleText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          setIsVisible(!isVisible)
        }} style={styles.EditButton}>
          <View style={styles.EditIconView}>
      <Image
      style={styles.IconImage}
      source={require('../projectcanvas/src/Images/colour.png')}
      />
      </View>
      <Text style={styles.IconTitleText}>Color</Text>
        </TouchableOpacity>
      
      </View>
      {isVisible?
      <ColorPicker/>:null
}
</View>
  );
}

const styles = StyleSheet.create({
  body:{
    height:Height,
    width:Width,
backgroundColor:'white'
  },
  container: {
    flex: 1,
  },
  EditOptionsContainer:{
    // backgroundColor:'red',
    height:Height/10,
    width:Width,
    position:'absolute',
    marginTop:'5%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  EditButton:{
    height:'80%',
    width:'15%',
    // backgroundColor:'blue',
    alignItems:'center'
  },
  EditIconView:{
    height:'60%',
    width:'70%',
    // backgroundColor:'lightgray',
    borderRadius:50,
    justifyContent:"center",
    alignItems:'center'
  },
  IconImage:{
    height:'70%',
    width:'70%',
    resizeMode:'contain',
  },
  IconTitleText:{
    color:'black'
  },
  penColorPickerContainer:{
    backgroundColor:"lightgray",
    height:'10%',
    width:'90%',
    alignSelf:'center',
    top:'85%',
    position:'absolute',
    borderRadius:20,
    flexDirection:'row'
  },

});

export default App;
