import './style/style.less'
import './style/reset.css'
import './style/iconfont.css'
import './libs/flexible.js'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router,Route,IndexRoute} from 'react-router'
import createHistory from 'history/lib/createHashHistory'
import configureStore from './store/configureStore'
import App from './containers/App'
import Home from './containers/Home'
import BlogPage from './containers/BlogPage'
import Contact from './containers/Contact'
import Post from './containers/Post'
import BlogPageContent from './components/BlogPageContent'
import AdminBlogContent from './components/admin/AdminBlogContent'
import AdminPage from './containers/admin/AdminPage'
import AdminBlogEdit from './components/admin/AdminBlogEdit'
import AddBlogPage from './components/admin/AddBlogPage'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


const store = configureStore()
const history = createHistory()

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="contact" component={Contact}/>
               	<Route path="blog" component={BlogPage}>
                    <Route path="sort/:type" component={BlogPageContent} />
                </Route>
                <Route path="blogs/:id" component={Post} />
                <Route path="admin" component = {AdminPage}>
                    <Route path="manage/:type" component={AdminBlogContent}/>
                    <Route path="edit/:id" component={AdminBlogEdit}/>
                    <Route path="addblog/:type" component={AddBlogPage}/>
                </Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)
