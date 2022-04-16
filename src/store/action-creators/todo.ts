import axios from "axios"
import { Dispatch } from "redux"
import { TodoAction,TodoActionTypes } from "../../types/todo";
const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = (page : number = 1, limit: number = 10)=>{
    return async (dispatch:Dispatch<TodoAction>) =>{
        try{
            dispatch({type: TodoActionTypes.FETCH_TODOS});
            const response = await axios.get(url,{
                params:{_page:page,_limit:limit}
            });
            dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data});
        }catch(e){
            dispatch({type: TodoActionTypes.FETCH_TODOS_ERROR, payload:'An error occurred while loading todos...'})
        }
    }
}

export function setTodoPage(page:number):TodoAction{
    return {type:TodoActionTypes.SET_TODO_PAGE, payload: page};
}