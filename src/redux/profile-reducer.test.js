import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {message: 'Hello everyone', likes: '13', id: '1'},
        {message: 'Jopa', likes: '228', id: '2'},
        {message: 'Cherema na svyazi', likes: '14', id: '3'},
        {message: 'AK47 RULEZ', likes: '1488', id: '4'},
        {message: 'Hello everyone', likes: '13', id: '5'},
    ]
}

test('Length of posts should be incremented', () => {
    let action = addPostActionCreator('AUE')

    let newState = profileReducer(state, action)


    expect(newState.posts.length).toBe(6)
    expect(newState.posts[4].message).toBe('Hello everyone')
});

 test('decrement of array length', () => {
     let action = deletePost(1)
     let newState = profileReducer(state, action)
     expect(newState.posts.length).toBe(4)
 })

