import './style.scss';

//loop through each directory in src/block-variations and run the default function
//this will register each block variation
const req = require.context('./block-variations/', true, /index\.js$/);
req.keys().forEach((key) => {
    req(key).default();
});
