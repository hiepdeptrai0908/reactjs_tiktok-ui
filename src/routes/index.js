// Layouts
import { HeaderOnly } from '~/components/Layouts'

import configRoutes from '~/config/routes'
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'

// Public routes
const publicRoutes = [
    { path: configRoutes.home, component: Home },
    { path: configRoutes.following, component: Following },
    { path: configRoutes.profile, component: Profile },
    { path: configRoutes.upload, component: Upload, layout: HeaderOnly },
    { path: configRoutes.upload, component: Search, layout: null },
]

// Private routes
const privateRoutes = []

export { publicRoutes, privateRoutes }
