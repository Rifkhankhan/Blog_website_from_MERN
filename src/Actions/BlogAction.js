
import swal from 'sweetalert'
import * as blogApi from '../Apis/BlogApi'

import { blogAction } from '../Redux/BlogSlice'



export const getBlogs = () => async dispatch => {
	try{
		const { data } = await blogApi.getBlogs()
		dispatch(blogAction.getBlogs(data))
	} catch(err) {
		console.log(err);
	}
}

export const createBlog = (formData) => async dispatch => {
	try{
		const { data } = await blogApi.createBlog(formData)
		dispatch(blogAction.addBlog(data))
	} catch(err) {
		console.log(err);
	}
}

export const pushComment = (formData) => async dispatch => {
	try{
		dispatch(blogAction.pushComment(formData))
		const { data } = await blogApi.pushComment(formData)

	} catch(err) {
		console.log(err);
	}
}

export const getComments = (id) => async dispatch => {
	try{
		const { data } = await blogApi.getComments(id)
		dispatch(blogAction.getComments(data))
	} catch(err) {
		console.log(err);
	}
}

export const likeBlog = (formData) => async dispatch => {
	try{
		dispatch(blogAction.likeBlog(formData))
		await blogApi.toggleLike(formData)
	} catch(err){
		console.log(err);
	}
}

export const disLikeBlog = (formData) => async dispatch => {
	try{
		dispatch(blogAction.disLikeBlog(formData))

	 await blogApi.toggleLike(formData)

	} catch(err){
		console.log(err);
	}
}