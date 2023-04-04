export default function Greeting(){

    const person = {
        firstName: "John",
        lastName: "Ipson",
        age: 33
    }
    return(
        <h1>Howdy, {person.firstName}</h1>
    )
}