import app from './src/app';

const startserver=()=>{
    const port=process.env.PORT || 3000

    app.listen(port,()=>{
        console.log(`listning ${port}`);
    })



}

startserver()