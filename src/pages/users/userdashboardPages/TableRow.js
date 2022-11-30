export const TableRow = ({ id, createdAt, sector }) => {
	return (
		<tr>
			<td>{id}</td>
			<td>{createdAt}</td>
			<td>{id}</td>
			<td>{sector}</td>
			<td>View</td>
		</tr>
	);
};
