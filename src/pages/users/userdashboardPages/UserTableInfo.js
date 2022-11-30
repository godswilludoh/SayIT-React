import { TableRow } from './TableRow';

export const UserTableInfo = ({ column, reports }) => {
	return (
		<table>
			<thead>
				<tr>
					{column.map((item, index) => (
						<TableHeadItem item={item} key={index} />
					))}
				</tr>
			</thead>
			<tbody>
				{reports.map((report) => {
					const { id, createdAt, sector } = report;
					return (
						<TableRow key={id} id={id} createdAt={createdAt} sector={sector} />
					);
				})}
			</tbody>
		</table>
	);
};

const TableHeadItem = ({ item }) => <th>{item.heading}</th>;
// const TableRow = ({ item }) => {
// 	console.log(item);
// 	return <tr></tr>;
// };
