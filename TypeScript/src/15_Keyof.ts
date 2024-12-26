interface Person5
{
    name: string;
    age: number;
}
function print ( person: Person5, key: keyof Person5)
{
    console.log(key+":"+person[key]);
}
const person5: Person5 = {
    name: "Arpan",
    age: 20
};
print(person5, "name");