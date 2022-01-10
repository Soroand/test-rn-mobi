import { createSlice } from '@reduxjs/toolkit'

export const commentSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [
        {
            id: 1,
            comment: 'Hello world',
            subcomments: [
                {
                    id: 2,
                    comment: 'lol'
                }
            ]
        },
        {
            id: 3,
            comment: 'Whats new',
            subcomments: [
                {
                    id: 4,
                    re: null,
                    comment: 'not much',
                },
                {
                    id: 5,
                    re: 'not much',
                    comment: 'meh not impressed'
                }
            ]
        }
    ]
  },
  reducers: {
    addComment: (state, action) => {
      state.comments.unshift(action.payload)
    },    
    mainSubcomment: (state, action) => {
       const {parentId, id, comment} = action.payload
       state.comments.filter(item => {
          if(item.id === parentId){
            item.subcomments.unshift({id, re:null, comment})
          }
        })
    },
    replySubcomment: (state, action) => {
      const {parentId, id, comment, re} = action.payload
       state.comments.filter(item => {
          const repSub = () => {
            item.subcomments.push({id, re, comment})
          }
          item.subcomments.filter(item => {
            if(item.id === parentId){
            repSub()
          }
          })
        })
    }
  }
})


export const { addComment, mainSubcomment, replySubcomment } = commentSlice.actions

export default commentSlice.reducer