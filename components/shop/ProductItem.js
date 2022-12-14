import React from "react"
import { Button, View,Text,Image, StyleSheet,Pressable } from "react-native"
import Colors from '../../constants/Colors.js'
import Card from "../UI/Card.js"


const ProductItem = props =>{
return (
    <Pressable   android_ripple={{color: Colors.primary,overflow:"hidden"}} onPress={props.onSelect}>
    <Card style={styles.product}>
        <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri:props.image}}/>
        </View>
        <View style={styles.details}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>${props?.price?.toFixed(2)}</Text>
        </View>
        <View style={styles.actions}>
        {props.children}
        </View>
    </Card>
    </Pressable>
)
}

export default ProductItem

const styles = StyleSheet.create({
    product:{
        height:300,
        margin:20
    },
    image:{
        width:"100%",
        height:"100%"
    },
    imageContainer:{
        width:"100%",
        height:"60%",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        overflow:"hidden"
    },
    title:{
        fontSize:18,
        marginVertical:4
    },
    price:{
        fontSize:14,
        color:"#888"
    },
    actions:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        height:"25%",
        paddingHorizontal:20
    },
    details:{
        alignItems:"center",
        height:"15%",
        padding:5
    },

})