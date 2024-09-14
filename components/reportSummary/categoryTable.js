export default function CategoryTable({category}) {
  const {name, total, items} = category

  return <table>
    <tbody>
    <tr>
      <th>{name}</th>
      <th>{total}</th>
    </tr>
    {items.map((item, index) => {
      return <tr key={index}>
        <td>{item.name}</td>
        <td>{item.total}</td>
      </tr>
    })}
    </tbody>
  </table>
}

