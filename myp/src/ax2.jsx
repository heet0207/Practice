import {useReducer} from 'react';
function Reducer(co,action){
    if(action.type ==='increment') {
        return co + 1;
        // console.log('Thala For Reason')
    }
}
function Ax2(){
    const [co,dispatch] = useReducer(Reducer,-7)
    return(
        <button onClick={()=>
            dispatch({type:'increment'})
        }>click me {co}</button>
    )
}
export default Ax2;


// function qw(){
//     const [sa,dis] = useReducer(Reducer,20);
//     return(
//         <>
//             <button onClick={()=>
//             dis({type:'increment'})
//         }>click me {sa}</button>
//         </>
//     )
// }
// export default qw;



