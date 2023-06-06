import React from "react";
import { useAppSelector } from "./store/store";
import { Person } from "./store/features/personSlice";

const List = () => {
    const persons = useAppSelector((state) => state.person.persons);
    return (
        <div>
            <p>This is List Component</p>

            <table className="personTable">
                <thead className="personHead">
                    <tr className="personHeaderRow">
                        <th className="personHeader">ID</th>
                        <th className="personheader">Name</th>
                    </tr>
                </thead>
                <tbody className="personBody">
                    {persons.map((person: Person) => (
                        <tr key={person.id} className="personBodyRow">
                            <td className="personData">{person.id}</td>
                            <td className="personData">{person.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default List;