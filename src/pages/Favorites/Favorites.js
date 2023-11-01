import React from 'react'
import { SafeAreaView, TouchableOpacity, StyleSheet, FlatList} from "react-native"
import {useSelector} from 'react-redux'



const Favorites = ({navigation}) => {

    const myfavorite = useSelector(s => s.favoriteList) 

    const TouchScreen =(id) =>  {
        return(
          navigation.navigate('JobsStack', { screen: 'Details',params: {id} })
          
        )
      } 
    

      
    const renderFavorites = ({ item }) => (
        <TouchableOpacity onPress={()=>TouchScreen(item.props.id)} >{item}</TouchableOpacity>
        )
   
        return(
        <SafeAreaView>
            <FlatList
                data={myfavorite}
                renderItem={renderFavorites}
                keyExtractor={(item) => (item && item.props.id ? item.props.id.toString() : 'unique-key')}

            />
        </SafeAreaView>
    )

}


export default Favorites

const styles = StyleSheet.create({
    container:{
         margin: 5,}
    
})
