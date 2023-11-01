import {  ScrollView, View, Text } from "react-native";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import RenderHTML from 'react-native-render-html';
import styles from './Details.style'
import Button from "../../components/Button";
import {useDispatch} from 'react-redux'
import FavoriteCard from "../../components/FavoriteCard";

export default function Details ({route}) {
    const {id} = route.params
    const {data,loading,error} = useFetch('https://www.themuse.com/api/public/jobs/' + id)
    const dispatch = useDispatch()

    const favoritedJob = <FavoriteCard props={data} id={id} />
    
  

  
  const handleSelect =() => {
    return(
        dispatch({type:'FAVORITE', payload:{favoritedJob}, params:{id}}),
        console.log(favoritedJob.props.id)
    )

  }
 

    if(loading){
        return(
        <Loading/>)
     }

     if(error){
        return(
        <Error/>)
     }
    
    return(
        <ScrollView  >
           <View style={styles.container} >
            <Text style={styles.name} >{data.name}</Text>
            <View style={styles.locations_container} >
            <Text style={styles.locations_text}>Locations:</Text>
            <Text style={styles.locations} > {data.locations[0].name}</Text>
            </View>
            <View style={styles.container_levels} >
            <Text style={styles.levels_text} >Job level:</Text>
            <Text style={styles.levels} > {data.levels[0].name}</Text>
            </View>
            <Text style={styles.header} >Job Detail</Text>
            </View>
            <View style ={styles.instructions} >
            <RenderHTML source={{html:`${data.contents}`}}
             tagsStyles={{
              p: {
                color: 'black', // Yazı rengini burada belirledik
              },
              li: {
                color: 'black', // Yazı rengini burada belirledik
              },
              b: {
                color: 'black', // Yazı rengini burada belirledik
              },
              strong: {
                color: 'black', // Yazı rengini burada belirledik
              },
            }} 
            contentWidth={500}></RenderHTML>
            
            <Button text={"Favorite Job"} onPress={handleSelect}/>

           </View>
           
           
        </ScrollView>
    )
}
