// switch case statement , redux wagera me kaam aaata ha
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month =3

switch (month) {
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("march") // break control flow ko rokta ha, or har value ko test karne me help karta ha nahi ho case match hone ke bad har value ko print kar dega except the default
        break;
    case 4:
        console.log("april")
        break;
    case 5:
        console.log("may")
        break;

        
    default:console.log("default case match")
        break;
}