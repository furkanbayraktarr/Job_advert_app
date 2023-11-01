import { Text, TouchableOpacity, View } from "react-native";
import styles from './JobCard.style'


export default function JobCard({props, onSelect}) {
   
  


    return(
        <TouchableOpacity onPress={onSelect} >
          <View style= {styles.container}>
            <View style={styles.body_container} >
            <Text style={styles.title} >{props.name}</Text>
            <Text style={styles.company} >{props.company.name}</Text>
            <Text style={styles.locations} >{props.locations[0].name}</Text>
           
            </View>
            <View style={styles.levels_container} >
            <Text style={styles.levels} >{props.levels[0].name}</Text>
            </View>

          </View>
        </TouchableOpacity>
    )
}

/* props.locations[0].name yazıp props.locations.name yazamamamızın
sebebi locations bir array nesne(süslü parantezli) değil
array içinden seçim yaparken bu şekilde yazılır ancak company gibi
nesne olsaydı yukarda kullandığımız  props.company.name gibi yazabilirdik.  */