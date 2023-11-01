import React from 'react'
import { SafeAreaView, FlatList,StyleSheet } from "react-native"
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import JobCard from '../../components/JobCard'


const Jobs = ({navigation}) => {
    
    const handleSelect=(id) =>{
        return(
            navigation.navigate('Details', {id})
        )
    }

    const renderJobs = ({item}) => <JobCard props={item} onSelect={()=>handleSelect(item.id)} />

    const {data, loading, error} =
     useFetch("https://www.themuse.com/api/public/jobs?page=2")

     if(loading){
        return(
        <Loading/>)
     }

     if(error){
        return(
        <Error/>)
     }

    return(
    <SafeAreaView style={styles.container} >
          <FlatList
            data={data.results}
            renderItem={renderJobs}
            />
     </SafeAreaView>
    )
}
const styles =  StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        padding:10,
    }
 })


export default Jobs