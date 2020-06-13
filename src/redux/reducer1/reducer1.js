import action1 from './action'

const INITIAL_STATE={
    like: false
}


const reducer1=(state=INITIAL_STATE, action)=>{
   switch (action.type) {
       case 'LIKE_POST':
           return{
               ...state,
               like: !INITIAL_STATE.like
           }
       default:
          return state;
   }
       
}

export  default reducer1;