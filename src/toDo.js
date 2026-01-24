function Todo (props) {

    return (
        <tr>
            <td>
                <label>{props.id}</label>
            </td>

            <td>
                <input/>
            </td>

            <td>
                <label>{props.createAt}</label>
            </td>
        </tr>
    );

}

export default Todo;