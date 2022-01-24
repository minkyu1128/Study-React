# Router 사용
### Router 포맷
```react
### App.js
import {Routes, Route, BrowserRouter} from "react-router-dom";
...
<BrowserRouter>
    <Routes>
        <Route path="[URL PATH]" element={[React Component]} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>
</BrowserRouter>


### Home.js
import {Link} from "react-router-dom";
...
    <Link to={"/profile"}>Go to Profile</Link>
...
 
 
### Profile.js
import {Link} from "react-router-dom";
...
    <Link to={"/"}>Go to Home</Link>
...
```

# 사이트참고
* [React Router 공식 사이트-api 및 예제 있음](https://reactrouter.com/docs/en/v6/getting-started/installation)
