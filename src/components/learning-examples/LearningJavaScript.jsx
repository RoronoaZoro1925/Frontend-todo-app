const person ={
    name:'Zoro',
    address:{
        line1: 'Swordsmith Village',
        city: 'Tokyo',
        country: 'Japan',
    },

    profiles:['First-Mate','Swordsman','Directionless'],

    printProfile: () =>{
        person.profiles.map(
            (profile) =>{
                console.log(profile)

            }
        )
        
    }
}
export default function LearningJavaScript() 
{
    return(
        <>
        <div>{person.name}</div>
        <div>{person.address.line1}</div>
        <div>{person.profiles[0]}</div>
        <div>{person.printProfile()}</div>
        </>
    )
    
}