import React from "react";

import env from '@env';

const App = () => 
console.log({env}) ||
(
    <div>
        <h1>Hello, whatever!</h1>
    </div>
);

export default App;