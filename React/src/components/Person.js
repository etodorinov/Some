export const Person = (props) => {
  let { person, index } = props;

  const picturesMainUrl = "http://apis.chromeye.com:9191";

  function writeEmail(e) {
    e.preventDefault();
    window.open(`mailto:${e.value}`);
    console.log(e.target);
  }

  return (
    <tr
      className={(index + 1) % 2 !== 0 ? "table-row-uneven" : "table-row-even"}
    >
      <td
        className={
          (index + 1) % 2 !== 0 ? "table-data-uneven" : "table-data-even"
        }
      >
        <img
          src={picturesMainUrl + person.avatar.url}
          alt={person.avatar.name}
          className="image"
        ></img>
      </td>
      <td
        className={
          (index + 1) % 2 !== 0 ? "table-data-uneven" : "table-data-even"
        }
      >
        {person.id}
      </td>
      <td
        className={
          (index + 1) % 2 !== 0 ? "table-data-uneven" : "table-data-even"
        }
      >
        {person.firstName}
      </td>
      <td
        className={
          (index + 1) % 2 !== 0 ? "table-data-uneven" : "table-data-even"
        }
      >
        {person.lastName}
      </td>
      <td
        className={
          (index + 1) % 2 !== 0 ? "table-data-uneven" : "table-data-even"
        }
      >
        <a
          href={`mailto:${person.email}`}
          className="mailto"
          onClick={writeEmail}
        >
          {person.email}
        </a>
      </td>
      <td
        className={
          (index + 1) % 2 !== 0 ? "table-data-uneven" : "table-data-even"
        }
      >
        {person.company.name}
      </td>
      <td
        className={
          (index + 1) % 2 !== 0 ? "table-data-uneven" : "table-data-even"
        }
      >
        {person.company.department}
      </td>
      <td
        className={
          (index + 1) % 2 !== 0 ? "table-data-uneven" : "table-data-even"
        }
      >
        {person.company.startDate}
      </td>
    </tr>
  );
};
