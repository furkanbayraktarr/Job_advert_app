import {View,Text} from 'react-native'
import styles from './FavoriteCard.style'
import Button from '../Button'
import {useDispatch} from 'react-redux'

const FavoriteCard = ({props,id})=> {
  const dispatch = useDispatch()
  
  const onSelect = ()=> {
      return(
        dispatch({type:'REMOVE', params:{id} })
      )
    }



   
    return(
        <View >
          <View style= {styles.container}>
            <View style={styles.body_container} >
            <Text style={styles.title} >{props.name}</Text>
            <Text style={styles.company} >{props.company.name}</Text>
            <Text style={styles.locations} >{props.locations[0].name}</Text>
            <Text style={styles.levels} >{props.levels[0].name}</Text>
            </View>
            <Button text="Remove" onPress={onSelect} />

          </View>
          
        </View>
    )
}
export default FavoriteCard