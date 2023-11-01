export default function reducers(state,action) {

switch(action.type){
    case 'FAVORITE':
        const { favoritedJob } = action.payload;
        if (!favoritedJob) {
            // Geçersiz bir favori iş ilanı, işlem yapmayın
            return state;
        }
        if (state.favoriteList.some(item => item.props.id === favoritedJob.props.id)) {
            // İş ilanı zaten favorilerde, tekrar eklemeyin
            return state;
        }
        const newFavoriteList = [...state.favoriteList, favoritedJob];
        
        return {
            ...state,
            favoriteList: newFavoriteList
        }
        case 'REMOVE':
            
            const {id} = action.params
            const newFavorites = state.favoriteList.filter(item => item.props.id !== id);
           
            return {
                ...state,
                favoriteList: newFavorites
            };

   default:
    return state

}
}