function DessertsList(props) {
  // Implement the component here.

  const filteredList = props.data.filter(item => item.calories < 500).
    sort((a, b) => a.calories - b.calories);

  return (
    <ul>
      {filteredList.map(item => {
        return (
          <li key={item.name}>
            {item.name} - {item.calories}
          </li>)

      })}
    </ul>
  )




}

export default DessertsList;
