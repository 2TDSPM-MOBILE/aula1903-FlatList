import { ActivityIndicator } from "react-native";

export default function Loading ({isLoading}){
    return isLoading?<ActivityIndicator 
            color="white"
            size={40}
            style={{margin:20}}
        />
        :
        null
}