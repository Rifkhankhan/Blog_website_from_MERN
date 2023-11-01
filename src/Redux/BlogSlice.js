import { createSlice }  from '@reduxjs/toolkit'

const initialAuthState = {
    blogs:[],
    loading:false,
    comments:[]
}
const blogSlice = createSlice ({
    name:'blog',
    initialState:initialAuthState,
    reducers:{
       toggleLoadingSpinner(state,action) {
        state.loading = !state.loading
       },
        addBlog(state,action){
            state.blogs.push(action.payload)

            // let userData = JSON.parse(localStorage.getItem('user'))
            // userData.result.card = state.cardItems
          
            // localStorage.setItem('user',JSON.stringify(userData))
        }, pushComment(state,action){
           
            state.comments.push(action.payload)

        }, getComments(state,action){
            state.comments = action.payload
        },
        addWish(state,action){
            state.wish = action.payload
        },
        getBlogs(state,action){
            state.blogs = action.payload
        },
        getCardLength(state){
            state.cardItems = JSON.parse(localStorage.getItem('user')).result.card.length
        },
        removeFromCard(state,action){
        }, 
        buy(state,action){
            state.buyItems.push(action.payload)
        }, 
        
        removeItemFromPending(state,action){
            state.pending = state.pending.filter(pen => pen.id !== action.payload)
        },
        addItemIntoProcessing(state,action){
            state.processing.push(action.payload)
        },
        addItemIntoShip(state,action){
            state.ship.push(action.payload)
        },
        removeItemFromProcessing(state,action){
            state.processing = state.processing.filter(pen => pen.id !== action.payload)
        },
        fetchProducts(state,action) {
            state.products = action.payload
        }
      
    }
})

export const blogAction = blogSlice.actions
export default blogSlice.reducer