const data =[
{title:"Procucto 1"},
{},
{},

];

const getData= new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(data);
    },5000)
   
});
export default getData;