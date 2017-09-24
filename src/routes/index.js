import Home from '../views/Home.vue'
import User from '../views/user/User.vue'
import Comment from '../views/user/Comment.vue'
import Upload from '../views/upload/Upload.vue'
import Cate from '../views/cate/Cate.vue'
import Log from '../views/log/Log.vue'
import addNote from '../views/log/addNote.vue'
// import Login from '../views/login_register/login.vue'
export const routes = [
    { path: '/', component: Home },
    { path: '/user', component: User },
    { path: '/upload', component: Upload },
    { path: '/comment', component: Comment },
    { path: '/cate', component: Cate },
    { path: '/note', component: Log },
    { path: '/note/addNote', component: addNote}
]