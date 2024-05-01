const mynums=[1,2,3]

// const mytotal =mynums.reduce(function (acc, currentvalue){
//     console.log(`acc:${acc} and currentvalue:${currentvalue}`);
//     return acc+currentvalue
// },0)

const mytotal= mynums.reduce((acc , curval)=>acc+curval,0)
console.log(mytotal);

const shoppingcart = [
    {
        itemname:"js course",
        price:2999
    },
    {
        itemname:"python course",
        price:5999
    },
    {
        itemname:"android course",
        price:12999
    }
]
const pricetopay=shoppingcart.reduce((acc,item)=>item.price+acc,0)
console.log(pricetopay);