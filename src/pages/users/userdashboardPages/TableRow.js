export const TableRow = ({ id, createdAt, sector, status, index }) => {
	return (
		<tr>
			<td>{index + 1}</td>
			<td>{createdAt}</td>
			<td>{id}</td>
			<td>{sector}</td>
			<td>{status}</td>
		</tr>
	);
};
